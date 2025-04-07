import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function SendEmail() {
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Fungsi untuk memeriksa status verifikasi email saat halaman pertama kali dimuat
  useEffect(() => {
    const checkVerificationStatus = async () => {
      try {
        const response = await axios.get("/api/email/verify");

        console.log(response);

        if (response.status === 200) {
          setMessage("Silakan cek email Anda untuk tautan verifikasi.");
        }
      } catch (error) {
        setMessage(
          "Email belum diverifikasi. Silakan kirim ulang tautan verifikasi."
        );
      }
    };

    checkVerificationStatus();
  }, []);

  // Fungsi untuk mengirim ulang email verifikasi
  const handleResend = async () => {
    try {
      const response = await axios.post("/api/email/verify");
      console.log(response);
      if (response.ok) {
        setMessage("Tautan verifikasi telah dikirim ulang ke email Anda.");
      }
    } catch (error) {
      setMessage("Gagal mengirim ulang email verifikasi.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Verifikasi Email</h2>
      <p>{message}</p>
      {!isVerified && (
        <button onClick={handleResend}>Kirim Ulang Email Verifikasi</button>
      )}
    </div>
  );
}

export default SendEmail;
