import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import "./LoginModal.css";

const VerifyEmailModal = ({ onClose, onVerify }) => {
  return (
    <div className="login-modal">
      <div className="modal-content">
        <div className="modal-icon">
          <FaExclamationCircle />
        </div>
        <h3>Verifikasi Email Anda</h3>
        <p>
          Untuk mengakses materi ini, Anda perlu verifikasi email terlebih
          dahulu.
        </p>
        <div className="modal-buttons">
          <button className="login-button-modal" onClick={onVerify}>
            Verifikasi Email
          </button>
          <button className="close-button" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
