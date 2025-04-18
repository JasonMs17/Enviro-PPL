import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import SendEmail from "../pages/SendEmail";
import VerifyEmail from "../pages/VerifyEmail";
import ResetPass from "../pages/ResetPass";
import ResetPasswordForm from "../pages/ResetPasswordForm";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Loading from "../components/Loading"; // Import komponen Loading
import AirMateri1 from "../pages/PencemaranAir/SubBab1/Materi1/AirMateri1";
import AirMateri2 from "../pages/PencemaranAir/SubBab1/Materi2/AirMateri2";
import AirMateri3 from "../pages/PencemaranAir/SubBab1/Materi3/AirMateri3";

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext); // Ambil loading dari AuthContext

  console.log("Loading:", loading);

  // Tampilkan loading jika masih dalam proses pengecekan
  if (loading) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Redirect jika sudah login ke halaman profile */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />

      {/* Halaman profile, redirect ke home jika user tidak ada */}
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/" />}
      />

      {/* Halaman verifikasi email */}
      <Route path="/send-email" element={<SendEmail />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/reset-password" element={<ResetPass />} />
      <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
      <Route path="/apa-itu-polusi-air-pencemaran-air" element = {<AirMateri1 />}/>      
      <Route path="/penyebab-polusi-air" element = {<AirMateri2 />}/>      
      <Route path="/dampak-umum-polusi-air" element = {<AirMateri3 />}/>      
    </Routes>
  );
};

export default AppRoutes;
