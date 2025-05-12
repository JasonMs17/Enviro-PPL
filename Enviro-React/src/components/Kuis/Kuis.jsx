import React, { useRef, useState, useEffect, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import "./QuizComponent.css";
import { http } from "../../utils/fetch";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (showResults) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          confirmAlert({
            title: "Waktu Habis",
            message: "Waktu habis, akan dialihkan ke materi pertama.",
            buttons: [
              {
                label: "OK",
                onClick: () => {
                  let redirectPath = "/";
                  if (basePath === "pencemaran-tanah") redirectPath = "/pencemaran-tanah/19";
                  else if (basePath === "pencemaran-air") redirectPath = "/pencemaran-air/1";
                  else if (basePath === "pencemaran-udara") redirectPath = "/pencemaran-udara/10";
                  navigate(redirectPath);
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
  }, [showResults, basePath, navigate]);

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
    setAnswers({});
    setShowResults(false);
    setQuestions([]);
    setLoading(true);
    setScore(null);
  }, [parsedPollutionTypeId, parsedSubbab]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await http(
          `/api/quizzes?pollution_type_id=${parsedPollutionTypeId}&sub_bab=${parsedSubbab}`,
          { method: "GET" }
        );
        const data = await res.json();
        const formatted = data.map((item, index) => {
          const options = JSON.parse(item.options);
          return {
            id: index + 1,
            questionId: item.quiz_id,
            question: item.question,
            options,
            correct: options.findIndex((opt) => opt === item.correct_answer),
          };
        });
        setQuestions(formatted);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, [parsedPollutionTypeId, parsedSubbab]);

  useEffect(() => {
    if (!user?.id) return;

    const fetchUserAnswers = async () => {
      try {
        const resAnswers = await http(
          `/api/quiz-reports?user_id=${user.id}&pollution_type_id=${parsedPollutionTypeId}&subbab=${parsedSubbab}`,
          { method: "GET" }
        );
        const reports = await resAnswers.json();

        if (reports.length > 0) {
          const restoredAnswers = {};
          let correctCount = 0;

          reports.forEach((item) => {
            const parsedAnswer = JSON.parse(item.user_answer);
            restoredAnswers[item.quiz_id] = parsedAnswer;
            if (item.is_correct) correctCount++;
          });

          setAnswers(restoredAnswers);
          setScore(correctCount);
          setShowResults(true);
          setIsQuizActive(false);
        }
      } catch (error) {
        console.error("Error fetching user answers:", error);
      }
      setLoading(false);
    };

    fetchUserAnswers();
  }, [user, parsedPollutionTypeId, parsedSubbab, setIsQuizActive]);

  const handleChange = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleClearAnswer = (questionId) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      delete newAnswers[questionId];
      return newAnswers;
    });
  };

  const handleSubmit = async () => {
    if (!user?.id) return;

    const unanswered = questions.filter(
      (q) => answers[q.questionId] === undefined
    );
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
          onClick: async () => {
            try {
              await Promise.all(
                questions.map(async (q) => {
                  const userAnswer = answers[q.questionId];
                  const isCorrect = userAnswer === q.correct;

                  await http("/api/quiz-reports", {
                    method: "POST",
                    body: JSON.stringify({
                      user_id: user.id,
                      quiz_id: q.questionId,
                      user_answer: JSON.stringify(userAnswer),
                      is_correct: isCorrect,
                    }),
                  });
                })
              );

              const materialId = getMaterialId(
                parsedPollutionTypeId,
                parsedSubbab
              );
              if (materialId) {
                await http("/api/progress", {
                  method: "POST",
                  body: JSON.stringify({ material_id: materialId }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
              }

              setShowResults(true);
              setScore(
                questions.reduce(
                  (acc, q) =>
                    acc + (answers[q.questionId] === q.correct ? 1 : 0),
                  0
                )
              );
              setIsQuizActive(false);

              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }, 100);
            } catch (error) {
              console.error("Error submitting answers or progress:", error);
            }
          },
        },
        { label: "Tidak", onClick: () => {} },
      ],
    });
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
      <div className="kuis-timer">⏰ {formatTime(timeLeft)}</div>

      <h2>Kuis</h2>
      {showResults && score !== null && (
        <div className="kuis-score">
          <h3>
            Skor: {score}/{questions.length}
          </h3>
        </div>
      )}
      {loading ? (
        <>
          <QuizSkeleton />
          <QuizSkeleton />
        </>
      ) : (
        questions.map((q) => (
          <div key={`question-${q.questionId}`} className="kuis-question">
            <p>
              <strong>
                {q.id}. {q.question}
              </strong>
            </p>
            {q.options.map((opt, i) => (
              <label
                key={`option-${q.questionId}-${i}`}
                className="kuis-option"
              >
                <input
                  type="radio"
                  name={`question-${q.questionId}`}
                  value={i}
                  onChange={() => handleChange(q.questionId, i)}
                  disabled={showResults}
                  checked={answers[q.questionId] === i}
                />
                {String.fromCharCode(65 + i)}. {opt}
              </label>
            ))}
            {showResults && (
              <p
                className={`result ${
                  answers[q.questionId] === q.correct ? "correct" : "incorrect"
                }`}
              >
                {answers[q.questionId] === q.correct
                  ? "✅ Benar"
                  : `❌ Jawaban benar: ${String.fromCharCode(
                      65 + q.correct
                    )}. ${q.options[q.correct]}`}
              </p>
            )}
            {!showResults && answers[q.questionId] !== undefined && (
              <button
                className="clear-answer-btn"
                onClick={() => handleClearAnswer(q.questionId)}
              >
                Hapus Pilihan
              </button>
            )}
          </div>
        ))
      )}
      {!showResults && !loading && (
        <button className="kuis-submit" onClick={handleSubmit}>
          Kumpulkan Jawaban
        </button>
      )}
    </div>
  );
};

export default QuizComponent;
