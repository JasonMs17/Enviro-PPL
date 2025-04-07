// src/components/LoginUser.js
import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Pastikan login.css sesuai dan ada di src/components

import logoEnviro from "../assets/logoEnviro.png";

axios.defaults.withCredentials = true; // agar cookie disertakan

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.get("/sanctum/csrf-cookie");

    try {
      // Ambil CSRF token dulu

      // Kirim request login ke API dengan credentials
      const response = await axios.post(
        "/api/login",
        {
          account: email, // Kirim email dengan field 'account'
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const { user, token } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        console.log("Login berhasil!");
        window.location.href = "/";
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Email atau Password salah");
      } else {
        console.error("Login gagal:", error.response?.data || error.message);
      }
    }
  };

  return (
    <div>
      <main>
        <div className="login-user">
          <div className="login-form">
            <header>
              <div className="logoEnviro">
                <img src={logoEnviro} alt="Website Logo" />
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
                />
              </div>
              <input type="submit" id="Login" value="Login" />
            </form>

            {/* Tampilkan pesan error jika login gagal */}
            {errorMessage && <p className="error">{errorMessage}</p>}

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
                <a href="">Lupa Password?</a>
              </div>
            </div>
          </div>

          <div className="imageLogin">
            <h1>image disini</h1>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default LoginUser;
