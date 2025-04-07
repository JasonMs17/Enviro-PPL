import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import VerifyEmail from "../pages/VerifyEmail"; // Halaman Verifikasi Email
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import Loading from "../components/Loading"; // Import komponen Loading

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext); // Ambil loading dari AuthContext

  console.log("Loading:", loading);

  // Tampilkan loading jika masih dalam proses pengecekan
  if (loading) {
    return <Loading />;
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
      <Route
        path="/verify-email"
        element={user ? <VerifyEmail /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default AppRoutes;
