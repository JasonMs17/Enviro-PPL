import React, { useState, useEffect } from 'react';
import './Challenge.css';
import treeStage1 from '../assets/tree1.png';
import treeStage2 from '../assets/tree2.png';
import treeStage3 from '../assets/tree3.png';
import treeStage4 from '../assets/tree4.png';
import treeStage5 from '../assets/tree5.png';
import Sidebar from '../components/SidebarChallenge/Sidebar';

const trees = [treeStage1, treeStage2, treeStage3, treeStage4, treeStage5];

const Challenge = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [challengeOpen, setChallengeOpen] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      if (stage < trees.length - 1) {
        setStage(stage + 1);
        setProgress(0);
      } else {
        // kalo udah stage 5, ttp di 100
        setProgress(100);
      }
    }
  }, [progress, stage]);

  const handleChallengeComplete = () => {
    setProgress((prev) => {
      if (stage === trees.length - 1) {
        // capped 100% kalo udah stage 5
        return Math.min(prev + 20, 100);
      } else {
        return Math.min(prev + 20, 100);
      }
    });
  };

  return (
    <div className={`challenge-page stage-${stage}`}>
      <div className="main-content">

        <div className="tree-section">
            <img
            src={trees[stage]}
            alt="Tree stage"
            className={`tree-image tree-stage-${stage}`}
            />
          <button className="btn-circle" onClick={() => setChallengeOpen(!challengeOpen)}>🌱</button>
        </div>

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

      {challengeOpen && <Sidebar onCompleteChallenge={handleChallengeComplete} />}
    </div>
  );
};

export default Challenge;
