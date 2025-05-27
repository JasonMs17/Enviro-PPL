import React, { useState, useEffect } from "react";
import "./SendEmail.css";
import logoEnviro from "../assets/logoEnviro.png";
import { http } from "../utils/fetch";

function SendEmail() {
  const [status, setStatus] = useState({
    success: true,
    message: "",
    loading: true,
  });

  useEffect(() => {
    const checkVerificationStatus = async () => {
      try {
        const response = await http("/api/email/verify", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          setStatus({
            success: true,
            message: "Verifikasi Email Berhasil Dikirim",
            loading: false,
          });
        } else {
          throw new Error("Verifikasi gagal");
        }
      } catch (error) {
        setStatus({
          success: false,
          message: "Verifikasi Email Gagal Dikirim",
          loading: false,
        });
      }
    };

    checkVerificationStatus();
  }, []);

  const handleResend = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));
    try {
      const response = await http("/api/email/verify", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        setStatus({
          success: true,
          message: "Verifikasi Email Berhasil Dikirim",
          loading: false,
        });
      } else {
        throw new Error("Verifikasi gagal");
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Verifikasi Email Gagal Dikirim",
        loading: false,
      });
    }
  };

  const renderIcon = () => {
    if (status.loading) {
      return (
        <svg className="email-spinner" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
            stroke="currentColor"
          />
        </svg>
      );
    }

    if (status.success) {
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
            fill="currentColor"
          />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          fill="currentColor"
        />
      </svg>
    );
  };

  return (
    <div className="send-email-container">
      <div className="send-email-card">
        <div className="logo-container">
          <img src={logoEnviro} alt="Enviro Logo" />
        </div>

        <h2 className="send-email-title">
          {status.loading ? "Memverifikasi Email..." : status.message}
        </h2>

        <div
          className={`status-icon ${
            status.loading ? "loading" : status.success ? "success" : "error"
          }`}
        >
          {renderIcon()}
        </div>

        <button
          className="resend-button"
          onClick={handleResend}
          disabled={status.loading}
        >
          {status.loading ? "Mengirim..." : "Kirim Ulang"}
        </button>
      </div>
    </div>
  );
}

export default SendEmail;
