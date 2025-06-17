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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

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
          setErrorMessage("Terjadi kesalahan saat login. Silakan coba lagi.");
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
      setErrorMessage("Terjadi kesalahan saat login. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>
          <input
            type="submit"
            id="Login"
            value={isLoading ? "Loading..." : "Login"}
            disabled={isLoading}
            className={isLoading ? "loading" : ""}
          />
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
                Daftar
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
