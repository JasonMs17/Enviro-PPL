import "./userChallenge.css";
import { useEffect, useState } from "react";
import SkeletonCard from "../../../components/SkeletonCard";

export default function UserChallenge() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/user-challenge",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );

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

  return (
    <div className="row-section-challenge">
      {challenges.map((challenge, index) => (
        <div
          className="progress-container-challenge"
          key={challenge.challenge_id || index}
        >
          <div className="user-challenge-profile">
            <div className="challenge-card-user-progress">
              <div className="challenge-card-header">
                <div className="challenge-card-content">
                  <h5 className="challenge-card-name">{challenge.title}</h5>
                </div>
              </div>
              <div className="challenge-card-summary">
                <p>{challenge.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
