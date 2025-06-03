import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pupuk from '../../assets/pupuk.png';
import { http } from "../../utils/fetch";
import './ChallengeCard.css';

const ChallengeCard = ({ challenge, onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  const handleClaim = async () => {
    try {
      const res = await http('/api/challenges/claim', {
        method: 'POST',
        body: JSON.stringify({
          challenge_id: challenge.id,
        }),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        alert('Gagal klaim challenge: ' + result.message);
        return;
      }
  
      setShowPopup(false);
      if (onClick) onClick();
      navigate('/challenge-claimed');
    } catch (error) {
      console.error('Error saat klaim challenge:', error);
    }
  };
  

  return (
    <>
      <div className="challenge-card" onClick={handleCardClick}>
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
              Tantangan tidak bisa diubah setelah diklaim sampai minggu berikutnya.
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
