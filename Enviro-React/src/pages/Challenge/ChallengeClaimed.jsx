import React, { useState, useEffect } from "react";
import "./ChallengeClaimed.css";
import Loading from "../../components/Loading";
import treeStage1 from "../../assets/tree1.png";
import treeStage2 from "../../assets/tree2.png";
import treeStage3 from "../../assets/tree3.png";
import treeStage4 from "../../assets/tree4.png";
import treeStage5 from "../../assets/tree5.png";
import treeStage6 from "../../assets/tree6.png";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";
import { http } from "../../utils/fetch";

const trees = [
  treeStage1,
  treeStage2,
  treeStage3,
  treeStage4,
  treeStage5,
  treeStage6,
];
const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg5];

const Challenge = () => {
  const [progress, setProgress] = useState(0);
  const stage = progress === 100 ? 5 : Math.floor(progress / 20);

  const [selectedOption, setSelectedOption] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [challengeFailed, setChallengeFailed] = useState(false);
  const [challengeSubmitted, setChallengeSubmitted] = useState(false);
  const [challengeData, setChallengeData] = useState(null);
  const [uploadText, setUploadText] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [countdownEndAt, setCountdownEndAt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        // Fetch both challenge data and progress in parallel
        const [challengeRes, progressRes] = await Promise.all([
          http("/api/user/claimed-challenge"),
          http("/api/challenge-progress"),
        ]);

        if (!challengeRes.ok) throw new Error("Failed to fetch challenge");
        if (!progressRes.ok) throw new Error("Failed to fetch progress");

        const [challengeData, progressData] = await Promise.all([
          challengeRes.json(),
          progressRes.json(),
        ]);

        // Debugging - log response data
        console.log("API Response:", challengeData);

        // Pastikan data yang diperlukan ada
        if (
          !challengeData ||
          typeof challengeData.seconds_remaining === "undefined" ||
          typeof challengeData.completed === "undefined"
        ) {
          throw new Error("Invalid response structure");
        }

        setChallengeData(challengeData);
        setCountdown(Math.max(0, Math.floor(challengeData.seconds_remaining)));
        setCountdownEndAt(challengeData.countdown_end_at);
        setProgress(progressData.percentage);

        if (challengeData.completed) {
          setChallengeSubmitted(true);
          localStorage.setItem("challengeSubmitted", "true");
        }

        if (challengeData.failed) {
          setChallengeFailed(true);
        }
      } catch (err) {
        console.error("Failed to load challenge/countdown:", err);
        // Set default values jika error
        setCountdown(0);
        setChallengeSubmitted(false);
        setChallengeFailed(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
    const timer = setInterval(fetchAllData, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmitOption = () => {
    if (selectedOption === 4) {
      setShowConfirmPopup(true);
    } else if (selectedOption >= 1 && selectedOption <= 3) {
      setShowUploadPopup(true);
    }
  };

  const handleConfirmYes = async () => {
    console.log("Confirmed!");
    setShowConfirmPopup(false);
    try {
      console.log("Posting ke /api/user/fail-challenge...");
      const res = await http("/api/user/fail-challenge", {
        method: "POST",
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Gagal menandai challenge gagal:", error);
      }
    } catch (err) {
      console.error("Error saat menandai challenge gagal:", err);
    }
    setChallengeFailed(true);
  };

  const handleConfirmCancel = () => {
    setShowConfirmPopup(false);
  };

  const handleUploadSubmit = async () => {
    if (!uploadFile || !uploadText) {
      alert("Mohon lengkapi bukti dan jawaban teks.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", uploadFile);
    formData.append("text_answer", uploadText);

    try {
      const res = await http("/api/user/submit-proof", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Gagal submit proof:", error);
        alert(error.message || "Terjadi kesalahan saat submit.");
        return;
      }

      setShowUploadPopup(false);
      setShowRewardPopup(true);
      setChallengeSubmitted(true);
      localStorage.setItem("challengeSubmitted", "true");
    } catch (err) {
      console.error("Error saat submit proof:", err);
      alert("Terjadi kesalahan jaringan.");
    }
  };

  const handleCloseReward = () => {
    setShowRewardPopup(false);
  };

  const handleDeleteAnswer = () => {
    setSelectedOption(null);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          const newCount = prev - 1;
          if (newCount <= 0) {
            clearInterval(timer);
            return 0;
          }
          return newCount;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    const sendReminder = async () => {
      try {
        if (countdown > 0 && countdown <= 86400) {
          const statusRes = await http("/api/check-reminder-status");
          if (!statusRes.ok) throw new Error("Failed to check reminder status");

          const { reminderSent } = await statusRes.json();

          if (!reminderSent) {
            const reminderRes = await http("/api/send-reminder-email", {
              method: "POST",
            });

            if (!reminderRes.ok) throw new Error("Failed to send reminder");
            console.log("Reminder email sent successfully");
          }
        }
      } catch (err) {
        console.error("Error in reminder process:", err);
      }
    };

    if (countdown > 0) {
      sendReminder();
    }
  }, [countdown]);

  const formatCountdown = (seconds) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(d).padStart(2, "0")}:${String(h).padStart(
      2,
      "0"
    )}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    const updateStatus = async () => {
      try {
        const res = await http("/api/user/deactivate-challenge-report", {
          method: "POST",
        });

        if (!res.ok) throw new Error("Failed to deactivate challenge");

        localStorage.removeItem("challengeSubmitted");
        setChallengeSubmitted(false);
        window.location.href = "/challenge";
      } catch (err) {
        console.error("Failed to update challenge status:", err);
      }
    };

    if (countdown === 0) {
      updateStatus();
    }
  }, [countdown]);

  if (isLoading) return <Loading />;

  return (
    <div
      className={`challenge-page stage-${stage}`}
      style={{
        backgroundImage: `url(${backgrounds[stage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="challenge-layout">
        <div className="empty-column">
          <div className="countdown-box">
            <p className="countdown-title">Challenge Reset</p>
            <p
              className="countdown-time"
              style={{ color: "brown", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {formatCountdown(countdown)}
            </p>
          </div>
          <div className="progress-preview-wrapper">
            <div className="progress-bar-wrapper">
              <progress
                value={progress}
                max="100"
                className="progress-bar"
              ></progress>
              <span className="progress-text">{progress}%</span>
            </div>

            {stage < trees.length - 1 && (
              <div className="preview">
                <p>Next:</p>
                <img
                  src={trees[stage + 1]}
                  alt="Preview Tree"
                  className="preview-tree"
                />
                <img
                  src={trees[stage + 1]}
                  alt="Preview Tree"
                  className="preview-tree"
                />
              </div>
            )}
          </div>
        </div>

        <div className="center-column">
          <img
            src={trees[stage]}
            alt="Tree stage"
            className={`tree-image tree-stage-${stage}`}
          />
        </div>

        <div className="question-column">
          <div className="question-box">
            {challengeFailed ? (
              <>
                <h3>
                  Yah challenge nya gagal, coba lagi di challenge berikutnya ya!
                </h3>
                <p>
                  Kamu dapat mengambil challenge selanjutnya setelah countdown
                  habis.
                </p>
              </>
            ) : challengeSubmitted || challengeData?.completed ? (
              <>
                <h3>Terimakasih telah menyelesaikan challenge minggu ini!😉</h3>
                <p>Challenge akan dinonaktifkan setelah countdown habis.</p>
              </>
            ) : countdown > 86400 ? (
              <>
                <h3>{challengeData.description}</h3>
                <p>Semangat menjalankan challengenya🔥🔥!!</p>
                <p>Challenge dapat disubmit setelah countdown sisa 1 hari.</p>
                <p>Siapkan foto untuk bukti kamu menyelesaikan challengenya.</p>
                <p>Nanti akan ada hadiah lho!!</p>
              </>
            ) : (
              <>
                <h3>{challengeData.question}</h3>
                <div className="options">
                  {challengeData?.answer?.map((ans, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="transport"
                        onChange={() => setSelectedOption(index + 1)}
                        checked={selectedOption === index + 1}
                      />
                      {ans}
                    </label>
                  ))}
                </div>
                <div className="question-actions">
                  <button onClick={handleDeleteAnswer}>Hapus Jawaban</button>
                  <button onClick={handleSubmitOption}>Konfirmasi</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {showUploadPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowUploadPopup(false)}
        >
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            {uploadPreview && (
              <div style={{ marginBottom: "1rem" }}>
                <h3 style={{ marginBottom: "10px" }}>Preview Bukti:</h3>
                <img
                  src={uploadPreview}
                  alt="Upload Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}
            <h3>{challengeData.question3}</h3>
            <input
              type="text"
              value={uploadText}
              onChange={(e) => setUploadText(e.target.value)}
              placeholder="Jawaban teks"
            />
            <label htmlFor="file-upload" className="upload-btn">
              Upload Bukti
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setUploadFile(file);
                if (file) {
                  setUploadPreview(URL.createObjectURL(file));
                } else {
                  setUploadPreview(null);
                }
              }}
            />
            <button onClick={handleUploadSubmit}>Submit</button>
          </div>
        </div>
      )}

      {showRewardPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <img
              src={challengeData.reward}
              alt="Reward"
              style={{ maxWidth: "200%" }}
            />
            <a
              href={challengeData.reward}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Download</button>
            </a>
            <button onClick={handleCloseReward}>Close</button>
          </div>
        </div>
      )}

      {showConfirmPopup && (
        <div className="popup-overlay" onClick={handleConfirmCancel}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h3>Kamu yakin milih ini?</h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <button className="btn-confirm" onClick={handleConfirmYes}>
                Iya
              </button>
              <button onClick={handleConfirmCancel}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
