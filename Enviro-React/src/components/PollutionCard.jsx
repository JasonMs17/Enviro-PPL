import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./PollutionCard.css";
import VerifyEmailModal from "./VerifyEmailModal";

const PollutionCard = ({
  icon: Icon,
  title,
  description,
  image,
  route,
  onRequireLogin,
}) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleLearnMore = async () => {
    if (!user) {
      onRequireLogin();
      return;
    }

    try {
      // Fetch latest user data
      const response = await fetch("/api/user", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

      const userData = await response.json();
      setUser(userData); // Update user context with latest data

      if (!userData.email_verified_at) {
        setShowVerifyModal(true);
        return;
      }

      navigate(route);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // If there's an error, proceed with current user data
      if (!user.email_verified_at) {
        setShowVerifyModal(true);
        return;
      }
      navigate(route);
    }
  };

  return (
    <>
      <div className="pollution-card">
        <div className="card-icon">
          <Icon />
        </div>
        <img src={image} alt={title} loading="lazy" />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="learn-more" onClick={handleLearnMore}>
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {showVerifyModal && (
        <VerifyEmailModal
          onClose={() => setShowVerifyModal(false)}
          onVerify={() => {
            navigate("/send-email");
            setShowVerifyModal(false);
          }}
        />
      )}
    </>
  );
};

export default PollutionCard;
