import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import logoEnviro from "../assets/logoEnviro.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

axios.defaults.withCredentials = true; // agar cookie disertakan

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({}); // Menyimpan error
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok.");
      return;
    }

    try {
      // Lanjut register
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      if (response.status === 200) {
        console.log("Pendaftaran berhasil!");
        // Redirect ke halaman home setelah berhasil registrasi
        navigate("/verify-email"); // Arahkan pengguna ke home
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // Menangani validasi error dari Laravel
        setErrors(error.response.data.errors); // Simpan error ke state
      } else {
        console.error("Gagal daftar:", error.response?.data || error.message);
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
                />
                {/* Tampilkan error untuk name */}
                {errors.name && <p className="error">{errors.name[0]}</p>}
              </div>
              <div className="inputgroup">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Tampilkan error untuk email */}
                {errors.email && <p className="error">{errors.email[0]}</p>}
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
                {/* Tampilkan error untuk password */}
                {errors.password && (
                  <p className="error">{errors.password[0]}</p>
                )}
              </div>
              <div className="input-box">
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Konfirmasi Password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* Tampilkan error untuk konfirmasi password */}
                {errors.password_confirmation && (
                  <p className="error">{errors.password_confirmation[0]}</p>
                )}
              </div>
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
              <div className="lupa-password">
                <a href="">Lupa Password? </a>
              </div>
            </div>
          </div>

          <div className="imageLogin">
            <h1> image disini</h1>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default RegisterForm;
