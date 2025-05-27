import React, {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import "./QuizComponent.css";
import { http } from "../../utils/fetch";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ArcherContainer, ArcherElement } from "react-archer";

const QuizComponent = ({ setIsQuizActive }) => {
  const { pollutionTypeId, subbab } = useParams();
  const parsedPollutionTypeId = parseInt(pollutionTypeId, 10);
  const parsedSubbab = parseInt(subbab, 10);

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const basePath = location.pathname.split("/")[1];

  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(605); // ini ganti menitannya disini

  // State untuk soal drag
  const [selectedSource, setSelectedSource] = useState({
    questionId: null,
    sourceIndex: null,
  });
  const archerContainerRef = useRef(null); // Ref untuk ArcherContainer

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (showResults) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Submit jawaban terlebih dahulu
          handleSubmit(false);
          // Tampilkan dialog waktu habis
          confirmAlert({
            title: "Waktu Habis",
            message:
              "Waktu habis, jawaban Anda telah dikumpulkan. Klik OK untuk melanjutkan.",
            buttons: [
              {
                label: "OK",
                onClick: () => {
                  window.location.reload();
                },
              },
            ],
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults, basePath, navigate]); // handleSubmit dependency removed temporarily to avoid complexity, handle it carefully

  const getMaterialId = (pollutionTypeId, subbab) => {
    const map = {
      "1-1": 28,
      "1-2": 29,
      "1-3": 30,
      "2-1": 31,
      "2-2": 32,
      "2-3": 33,
      "3-1": 34,
      "3-2": 35,
      "3-3": 36,
    };
    return map[`${pollutionTypeId}-${subbab}`];
  };

  useEffect(() => {
    // Only reset if we're not showing results
    if (!showResults) {
      setAnswers({});
      setShowResults(false);
      setQuestions([]);
      setLoading(true);
      setScore(null);
      setSelectedSource({ questionId: null, sourceIndex: null });
      setTimeLeft(605); // Reset timer
    }
  }, [parsedPollutionTypeId, parsedSubbab, showResults]);

  useEffect(() => {
    if (!user?.id) return;

    const fetchUserAnswers = async () => {
      try {
        setLoading(true);

        // Fetch both questions and answers in parallel
        const [resAnswers, resQuestions] = await Promise.all([
          http(
            `/api/quiz-reports?user_id=${user.id}&pollution_type_id=${parsedPollutionTypeId}&subbab=${parsedSubbab}`,
            { method: "GET" }
          ),
          http(
            `/api/quizzes?pollution_type_id=${parsedPollutionTypeId}&sub_bab=${parsedSubbab}`,
            { method: "GET" }
          ),
        ]);

        const [reports, questionsData] = await Promise.all([
          resAnswers.json(),
          resQuestions.json(),
        ]);

        const fetchedQuestions = formatQuizzesData(questionsData);

        if (reports.length > 0) {
          const restoredAnswers = {};
          let correctCount = 0;

          // Buat map untuk memudahkan pencarian report berdasarkan quiz_id
          const reportsMap = new Map(
            reports.map((report) => [report.quiz_id, report])
          );

          fetchedQuestions.forEach((question) => {
            const report = reportsMap.get(question.questionId);
            if (report) {
              try {
                const parsedAnswer = JSON.parse(report.user_answer);
                restoredAnswers[question.questionId] = parsedAnswer;

                const tempAnswers = { [question.questionId]: parsedAnswer };
                if (checkIndividualAnswerCorrectness(question, tempAnswers)) {
                  correctCount++;
                }
              } catch (error) {
                console.error("Error parsing answer:", error);
              }
            }
          });

          // Update all states at once
          setQuestions(fetchedQuestions);
          setAnswers(restoredAnswers);
          setScore(correctCount);
          setShowResults(true);
          setIsQuizActive(false);
        } else {
          setQuestions(fetchedQuestions);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAnswers();
  }, [user, parsedPollutionTypeId, parsedSubbab, setIsQuizActive]);

  const formatQuizzesData = (data) => {
    return data.map((item, index) => {
      let options, correct, targetTexts;
      try {
        options =
          typeof item.options === "string"
            ? JSON.parse(item.options)
            : item.options;
        const correctAnswerFromServer =
          typeof item.correct_answer === "string"
            ? JSON.parse(item.correct_answer)
            : item.correct_answer;

        switch (item.type) {
          case "PG":
            correct = options.findIndex(
              (opt) => opt === correctAnswerFromServer[0]
            );
            break;
          case "Checklist":
            correct = correctAnswerFromServer; // Array of correct texts
            break;
          case "Drag":
            // item.options adalah source texts
            // item.correct_answer adalah target texts, dalam urutan yang benar
            targetTexts = correctAnswerFromServer; // Ini adalah array teks target
            correct = options.map((_, idx) => idx); // Jawaban benar adalah source[i] ke target[i] -> [0, 1, 2,...]
            break;
          default:
            correct = options.findIndex(
              (opt) => opt === correctAnswerFromServer[0]
            );
        }
        return {
          id: index + 1,
          questionId: item.quiz_id,
          question: item.question,
          options, // Untuk PG & Checklist, ini adalah pilihan. Untuk Drag, ini adalah source items.
          correct, // Untuk PG: index. Untuk Checklist: array teks. Untuk Drag: array index target [0,1,2..]
          targetTexts: item.type === "Drag" ? targetTexts : undefined, // Hanya untuk Drag, ini adalah target items.
          type: item.type || "PG",
        };
      } catch (parseError) {
        console.error("Error parsing quiz data:", parseError, item);
        return {
          id: index + 1,
          questionId: item.quiz_id,
          question: item.question,
          options: ["Error loading options"],
          correct: 0,
          type: item.type || "PG",
        };
      }
    });
  };

  useEffect(() => {
    const initialFetchQuizzes = async () => {
      if (questions.length === 0 && !showResults) {
        // Hanya fetch jika questions kosong dan bukan showResults
        setLoading(true);
        try {
          const res = await http(
            `/api/quizzes?pollution_type_id=${parsedPollutionTypeId}&sub_bab=${parsedSubbab}`,
            { method: "GET" }
          );
          const data = await res.json();
          setQuestions(formatQuizzesData(data));
        } catch (error) {
          console.error("Error fetching quizzes initially:", error);
          setQuestions([]);
        } finally {
          setLoading(false);
        }
      }
    };
    initialFetchQuizzes();
  }, [parsedPollutionTypeId, parsedSubbab, questions.length, showResults]);

  const handleChange = (questionId, optionIndex, type) => {
    if (type === "Checklist") {
      setAnswers((prev) => {
        const currentAnswers = prev[questionId] || [];
        const newAnswers = currentAnswers.includes(optionIndex)
          ? currentAnswers.filter((i) => i !== optionIndex)
          : [...currentAnswers, optionIndex];
        return { ...prev, [questionId]: newAnswers };
      });
    } else {
      // PG
      setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSourceClick = (qId, srcIdx) => {
    if (showResults) return;
    setSelectedSource({ questionId: qId, sourceIndex: srcIdx });
    if (archerContainerRef.current) {
      // Paksa re-render ArcherContainer
      archerContainerRef.current.refreshScreen();
    }
  };

  const handleTargetClick = (qId, tgtIdx) => {
    if (
      showResults ||
      selectedSource.questionId !== qId ||
      selectedSource.sourceIndex === null
    ) {
      return;
    }

    setAnswers((prev) => {
      const q = questions.find((qq) => qq.questionId === qId);
      if (!q) return prev;

      // Initialize answer array for this question if it doesn't exist
      const currentConnections = prev[qId]
        ? [...prev[qId]]
        : Array(q.options.length).fill(undefined);

      const { sourceIndex } = selectedSource;

      // 1. Jika source ini sudah terhubung ke target lain, putuskan hubungan lama source ini.
      //    (Tidak perlu eksplisit jika kita menimpa di langkah 3)

      // 2. Jika target ini sudah terhubung dengan source LAIN, putuskan hubungan source LAIN tersebut.
      for (let i = 0; i < currentConnections.length; i++) {
        if (currentConnections[i] === tgtIdx && i !== sourceIndex) {
          currentConnections[i] = undefined; // Putuskan source lain yang terhubung ke target ini
        }
      }

      // 3. Buat hubungan baru: sourceIndex ke tgtIdx.
      //    Jika source ini diklik lagi ke target yang sama, koneksi akan hilang (toggle)
      if (currentConnections[sourceIndex] === tgtIdx) {
        currentConnections[sourceIndex] = undefined; // Toggle off if connecting to the same target
      } else {
        currentConnections[sourceIndex] = tgtIdx;
      }

      return { ...prev, [qId]: currentConnections };
    });

    setSelectedSource({ questionId: null, sourceIndex: null }); // Reset selected source
    if (archerContainerRef.current) {
      archerContainerRef.current.refreshScreen();
    }
  };

  const performActualSubmit = useCallback(
    async (currentAnswers, currentQuestions, isTimeUp = false) => {
      if (!user?.id || !currentQuestions || currentQuestions.length === 0) {
        console.log(
          "Pengiriman dibatalkan: user tidak ada atau tidak ada pertanyaan."
        );
        return;
      }

      try {
        let calculatedScore = 0;
        const submissionPromises = currentQuestions.map(async (q) => {
          let userAnswerToStore = currentAnswers[q.questionId];
          let isCorrectForDb = false;

          // Jika waktu habis dan jawaban belum diisi, skip
          if (
            isTimeUp &&
            userAnswerToStore === undefined &&
            q.type !== "Drag"
          ) {
            return Promise.resolve();
          }

          if (q.type === "PG") {
            isCorrectForDb = userAnswerToStore === q.correct;
          } else if (q.type === "Checklist") {
            const userSelectedIndices = userAnswerToStore || [];
            const userSelectedOptions = userSelectedIndices.map(
              (index) => q.options[index]
            );
            const correctOptions = q.correct;
            isCorrectForDb =
              correctOptions.length === userSelectedOptions.length &&
              correctOptions.every((opt) =>
                userSelectedOptions.includes(opt)
              ) &&
              userSelectedOptions.every((opt) => correctOptions.includes(opt));
          } else if (q.type === "Drag") {
            const userConnections =
              userAnswerToStore || Array(q.options.length).fill(undefined);
            isCorrectForDb =
              userConnections.length === q.correct.length &&
              userConnections.every((val, idx) => val === q.correct[idx]);
          }

          if (isCorrectForDb) {
            calculatedScore++;
          }

          // Hanya kirim jika ada jawaban atau tipe drag
          if (userAnswerToStore !== undefined || q.type === "Drag") {
            return http("/api/quiz-reports", {
              method: "POST",
              body: JSON.stringify({
                user_id: user.id,
                quiz_id: q.questionId,
                pollution_type_id: parsedPollutionTypeId,
                subbab: parsedSubbab,
                user_answer: JSON.stringify(
                  userAnswerToStore === undefined
                    ? q.type === "Drag"
                      ? Array(q.options.length).fill(undefined)
                      : null
                    : userAnswerToStore
                ),
                is_correct: isCorrectForDb,
              }),
            });
          }
          return Promise.resolve();
        });

        await Promise.all(submissionPromises);

        const materialId = getMaterialId(parsedPollutionTypeId, parsedSubbab);
        if (materialId) {
          await http("/api/progress", {
            method: "POST",
            body: JSON.stringify({ material_id: materialId }),
            headers: { "Content-Type": "application/json" },
          });
        }

        setScore(calculatedScore);
        setIsQuizActive(false);
        window.location.reload();

        if (archerContainerRef.current) {
          archerContainerRef.current.refreshScreen();
        }
      } catch (error) {
        console.error("Error submitting answers or progress:", error);
        confirmAlert({
          title: "Error",
          message:
            "Terjadi kesalahan saat mengirim jawaban. Silakan coba lagi.",
          buttons: [{ label: "OK" }],
        });
      }
    },
    [user, parsedPollutionTypeId, parsedSubbab, getMaterialId, setIsQuizActive]
  );

  const checkIndividualAnswerCorrectness = useCallback(
    (question, currentAnswersState) => {
      if (!question) return false;
      const userAnswer = currentAnswersState[question.questionId];

      if (userAnswer === undefined && question.type !== "Drag") return false;

      switch (question.type) {
        case "PG":
          return userAnswer === question.correct;
        case "Checklist":
          const correctOptions = question.correct;
          const userSelectedOptions = (userAnswer || []).map(
            (index) => question.options[index]
          );
          return (
            correctOptions.length === userSelectedOptions.length &&
            correctOptions.every((opt) => userSelectedOptions.includes(opt)) &&
            userSelectedOptions.every((opt) => correctOptions.includes(opt))
          );
        case "Drag":
          const userConnections =
            userAnswer || Array(question.options?.length || 0).fill(undefined);
          if (
            !question.correct ||
            userConnections.length !== question.correct.length
          )
            return false;
          for (let i = 0; i < question.correct.length; i++) {
            if (userConnections[i] !== question.correct[i]) {
              return false;
            }
          }
          return true;
        default:
          return false;
      }
    },
    []
  );

  const handleSubmit = useCallback(
    async (isTimeUp = false) => {
      if (!user?.id) return;

      const currentQuestions = questions;
      const currentAnswers = answers;

      if (isTimeUp) {
        await performActualSubmit(currentAnswers, currentQuestions, true);
        confirmAlert({
          title: "Waktu Habis",
          message:
            "Waktu habis, jawaban Anda telah dikumpulkan. Klik OK untuk melanjutkan.",
          buttons: [
            {
              label: "OK",
              onClick: () => {
                //                 let redirectPath = "/";
                //   if (basePath === "pencemaran-tanah")
                //     redirectPath = "/pencemaran-tanah/19";
                //   else if (basePath === "pencemaran-air")
                //     redirectPath = "/pencemaran-air/1";
                //   else if (basePath === "pencemaran-udara")
                //     redirectPath = "/pencemaran-udara/10";
                //   navigate(redirectPath);
                // },
                window.location.reload();
              },
            },
          ],
        });
      } else {
        try {
          const resCheck = await http(
            `/api/quiz-reports?user_id=${user.id}&pollution_type_id=${parsedPollutionTypeId}&subbab=${parsedSubbab}`,
            { method: "GET" }
          );
          const existingReports = await resCheck.json();
          if (existingReports.length > 0) {
            confirmAlert({
              title: "Peringatan",
              message: "Anda sudah mengerjakan quiz ini sebelumnya!",
              buttons: [{ label: "OK", onClick: () => {} }],
            });
            setShowResults(true);
            setIsQuizActive(false);
            if (score === null) {
              let calculatedScore = 0;
              currentQuestions.forEach((q) => {
                if (checkIndividualAnswerCorrectness(q, currentAnswers)) {
                  calculatedScore++;
                }
              });
              setScore(calculatedScore);
            }

            return;
          }
        } catch (error) {
          console.error("Error checking existing answers:", error);
        }

        const unanswered = currentQuestions.filter((q) => {
          if (q.type === "Drag") {
            const dragAnswer = currentAnswers[q.questionId] || [];
            return (
              dragAnswer.some((targetIdx) => targetIdx === undefined) ||
              dragAnswer.length < (q.options?.length || 0)
            );
          }
          return (
            currentAnswers[q.questionId] === undefined ||
            (Array.isArray(currentAnswers[q.questionId]) &&
              currentAnswers[q.questionId].length === 0)
          );
        });

        if (unanswered.length > 0) {
          confirmAlert({
            title: "Peringatan",
            message: "Harap jawab semua pertanyaan sebelum mengumpulkan!",
            buttons: [{ label: "OK", onClick: () => {} }],
          });
          return;
        }

        confirmAlert({
          title: "Konfirmasi",
          message: "Apakah Anda yakin ingin mengumpulkan jawaban?",
          buttons: [
            {
              label: "Ya",
              onClick: async () =>
                await performActualSubmit(currentAnswers, currentQuestions),
            },
            { label: "Tidak", onClick: () => {} },
          ],
        });
      }
    },
    [
      user,
      questions,
      answers,
      score,
      http,
      parsedPollutionTypeId,
      parsedSubbab,
      performActualSubmit,
      setIsQuizActive,
      basePath,
      navigate,
      checkIndividualAnswerCorrectness,
    ]
  );

  useEffect(() => {
    if (showResults || questions.length === 0 || timeLeft === 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timerId);
          console.log(
            "Waktu habis dari interval, memanggil handleSubmit(true)"
          );
          handleSubmit(true);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [showResults, questions.length, timeLeft, handleSubmit]);

  const renderQuestionOptions = (q) => {
    switch (q.type) {
      case "Checklist":
        return q.options.map((opt, i) => (
          <label key={`option-${q.questionId}-${i}`} className="kuis-option">
            <input
              type="checkbox"
              name={`question-${q.questionId}`}
              value={i}
              onChange={() => handleChange(q.questionId, i, "Checklist")}
              disabled={showResults}
              checked={(answers[q.questionId] || []).includes(i)}
            />
            {String.fromCharCode(65 + i)}. {opt}
          </label>
        ));

      case "Drag":
        const currentQuestionAnswers =
          answers[q.questionId] || Array(q.options.length).fill(undefined);
        return (
          <ArcherContainer
            ref={archerContainerRef}
            strokeColor="gray"
            endMarker={false}
          >
            <div className="matching-columns">
              <div className="left-column">
                {q.options.map((opt, sourceIdx) => {
                  const relations = [];
                  const connectedTargetIndex =
                    currentQuestionAnswers[sourceIdx];

                  if (connectedTargetIndex !== undefined) {
                    let strokeColor = "gray"; // Default color before submission
                    if (showResults) {
                      // q.correct should be [0, 1, 2...] if targetTexts are ordered correctly
                      strokeColor =
                        connectedTargetIndex === q.correct[sourceIdx]
                          ? "green"
                          : "red";
                    }
                    relations.push({
                      targetId: `target-${q.questionId}-${connectedTargetIndex}`,
                      targetAnchor: "left",
                      sourceAnchor: "right",
                      style: {
                        strokeColor,
                        strokeWidth: showResults ? 2 : 1.5,
                      },
                    });
                  }

                  return (
                    <ArcherElement
                      key={`source-${q.questionId}-${sourceIdx}`}
                      id={`source-${q.questionId}-${sourceIdx}`}
                      relations={relations}
                    >
                      <div
                        className={`box category ${
                          selectedSource.questionId === q.questionId &&
                          selectedSource.sourceIndex === sourceIdx
                            ? "selected"
                            : ""
                        } ${showResults ? "disabled" : ""}`}
                        onClick={() =>
                          !showResults &&
                          handleSourceClick(q.questionId, sourceIdx)
                        }
                      >
                        {opt}
                      </div>
                    </ArcherElement>
                  );
                })}
              </div>

              <div className="right-column">
                {q.targetTexts.map((text, targetIdx) => (
                  <ArcherElement
                    key={`target-${q.questionId}-${targetIdx}`}
                    id={`target-${q.questionId}-${targetIdx}`}
                  >
                    <div
                      className={`box option ${
                        currentQuestionAnswers.includes(targetIdx)
                          ? "connected"
                          : ""
                      } ${showResults ? "disabled" : ""}`}
                      onClick={() =>
                        !showResults &&
                        handleTargetClick(q.questionId, targetIdx)
                      }
                    >
                      {text}
                    </div>
                  </ArcherElement>
                ))}
              </div>
            </div>
          </ArcherContainer>
        );

      default: // PG
        return q.options.map((opt, i) => (
          <label key={`option-${q.questionId}-${i}`} className="kuis-option">
            <input
              type="radio"
              name={`question-${q.questionId}`}
              value={i}
              onChange={() => handleChange(q.questionId, i, "PG")}
              disabled={showResults}
              checked={answers[q.questionId] === i}
            />
            {String.fromCharCode(65 + i)}. {opt}
          </label>
        ));
    }
  };

  const renderQuestionResult = (q) => {
    if (!showResults) return null;

    const correct = checkIndividualAnswerCorrectness(q, answers);
    let resultMessage = "";

    if (correct) {
      resultMessage = "✅ Benar";
    } else {
      switch (q.type) {
        case "Checklist":
          const correctOptionTexts = q.correct; // Ini adalah array teks
          const correctIndices = correctOptionTexts
            .map((txt) => q.options.indexOf(txt))
            .filter((idx) => idx !== -1)
            .map((i) => String.fromCharCode(65 + i))
            .join(", ");
          resultMessage = `❌ Jawaban benar: ${correctIndices}`;
          break;
        case "Drag":
          // Pesan bisa lebih umum karena warna panah sudah menunjukkan detail
          resultMessage = "❌ Pasangan jawaban tidak tepat";
          // Atau tampilkan pasangan yang benar jika diperlukan
          // const correctPairs = q.options.map((sourceOpt, idx) => `${sourceOpt} → ${q.targetTexts[q.correct[idx]]}`).join('; ');
          // resultMessage = `❌ Jawaban benar: ${correctPairs}`;
          break;
        default: // PG
          resultMessage = `❌ Jawaban benar: ${String.fromCharCode(
            65 + q.correct
          )}. ${q.options[q.correct]}`;
      }
    }
    return (
      <p className={`result ${correct ? "correct" : "incorrect"}`}>
        {resultMessage}
      </p>
    );
  };

  const handleClearAnswer = (questionId) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      const question = questions.find((q) => q.questionId === questionId);
      if (question && question.type === "Drag") {
        newAnswers[questionId] = Array(question.options.length).fill(undefined);
      } else {
        delete newAnswers[questionId];
      }
      return newAnswers;
    });
    if (archerContainerRef.current) {
      archerContainerRef.current.refreshScreen();
    }
  };

  const QuizSkeleton = () => (
    <div className="kuis-question skeleton">
      <div className="skeleton-line skeleton-title" />
      {[1, 2, 3, 4].map((_, i) => (
        <div key={i} className="skeleton-line skeleton-option" />
      ))}
    </div>
  );

  return (
    <div className="kuis-wrapper">
      {!showResults && !loading && questions.length > 0 && (
        <div className="kuis-timer">⏰ {formatTime(timeLeft)}</div>
      )}

      {loading ? (
        <>
          <QuizSkeleton />
          <QuizSkeleton />
        </>
      ) : questions.length > 0 ? (
        <>
          <h2>Kuis</h2>
          {showResults && score !== null && (
            <div className="kuis-score">
              <h3>
                Skor: {score}/{questions.length}
              </h3>
            </div>
          )}
          {questions.map((q) => (
            <div key={`question-${q.questionId}`} className="kuis-question">
              <p>
                <strong>
                  {q.id}. {q.question}
                </strong>
                {q.type === "Checklist" && (
                  <span
                    style={{
                      color: "#1DBC60",
                      fontStyle: "italic",
                      marginLeft: "5px",
                    }}
                  >
                    (Jawaban bisa lebih dari satu)
                  </span>
                )}
              </p>
              {renderQuestionOptions(q)}
              {renderQuestionResult(q)}
              {!showResults &&
                answers[q.questionId] !== undefined &&
                (q.type !== "Drag" ||
                  (Array.isArray(answers[q.questionId]) &&
                    answers[q.questionId].some(
                      (ans) => ans !== undefined
                    ))) && (
                  <button
                    className="clear-answer-btn"
                    onClick={() => handleClearAnswer(q.questionId)}
                  >
                    Hapus Pilihan
                  </button>
                )}
            </div>
          ))}
          {!showResults && (
            <button className="kuis-submit" onClick={() => handleSubmit(false)}>
              Kumpulkan Jawaban
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default QuizComponent;
