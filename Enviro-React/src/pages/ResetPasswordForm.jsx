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
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

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
        setMessage("Password berhasil diubah. Silakan login.");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setErrors(data.errors || {});
        setMessage(data.message || "Terjadi kesalahan saat reset password.");
      }
    } catch (error) {
      setMessage("Terjadi kesalahan saat reset password.");
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

          <button type="submit" id="submitReset">Ubah Password</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>

      <div className="imageLogin">
        <img src={background} alt="Background" />
      </div>
    </div>
  );
}

export default ResetPasswordForm;
