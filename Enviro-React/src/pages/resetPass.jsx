import React, { useState } from "react";
import http from "../utils/fetch"; // Adjust the path as needed
import "./resetPass.css";
import logo from "../assets/logoEnviro.png";
import background from "../assets/Background-login.jpg";
import { useNavigate } from "react-router-dom";

function ResetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(""); // New state for message status
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await http("/api/reset-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      console.log("Reset password response:", data);

      if (response.status === 200) {
        setMessage("Link reset password telah dikirim ke email.");
        setMessageStatus("success"); // Set success status
        setErrors({});
      } else {
        setMessage(
          data.message || "Terjadi kesalahan saat mengirim email reset."
        );
        setMessageStatus("error"); // Set error status
      }
    } catch (error) {
      console.error("Gagal mengirim email reset:", error);
      setMessage("Terjadi kesalahan saat mengirim email reset.");
      setMessageStatus("error"); // Set error status
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
          {message && (
            <p
              className={`message ${
                messageStatus === "success" ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}

          <input type="submit" id="submitReset" value="Reset Password" />
        </form>

        <div className="signup-lupapassword">
          <div className="signUp">
            <p>
              Masuk ke akun?{" "}
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
