import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import logoEnviro from "../assets/logoEnviro.png";
import background from "../assets/Background-login.jpg";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      if (response.status === 200) {
        console.log("Pendaftaran berhasil!");
        navigate("/verify-email");
      }
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Gagal daftar:", error.response?.data || error.message);
      }
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
        <img src={background} />
      </div>
    </div>
  );
}

export default RegisterForm;
