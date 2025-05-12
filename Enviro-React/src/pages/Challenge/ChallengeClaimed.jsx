import React, { useState, useEffect } from 'react';
import './ChallengeClaimed.css';
import treeStage1 from '../../assets/tree1.png';
import treeStage2 from '../../assets/tree2.png';
import treeStage3 from '../../assets/tree3.png';
import treeStage4 from '../../assets/tree4.png';
import treeStage5 from '../../assets/tree5.png';
import { http } from "../../utils/fetch";

const trees = [treeStage1, treeStage2, treeStage3, treeStage4, treeStage5];

const Challenge = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const [challengeFailed, setChallengeFailed] = useState(false);
  const [challengeData, setChallengeData] = useState(null);
  const [uploadText, setUploadText] = useState("");
  const [uploadFile, setUploadFile] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const res = await http("/api/user/claimed-challenge");
        const data = await res.json();
        setChallengeData(data);
      } catch (err) {
        console.error("Gagal memuat challenge:", err);
      }
    };
    fetchChallenge();
  }, []);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const res = await http("/api/challenge-progress");
        const data = await res.json();
        setProgress(data.percentage);
      } catch (err) {
        console.error("Gagal memuat progress:", err);
      }
    };
    fetchProgress();
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      if (stage < trees.length - 1) {
        setStage(stage + 1);
        setProgress(0);
      } else {
        setProgress(100);
      }
    }
  }, [progress, stage]);

  const handleSubmitOption = () => {
    if (selectedOption === 4) {
      setChallengeFailed(true);
    } else if (selectedOption >= 1 && selectedOption <= 3) {
      setShowUploadPopup(true);
    }
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
    } catch (err) {
      console.error("Error saat submit proof:", err);
      alert("Terjadi kesalahan jaringan.");
    }
  };
  

  const handleCloseReward = () => {
    setShowRewardPopup(false);
    window.location.href = '/challenge';
  };

  const handleDeleteAnswer = () => {
    setSelectedOption(null);
  };

  useEffect(() => {
    if (challengeFailed) {
      window.location.href = '/challenge';
    }
  }, [challengeFailed]);

  if (!challengeData) return <p>Loading...</p>;

  return (
    <div className={`challenge-page stage-${stage}`}>
      <div className="challenge-layout">
        <div className="empty-column">
          <div className="progress-preview-wrapper">
            <div className="progress-bar-wrapper">
              <progress value={progress} max="100" className="progress-bar"></progress>
              <span className="progress-text">{progress}%</span>
            </div>
            {stage < trees.length - 1 && (
              <div className="preview">
                <p>Next:</p>
                <img src={trees[stage + 1]} alt="Preview Tree" className="preview-tree" />
              </div>
            )}
          </div>
        </div>

        <div className="center-column">
          <img src={trees[stage]} alt="Tree stage" className={`tree-image tree-stage-${stage}`} />
        </div>

        <div className="question-column">
          <div className="question-box">
            <h3>{challengeData.question}</h3>
            <div className="options">
              {challengeData.answer.map((ans, index) => (
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
          </div>
        </div>
      </div>

      {/* === POPUP UPLOAD === */}
      {showUploadPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{challengeData.question3}</h3>
            <input
              type="text"
              value={uploadText}
              onChange={(e) => setUploadText(e.target.value)}
            />
            {/* <h3>{challengeData.question2}</h3> */}
            <label htmlFor="file-upload" className="upload-btn">Upload Bukti</label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => setUploadFile(e.target.files[0])}
            />
            <button onClick={handleUploadSubmit}>Submit</button>
          </div>
        </div>
      )}

      {/* === POPUP REWARD === */}
      {showRewardPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <img
              src={challengeData.reward}
              alt="Reward"
              style={{ maxWidth: '100%' }}
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
    </div>
  );
};

export default Challenge;
