import "./userChallenge.css";
import { useEffect, useState } from "react";
import SkeletonCard from "../../../components/SkeletonCard";
import RewardPopup from "@/components/RewardPopup";
import { http } from "@/utils/fetch";

export default function UserChallenge() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReward, setShowReward] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await http("/api/user-challenge");

        if (!response.ok) {
          throw new Error("Gagal ambil data tantangan");
        }

        const data = await response.json();
        console.log("Fetched challenges:", data);
        setChallenges(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching challenges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const newTimeLeft = {};

      // Filter ongoing challenges inside useEffect
      const ongoingChallenges = challenges.filter(
        (challenge) => challenge.progress < 100
      );

      ongoingChallenges.forEach((challenge) => {
        const endDate = new Date(challenge.end_at);
        const difference = endDate - now;

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / 1000 / 60) % 60);

          newTimeLeft[challenge.challenge_id] = {
            days,
            hours,
            minutes,
          };
        }
      });

      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [challenges]);

  const handleRewardClick = (reward) => {
    setSelectedReward(reward);
    setShowReward(true);
  };

  const handleCloseReward = () => {
    setShowReward(false);
    setSelectedReward(null);
  };

  if (loading) {
    return (
      <div className="row-section-challenge">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (challenges.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Belum ada tantangan yang diselesaikan.
        </p>
      </div>
    );
  }

  // Group challenges by status
  const ongoingChallenges = challenges.filter(
    (challenge) => challenge.progress < 100
  );
  const successfulChallenges = challenges.filter(
    (challenge) => challenge.progress === 100
  );
  const failedChallenges = challenges.filter(
    (challenge) => challenge.progress === -1
  );

  return (
    <div className="challenge-sections">
      {ongoingChallenges.length > 0 && (
        <div className="challenge-section">
          <h3 className="section-title">Sedang Berjalan</h3>
          <div className="row-section-challenge">
            {ongoingChallenges.map((challenge, index) => (
              <div
                className="progress-container-challenge"
                key={challenge.challenge_id || index}
              >
                <div className="user-challenge-profile">
                  <div className="challenge-card-user-progress">
                    <div className="challenge-card-header">
                      <div className="challenge-card-content">
                        <h5 className="challenge-card-name">
                          {challenge.title}
                        </h5>
                      </div>
                    </div>
                    <div className="challenge-card-summary">
                      <p>{challenge.description}</p>
                      {/* <div className="countdown-timer">
                        <i className="fas fa-clock"></i>
                        <span className="countdown-text">
                          {timeLeft[challenge.challenge_id]
                            ? `${timeLeft[challenge.challenge_id].days} hari ${
                                timeLeft[challenge.challenge_id].hours
                              } jam ${
                                timeLeft[challenge.challenge_id].minutes
                              } menit`
                            : "Waktu habis"}
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {successfulChallenges.length > 0 && (
        <div className="challenge-section">
          <h3 className="section-title">Tantangan Berhasil</h3>
          <div className="row-section-challenge">
            {successfulChallenges.map((challenge, index) => (
              <div
                className="progress-container-challenge"
                key={challenge.challenge_id || index}
              >
                <div className="user-challenge-profile">
                  <div className="challenge-card-user-progress">
                    <div className="challenge-card-header">
                      <div className="challenge-card-content">
                        <h5 className="challenge-card-name">
                          {challenge.title}
                        </h5>
                      </div>
                    </div>
                    <div className="challenge-card-summary">
                      <p>{challenge.description}</p>
                      <button
                        className="reward-button"
                        onClick={() => handleRewardClick(challenge.reward)}
                      >
                        Lihat Reward
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {failedChallenges.length > 0 && (
        <div className="challenge-section">
          <h3 className="section-title">Gagal</h3>
          <div className="row-section-challenge">
            {failedChallenges.map((challenge, index) => (
              <div
                className="progress-container-challenge"
                key={challenge.challenge_id || index}
              >
                <div className="user-challenge-profile">
                  <div className="challenge-card-user-progress">
                    <div className="challenge-card-header">
                      <div className="challenge-card-content">
                        <h5 className="challenge-card-name">
                          {challenge.title}
                        </h5>
                      </div>
                    </div>
                    <div className="challenge-card-summary">
                      <p>{challenge.description}</p>
                      <p className="failed-text">Challenge Gagal</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showReward && selectedReward && (
        <RewardPopup reward={selectedReward} onClose={handleCloseReward} />
      )}
    </div>
  );
}
