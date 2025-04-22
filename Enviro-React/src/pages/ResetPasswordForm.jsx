import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import http from "../utils/fetch"; // Assuming your custom fetch utility is in utils/http.js
import "./ResetPasswordForm.css";
import logo from "../assets/logoEnviro.png"; // Assuming the logo is in the assets folder
import background from "../assets/Background-login.jpg"; // Assuming the background is in the assets folder

function ResetPasswordForm() {
  const { token } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http("/api/reset-password/confirm", {
        method: "POST",
        body: JSON.stringify({
          token,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          text: "Password berhasil diubah. Silakan login.",
          type: "success",
        });
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage({
          text: data.message || "Terjadi kesalahan saat reset password.",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "Terjadi kesalahan saat reset password.",
        type: "error",
      });
    }
  };

  return (
    <div className="reset-pass-form">
      <div className="reset-form">
        <header>
          <div className="logoEnviro">
            <img src={logo} alt="Website Logo" />
          </div>
          <p>Masukkan Password Baru</p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              type="password"
              placeholder="Password Baru"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="inputgroup">
            <input
              type="password"
              placeholder="Konfirmasi Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </div>

          {message.text && (
            <p className={`message ${message.type}`}>{message.text}</p>
          )}

          <div className="inputgroup">
            <input type="submit" id="submitReset" value="Ubah Password" />
          </div>
        </form>
      </div>

      <div className="imageLogin">
        <img src={background} alt="Background" />
      </div>
    </div>
  );
}

export default ResetPasswordForm;
