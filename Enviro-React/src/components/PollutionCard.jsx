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
  const { user, verifySession } = useContext(AuthContext);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleLearnMore = async () => {
    if (!user) {
      onRequireLogin();
      return;
    }

    try {
      // Verify session first
      await verifySession();

      // If session is valid, proceed with navigation
      if (!user.email_verified_at) {
        setShowVerifyModal(true);
        return;
      }

      navigate(route);
    } catch (error) {
      console.error("Error verifying session:", error);
      onRequireLogin(); // Redirect to login if session is invalid
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
          user={user}
        />
      )}
    </>
  );
};

export default PollutionCard;
