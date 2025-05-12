import React, { useState, useEffect } from 'react';
import './Challenge.css';
import pupuk from '../../assets/pupuk.png';
import treeStage1 from '../../assets/tree1.png';
import treeStage2 from '../../assets/tree2.png';
import treeStage3 from '../../assets/tree3.png';
import treeStage4 from '../../assets/tree4.png';
import treeStage5 from '../../assets/tree5.png';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';
import bg4 from '../../assets/bg4.png';
import bg5 from '../../assets/bg5.png';
import Sidebar from '../../components/SidebarChallenge/Sidebar';
import { http } from '../../utils/fetch';

const trees = [treeStage1, treeStage2, treeStage3, treeStage4, treeStage5];
const backgrounds = [bg1, bg2, bg3, bg4, bg5];

const Challenge = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [challengeOpen, setChallengeOpen] = useState(false);
  const [canClaim, setCanClaim] = useState(true);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      if (stage < trees.length - 1) {
        setStage((prev) => prev + 1);
        setProgress(0);
      } else {
        setProgress(100);
      }
    }
  }, [progress, stage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      {/*ini sup gimana :D*/}
      } catch (err) {
        console.error('Gagal memuat data:', err);
      }
    };

    fetchData();
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
          {canClaim ? (
            <button className="btn-circle" onClick={() => setChallengeOpen(!challengeOpen)}>
              <img src={pupuk} alt="Pupuk" className="pupuk-icon" />
              <div className="btn-label">Challenge</div>
            </button>
          ) : ( //countdonnya disini sup
            <div className="countdown-box"> 
              <p className="countdown-title">Challenge Berikutnya</p>
              <p className="countdown-time">{formatCountdown(countdown)}</p>
            </div>
          )}
        </div>
      </div>

      {challengeOpen && <Sidebar onCompleteChallenge={handleChallengeComplete} />}
    </div>
  );
};

export default Challenge;
