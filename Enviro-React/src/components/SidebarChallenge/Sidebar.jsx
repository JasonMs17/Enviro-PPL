import React, { useEffect, useState } from 'react';
import ChallengeCard from './ChallengeCard';
import UploadPopup from './PopupUpload';
import './Sidebar.css';

const Sidebar = ({ onCompleteChallenge }) => {
  const [countdown, setCountdown] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);

  const calculateNextMonday = () => {
    const now = new Date();
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
    nextMonday.setHours(0, 0, 0, 0);
    return nextMonday;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nextMonday = calculateNextMonday();
      const diff = nextMonday - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const challenges = [
    { name: 'Pilah Sampah', description: 'Pisahkan sampah organik & anorganik.', points: 10 },
    { name: 'Hemat Listrik', description: 'Matikan lampu saat tidak digunakan.', points: 5 },
  ];

  const handleUploadComplete = () => {
    setPopupOpen(false);
    onCompleteChallenge(); // Beri sinyal ke parent
  };

  return (
    <div className="sidebar">
      <h3 className="countdown">Menuju Challenge Berikutnya:</h3>
      <p className="countdown-timer">{countdown}</p>
      <div className="challenge-list">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            challenge={challenge}
            onClick={() => setPopupOpen(true)}
          />
        ))}
      </div>

      {popupOpen && <UploadPopup onComplete={handleUploadComplete} />}
    </div>
  );
};

export default Sidebar;
