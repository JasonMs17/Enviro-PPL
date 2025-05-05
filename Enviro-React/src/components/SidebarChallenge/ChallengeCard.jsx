import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pupuk from '../../assets/pupuk.png';
import './ChallengeCard.css';

const ChallengeCard = ({ challenge }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  const handleClaim = () => {
    setShowPopup(false);
    navigate('/challenge-claimed');
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
            <img src={pupuk} alt="Pupuk Icon" className="icon-image" />
            <div className="points">+{challenge.points}</div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h4 className="popup-title">Apakah Anda yakin?</h4>
                <p className="popup-explanation">
                    Challenge tidak bisa diubah setelah diklaim sampai minggu berikutnya.
                </p>
            <div className="popup-buttons">
              <button onClick={() => setShowPopup(false)}>Batal</button>
              <button onClick={handleClaim}>Klaim</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChallengeCard;
