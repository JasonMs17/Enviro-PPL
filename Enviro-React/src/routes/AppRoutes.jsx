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
import Bab1AirMateri1 from "../pages/PencemaranAir/SubBab1/Materi1/Bab1AirMateri1";
import Bab1AirMateri2 from "../pages/PencemaranAir/SubBab1/Materi2/Bab1AirMateri2";
import Bab1AirMateri3 from "../pages/PencemaranAir/SubBab1/Materi3/Bab1AirMateri3";
import Bab2AirMateri1 from "../pages/PencemaranAir/SubBab2/Materi1/Bab2AirMateri1";
import Bab2AirMateri2 from "../pages/PencemaranAir/SubBab2/Materi2/Bab2AirMateri2";
import Bab2AirMateri3 from "../pages/PencemaranAir/SubBab2/Materi3/Bab2AirMateri3";
import Bab3AirMateri1 from "../pages/PencemaranAir/SubBab3/Materi1/Bab3AirMateri1";
import Bab3AirMateri2 from "../pages/PencemaranAir/SubBab3/Materi2/Bab3AirMateri2";
import Bab3AirMateri3 from "../pages/PencemaranAir/SubBab3/Materi3/Bab3AirMateri3";
import Bab1UdaraMateri1 from "../pages/PencemaranUdara/SubBab1/Materi1/Bab1UdaraMateri1";
import Bab1UdaraMateri2 from "../pages/PencemaranUdara/SubBab1/Materi2/Bab1UdaraMateri2";
import Bab1UdaraMateri3 from "../pages/PencemaranUdara/SubBab1/Materi3/Bab1UdaraMateri3";
import Bab2UdaraMateri1 from "../pages/PencemaranUdara/SubBab2/Materi1/Bab2UdaraMateri1";
import Bab2UdaraMateri2 from "../pages/PencemaranUdara/SubBab2/Materi2/Bab2UdaraMateri2";
import Bab2UdaraMateri3 from "../pages/PencemaranUdara/SubBab2/Materi3/Bab2UdaraMateri3";

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
      <Route path="/apa-itu-polusi-air-pencemaran-air" element = {<Bab1AirMateri1 />}/>      
      <Route path="/penyebab-polusi-air" element = {<Bab1AirMateri2 />}/>      
      <Route path="/dampak-umum-polusi-air" element = {<Bab1AirMateri3 />}/>      
      <Route path="/air-tercemar-dan-penyakit" element = {<Bab2AirMateri1 />}/>      
      <Route path="/siapa-yang-paling-Terdampak" element = {<Bab2AirMateri2 />}/>      
      <Route path="/menentukan-air-aman-dikonsumsi" element = {<Bab2AirMateri3 />}/>      
      <Route path="/pengolahan-limbah-air" element = {<Bab3AirMateri1 />}/>      
      <Route path="/aksi-individu-untuk-menjaga-air" element = {<Bab3AirMateri2 />}/>      
      <Route path="/pengelolaan-air-berkelanjutan" element = {<Bab3AirMateri3 />}/>    
      <Route path="/apa-itu-polusi-udara-dan-sumbernya" element = {<Bab1UdaraMateri1 />}/>    
      <Route path="/jenis-polutan-di-udara" element = {<Bab1UdaraMateri2 />}/>    
      <Route path="/dampak-polusi-terhadap-lingkungan" element = {<Bab1UdaraMateri3 />}/>    
      <Route path="/bagaimana-polusi-udara-mempengaruhi-tubuh-kita" element = {<Bab2UdaraMateri1 />}/>    
      <Route path="/pencegahan-dan-penganganan-risiko-kesehatan-akibat-polusi" element = {<Bab2UdaraMateri2 />}/>    
      <Route path="/pencemaran-udara-siapa-yang-paling-Terdampak" element = {<Bab2UdaraMateri3 />}/>    

    </Routes>
  );
};

export default AppRoutes;
