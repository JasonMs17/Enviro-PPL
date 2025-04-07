// src/components/ResetPass.jsx
import React, { useState } from "react";
import axios from "axios";
import "./ResetPass.css";
import logo from "../assets/logoEnviro.png";
import background from "../assets/Background-login.jpg";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function ResetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/password/email", { email });

      if (response.status === 200) {
        setMessage("Link reset password telah dikirim ke email.");
        setErrors({});
      }
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
        setMessage(error.response.data.message);
      } else {
        console.error("Gagal mengirim email reset:", error.message);
        setMessage("Terjadi kesalahan saat mengirim email reset.");
      }
    }
  };

  return (
    <div className="reset-pass">
      <div className="reset-form">
        <header>
          <div className="logoEnviro">
            <img src={logo} alt="Website Logo" />
          </div>
          <p>Reset Password Anda</p>
        </header>

        <form id="form" onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              type="email"
              id="email"
              placeholder="Masukkan Email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "input-error" : ""}
              required
            />
          </div>
          {errors.email && <p className="error">{errors.email[0]}</p>}
          {message && <p className="message">{message}</p>}

          <input type="submit" id="submitReset" value="Reset Password" />
        </form>

        <div className="signup-lupapassword">
          <div className="signUp">
            <p>
              Masuk ke akun? {" "}
              <a href="/login" className="highlight">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="imageLogin">
        <img src={background} alt="Background" />
      </div>
    </div>
  );
}

export default ResetPass;
