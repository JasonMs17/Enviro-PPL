import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import "./LoginModal.css";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="login-modal">
      <div className="modal-content">
        <div className="modal-icon">
          <FaExclamationCircle />
        </div>
        <h3>Silakan Login Terlebih Dahulu</h3>
        <p>Untuk mengakses materi ini, Anda perlu login terlebih dahulu.</p>
        <div className="modal-buttons">
          <button
            className="login-button-modal"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button className="close-button" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
