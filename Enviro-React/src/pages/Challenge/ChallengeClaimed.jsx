import React, { useState, useEffect } from 'react';
import './ChallengeClaimed.css';
import treeStage1 from '../../assets/tree1.png';
import treeStage2 from '../../assets/tree2.png';
import treeStage3 from '../../assets/tree3.png';
import treeStage4 from '../../assets/tree4.png';
import treeStage5 from '../../assets/tree5.png';

const trees = [treeStage1, treeStage2, treeStage3, treeStage4, treeStage5];

const Challenge = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  const [challengeFailed, setChallengeFailed] = useState(false);

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

  const handleUploadSubmit = () => {
    setShowUploadPopup(false);
    setShowRewardPopup(true);
    setProgress((prev) => Math.min(prev + 20, 100));
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

        {/* === KOLom SOAL === */}
        <div className="question-column">
          <div className="question-box">
            <h3>Apakah kamu naik transportasi umum setiap keluar minggu ini?</h3>
            <div className="options">
              <label><input type="radio" name="transport" onChange={() => setSelectedOption(1)} checked={selectedOption === 1}/> Ya dong!! As always 😋</label>
              <label><input type="radio" name="transport" onChange={() => setSelectedOption(2)} checked={selectedOption === 2}/> Ga selalu si, tapi lumayan sering 😗</label>
              <label><input type="radio" name="transport" onChange={() => setSelectedOption(3)} checked={selectedOption === 3}/> Cuma sekali dua kali 😔</label>
              <label><input type="radio" name="transport" onChange={() => setSelectedOption(4)} checked={selectedOption === 4}/> Ga, kan ada mobil/motor 🤨</label>
            </div>
            <div className="question-actions">
              <><button onClick={handleDeleteAnswer}>Hapus Jawaban</button></>
              <><button onClick={handleSubmitOption}>Konfirmasi</button></>
            </div>
          </div>
        </div>
      </div>

      {/* === POPUP UPLOAD === */}
      {showUploadPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Transportasi apa yang kamu gunakan?</h3>
            <input type="text" placeholder="kendaraan yang kamu gunakan" />
            <label htmlFor="file-upload" className="upload-btn">Upload Bukti</label>
            <input id="file-upload" type="file" accept="image/*" />
            <button onClick={handleUploadSubmit}>Submit</button>
          </div>
        </div>
      )}

      {/* === POPUP REWARD === */}
      {showRewardPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <img
              src="https://media.discordapp.net/attachments/1299188923540574332/1368993559281406053/reward_1.png?ex=681a3e1b&is=6818ec9b&hm=dfefd21fca5c68c467f473bb25ff3f0094b6668b3c2fecaa2de5b02af2dbb599&=&format=webp&quality=lossless&width=1035&height=440"
              alt="Reward"
              style={{ maxWidth: '100%' }}
            />{/* Link gambar kupon buat embed gabisa make google drive :o */}
            <a
              href="https://drive.google.com/u/0/uc?id=1TienKWCKG9UQ2JhKITypwSkJN2dYla0b&export=download"
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
