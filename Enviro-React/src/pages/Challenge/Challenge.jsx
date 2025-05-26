import React, { useState, useEffect } from 'react';
import './Challenge.css';
import pupuk from '../../assets/pupuk.png';
import treeStage1 from '../../assets/tree1.png';
import treeStage2 from '../../assets/tree2.png';
import treeStage3 from '../../assets/tree3.png';
import treeStage4 from '../../assets/tree4.png';
import treeStage5 from '../../assets/tree5.png';
import treeStage6 from '../../assets/tree6.png';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';
import bg4 from '../../assets/bg4.png';
import bg5 from '../../assets/bg5.png';
import Sidebar from '../../components/SidebarChallenge/Sidebar';
import { http } from '../../utils/fetch';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'; // Pastikan komponen Modal sudah dibuat

const trees = [treeStage1, treeStage2, treeStage3, treeStage4, treeStage5, treeStage6];
const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg5];

const Challenge = () => {
  const [progress, setProgress] = useState(0);
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [canClaim, setCanClaim] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [hasActiveChallenge, setHasActiveChallenge] = useState(false);
  const [showActiveChallengeModal, setShowActiveChallengeModal] = useState(false);
  const navigate = useNavigate();

  const stage = progress === 100 ? 5 : Math.floor(progress / 20);

  useEffect(() => {
    const checkActiveChallenge = async () => {
      try {
        const res = await http("/api/check-active-challenge");
        const data = await res.json();
        
        if (data.has_active_challenge) {
          setHasActiveChallenge(true);
          setShowActiveChallengeModal(true);
          setCountdown(data.countdown_seconds);
          setCanClaim(false);
        }
      } catch (err) {
        console.error("Gagal memeriksa challenge aktif:", err);
      }
    };

    checkActiveChallenge();
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
    let timer;
    if (!canClaim && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClaim(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [canClaim, countdown]);

  const formatCountdown = (seconds) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(d).padStart(2, '0')}:${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleChallengeComplete = () => {
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  const handleNavigateToClaimed = () => {
    setShowActiveChallengeModal(false);
    navigate('/challenge-claimed');
  };

  return (
    <div
      className={`challenge-page stage-${stage}`}
      style={{
        backgroundImage: `url(${backgrounds[stage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* Modal untuk challenge aktif */}
      <Modal 
        isOpen={showActiveChallengeModal}
        onClose={handleNavigateToClaimed}
        closeText="Oke"
      >
        <p>Challenge sebelumnya masih belum selesai nih,</p>
        <p>selesain itu dulu yaa 😉</p>
      </Modal>


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

        <div className="button-column">
            <button className="btn-circle" onClick={() => setChallengeOpen(!challengeOpen)}>
              <img src={pupuk} alt="Pupuk" className="pupuk-icon" />
              <div className="btn-label">Challenge</div>
            </button>
        </div>
      </div>

      {challengeOpen && <Sidebar onCompleteChallenge={handleChallengeComplete} />}
    </div>
  );
};

export default Challenge;