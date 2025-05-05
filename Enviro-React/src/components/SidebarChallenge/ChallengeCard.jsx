import React, { useState } from 'react';
import PopupUpload from './PopupUpload';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  return (
    <>
      <div className="challenge-card" onClick={handleClick}>
        <div>
        <h3>{challenge.name}</h3>
            <div className="challenge-content">
            <p>{challenge.description}</p>
            </div>
        </div>
        <div className="challenge-action">
          <div className="circle-button">
            <div className="icon-placeholder">🔥</div> {/* ganti pake icon nanti */}
            <div className="points">+{challenge.points}</div>
          </div>
        </div>
      </div>
      {showPopup && <PopupUpload onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default ChallengeCard;
