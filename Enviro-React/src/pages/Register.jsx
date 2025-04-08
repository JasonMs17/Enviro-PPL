import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import logoEnviro from "../assets/logoEnviro.png";
import background from "../assets/Background-login.jpg";
import { http } from "../utils/fetch";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [errorKey, setErrorKey] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    try {
      // Kirim objek JavaScript menggunakan JSON.stringify untuk request body
      const response = await http("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          birth_date,
          password,
          password_confirmation: confirmPassword,
        }),
      });

      if (!response.ok) {
        if (response.status === 422) {
          const errData = await response.json();
          setErrors(errData.errors); // Set errors dari response
        } else {
          const errData = await response.json();
          console.error("Pendaftaran gagal:", errData);
          setErrorMessage("Pendaftaran gagal. Coba lagi.");
        }
        return;
      }

      const resData = await response.json();
      console.log("Pendaftaran berhasil!");
      window.location.href = "/send-email"; // Redirect ke halaman lain setelah pendaftaran berhasil
    } catch (error) {
      console.error("Pendaftaran error:", error);
      setErrorMessage("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
    <div className="register-user">
      <div className="register-form">
        <header>
          <div className="logoEnviro">
            <img src={logoEnviro} alt="Website Logo" />
          </div>
          <p>Buat Akun Baru</p>
        </header>

        <form id="form" onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              type="text"
              id="name"
              placeholder="Nama"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "input-error" : ""}
            />
          </div>
          {errors.name && <p className="error">{errors.name[0]}</p>}

          <div className="inputgroup">
            <input
              type="text"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "input-error" : ""}
            />
          </div>
          {errors.email && <p className="error">{errors.email[0]}</p>}

          <div className="inputgroup">
            <input
              type="date"
              id="birth_date"
              required
              value={birth_date}
              onChange={(e) => setBirthDate(e.target.value)}
              className={errors.birth_date ? "input-error" : ""}
            />
          </div>

          {errors.birth_date && <p className="error">{errors.birth_date[0]}</p>}

          <div className="input-box">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "input-error" : ""}
            />
          </div>
          {errors.password && <p className="error">{errors.password[0]}</p>}

          <div className="input-box">
            <input
              type="password"
              id="confirm-password"
              placeholder="Konfirmasi Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.password_confirmation ? "input-error" : ""}
            />
          </div>
          {errors.password_confirmation && (
            <p className="error">{errors.password_confirmation[0]}</p>
          )}

          <input type="submit" id="Login" value="Daftar" />
        </form>

        {errorMessage && (
          <p className="error" key={errorKey}>
            {errorMessage}
          </p>
        )}

        <div className="signup-lupapassword">
          <div className="signUp">
            <p>
              Sudah punya akun?{" "}
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

export default RegisterForm;
