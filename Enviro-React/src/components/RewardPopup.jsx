import React from "react";
import "./RewardPopup.css";

const RewardPopup = ({ reward, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <img src={reward} alt="Reward" style={{ maxWidth: "200%" }} />
        <a href={reward} download target="_blank" rel="noopener noreferrer">
          <button>Download</button>
        </a>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RewardPopup;
