import React, { useEffect, useState } from "react";
import ChallengeCard from "./ChallengeCard";
import UploadPopup from "./PopupUpload";
import { http } from "@/utils/fetch";
import "./Sidebar.css";

const Sidebar = ({ onCompleteChallenge, onClose }) => {
  const [countdown, setCountdown] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      setIsLoading(true);
      try {
        const response = await http("/api/challenges-fetch");
        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        console.error("Gagal mengambil data challenge:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    const calculateTimeUntilNextMonday = () => {
      const now = new Date();
      const nextMonday = new Date(now);

      // Set to next Monday at 00:00:00
      nextMonday.setDate(now.getDate() + ((8 - now.getDay()) % 7));
      nextMonday.setHours(0, 0, 0, 0);

      // If we're already past Monday 00:00, set to next week
      if (now > nextMonday) {
        nextMonday.setDate(nextMonday.getDate() + 7);
      }

      const diff = nextMonday - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    // Update immediately
    setCountdown(calculateTimeUntilNextMonday());

    // Then update every second
    const interval = setInterval(() => {
      setCountdown(calculateTimeUntilNextMonday());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleUploadComplete = () => {
    setPopupOpen(false);
    onCompleteChallenge();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="header-content">
          <h3 className="countdown">Tantangan Minggu Ini:</h3>
          <div className="countdown-timer">{countdown}</div>
        </div>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
      </div>
      {isLoading ? (
        <div className="sidebar-loading-state">
          <div className="sidebar-loading-spinner"></div>
          <p>Memuat tantangan...</p>
        </div>
      ) : challenges.length > 0 ? (
        <div className="challenge-list">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              challenge={{
                id: challenge.id,
                name: challenge.title,
                description: challenge.description,
                points: 10,
              }}
              onClick={() => setPopupOpen(challenge.id)}
            />
          ))}
        </div>
      ) : (
        <h3 className="empty-message">Semua Tantangan selesai dikerjakan 🎉</h3>
      )}
      {popupOpen && (
        <UploadPopup
          onComplete={() => handleUploadComplete(popupOpen)}
          onClose={() => setPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;
