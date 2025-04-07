import React, { useEffect, useState } from "react";
import axios from "axios";
import "./VerifyEmail.css";
import logoEnviro from "../assets/logoEnviro.png";
import checkmark from "../assets/checkmark.png";

axios.defaults.withCredentials = true;

function VerifyEmail() {
  const [message, setMessage] = useState("Memuat...");
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const checkVerificationStatus = async () => {
      try {
        const response = await axios.get("/api/email/verify");

        if (response.status === 200) {
          setMessage("Silakan cek email Anda dan klik tautan verifikasi.");
        }
      } catch (error) {
        setMessage(
          "Klik tombol di bawah untuk kirim ulang tautan verifikasi."
        );
      }
    };

    checkVerificationStatus();
  }, []);

  const handleResend = async () => {
    try {
      const response = await axios.post("/api/send-test-email");
      if (response.status === 200) {
        setMessage("Tautan verifikasi telah dikirim ulang ke email Anda.");
      }
    } catch (error) {
      setMessage("Gagal mengirim ulang email verifikasi.");
    }
  };

  return (
    <div className="verify-email-container">
      <div className="verify-card">
        <img src={logoEnviro} alt="Logo Enviro" className="logo" />
        <h2>Verifikasi Email <br></br>
          Berhasil Dikirim</h2>

        <img src={checkmark} alt="Checkmark" className="checkmark" />

        <p>{message}</p>

        {!isVerified && (
          <button onClick={handleResend} className="resend-button">
            Kirim Ulang
          </button>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
