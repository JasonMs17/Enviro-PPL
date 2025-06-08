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
    const interval = setInterval(() => {
      const now = new Date();
      const nextMonday = new Date(now);
      nextMonday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      nextMonday.setHours(0, 0, 0, 0);
      const diff = nextMonday - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleUploadComplete = () => {
    setPopupOpen(false);
    onCompleteChallenge(); // Beri sinyal ke parent
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3 className="countdown">Tantangan Minggu Ini:</h3>
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
          challenges.map((challenge, index) => (
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
          ))
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
