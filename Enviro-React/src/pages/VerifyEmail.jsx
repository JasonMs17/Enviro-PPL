import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VerifyEmail.css";
import logoEnviro from "../assets/logoEnviro.png";
import http from "../utils/fetch";

function VerifyEmail() {
  const [status, setStatus] = useState({
    success: false,
    message: "",
    loading: true,
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Ambil semua parameter dari URL
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get("id");
        const hash = searchParams.get("hash");
        const expires = searchParams.get("expires");
        const signature = searchParams.get("signature");

        if (!id || !hash || !expires || !signature) {
          throw new Error("Link verifikasi tidak valid");
        }

        const response = await http(
          `/api/verify-email/${id}/${hash}?expires=${expires}&signature=${signature}`
        );

        if (response.ok) {
          setStatus({
            success: true,
            message: "Email berhasil diverifikasi!",
            loading: false,
          });
          // Redirect ke home setelah 3 detik
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          const data = await response.json();
          throw new Error(data.message || "Verifikasi gagal");
        }
      } catch (error) {
        console.error(error);
        setStatus({
          success: false,
          message: error.message || "Verifikasi email gagal",
          loading: false,
        });
      }
    };

    verifyEmail();
  }, [location, navigate]);

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
    <div className="verify-email-container">
      <div className="verify-email-card">
        <div className="logo-container">
          <img src={logoEnviro} alt="Enviro Logo" />
        </div>

        <h2 className="verify-email-title">
          {status.loading ? "Memverifikasi Email..." : status.message}
        </h2>

        <div
          className={`status-icon ${
            status.loading ? "loading" : status.success ? "success" : "error"
          }`}
        >
          {renderIcon()}
        </div>

        {status.success && (
          <p className="redirect-message">
            Anda akan diarahkan ke halaman utama dalam beberapa detik...
          </p>
        )}

        {!status.loading && !status.success && (
          <button className="back-button" onClick={() => navigate("/login")}>
            Kembali ke Login
          </button>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
