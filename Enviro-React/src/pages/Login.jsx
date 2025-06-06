// src/components/LoginUser.js
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import logo from "../assets/logoEnviro.png"; // atau "../../assets/logoEnviro.png" sesuai folder kamu
import background from "../assets/Background-login.jpg";
import { http } from "../utils/fetch";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorKey, setErrorKey] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await http("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setErrorMessage("Email atau Password salah");
          setErrorKey((prev) => prev + 1);
        } else {
          const errData = await response.json();
          console.error("Login gagal:", errData);
        }
        return;
      }

      const resData = await response.json();
      localStorage.setItem("token", resData.access_token);
      localStorage.setItem("user", JSON.stringify(resData.user));
      console.log("Login berhasil!");
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-user">
      <div className="login-form">
        <header>
          <div className="logoEnviro">
            <img src={logo} alt="Website Logo" />
          </div>
          <p>Selamat Datang Kembali!</p>
        </header>
        <form id="form" onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errorMessage ? "input-error" : ""}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errorMessage ? "input-error" : ""}
            />
          </div>
          <input type="submit" id="Login" value="Login" />
        </form>

        {errorMessage && (
          <p className="error" key={errorKey}>
            {errorMessage}
          </p>
        )}
        <div className="signup-lupapassword">
          <div className="signUp">
            <p>
              Belum punya akun?{" "}
              <a href="/register" className="highlight">
                Sign Up
              </a>
            </p>
          </div>
          <div className="lupa-password">
            <a href="/reset-password" className="highlight">
              Lupa Password?
            </a>
          </div>
        </div>
      </div>

      <div className="imageLogin">
        <img src={background} alt="Login Background" />
      </div>
    </div>
  );
}
