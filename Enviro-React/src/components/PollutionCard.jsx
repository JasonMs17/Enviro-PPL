import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./PollutionCard.css";

const PollutionCard = ({
  icon: Icon,
  title,
  description,
  image,
  route,
  onRequireLogin,
}) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLearnMore = () => {
    if (user) {
      navigate(route);
    } else {
      onRequireLogin(); // panggil modal dari luar
    }
  };

  return (
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
  );
};

export default PollutionCard;
