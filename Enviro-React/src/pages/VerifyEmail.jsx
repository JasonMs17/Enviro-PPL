import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    const hash = searchParams.get("hash");
    const expires = searchParams.get("expires");
    const signature = searchParams.get("signature");

    const token = localStorage.getItem("token"); // Ambil token dari localStorage

    if (!id || !hash || !expires || !signature || !token) {
      setMessage("Invalid verification link or missing token.");
      setLoading(false);
      return;
    }

    const backendUrl = `/api/verify-email/${id}/${hash}?expires=${expires}&signature=${signature}`;

    axios
      .get(backendUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMessage("Email verified successfully!");
        setLoading(false);
        setTimeout(() => {
          navigate("/profile");
        }, 3000);
      })
      .catch((error) => {
        setMessage("Verification failed.");
        console.error(error.response?.data || error.message);
        setLoading(false);
      });
  }, [location, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Verify Email</h1>
      <p>{message}</p>
    </div>
  );
}

export default VerifyEmail;
