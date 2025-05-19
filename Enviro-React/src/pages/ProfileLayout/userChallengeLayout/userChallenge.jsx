import "./userChallenge.css";
import { useEffect, useState } from "react";

export default function UserChallenge() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/challenges-fetch", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
          },
        });

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
    return <p>Loading tantangan...</p>;
  }

  return (
    <div className="row-section">
      {challenges.length > 0 ? (
        challenges.map((challenge, index) => (
          <div className="progress-container" key={challenge.id || index}>
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
        ))
      ) : (
        <p>Belum ada tantangan yang tersedia.</p>
      )}
    </div>
  );
}