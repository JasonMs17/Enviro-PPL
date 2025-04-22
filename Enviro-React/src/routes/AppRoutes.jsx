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
import Bab1AirKuis1 from "../pages/PencemaranAir/SubBab1/Kuis1/Bab1AirKuis1";
import Bab2AirMateri1 from "../pages/PencemaranAir/SubBab2/Materi1/Bab2AirMateri1";
import Bab2AirMateri2 from "../pages/PencemaranAir/SubBab2/Materi2/Bab2AirMateri2";
import Bab2AirMateri3 from "../pages/PencemaranAir/SubBab2/Materi3/Bab2AirMateri3";
import Bab1AirKuis2 from "../pages/PencemaranAir/SubBab2/Kuis2/Bab1AirKuis2";
import Bab3AirMateri1 from "../pages/PencemaranAir/SubBab3/Materi1/Bab3AirMateri1";
import Bab3AirMateri2 from "../pages/PencemaranAir/SubBab3/Materi2/Bab3AirMateri2";
import Bab3AirMateri3 from "../pages/PencemaranAir/SubBab3/Materi3/Bab3AirMateri3";
import Bab1AirKuis3 from "../pages/PencemaranAir/SubBab3/Kuis3/Bab1AirKuis3";
import Bab1UdaraMateri1 from "../pages/PencemaranUdara/SubBab1/Materi1/Bab1UdaraMateri1";
import Bab1UdaraMateri2 from "../pages/PencemaranUdara/SubBab1/Materi2/Bab1UdaraMateri2";
import Bab1UdaraMateri3 from "../pages/PencemaranUdara/SubBab1/Materi3/Bab1UdaraMateri3";
import Bab1UdaraKuis1 from "../pages/PencemaranUdara/SubBab1/Kuis1/Bab2UdaraKuis1";
import Bab2UdaraMateri1 from "../pages/PencemaranUdara/SubBab2/Materi1/Bab2UdaraMateri1";
import Bab2UdaraMateri2 from "../pages/PencemaranUdara/SubBab2/Materi2/Bab2UdaraMateri2";
import Bab2UdaraMateri3 from "../pages/PencemaranUdara/SubBab2/Materi3/Bab2UdaraMateri3";
import Bab1UdaraKuis2 from "../pages/PencemaranUdara/SubBab2/Kuis2/Bab2UdaraKuis2";
import Bab3UdaraMateri1 from "../pages/PencemaranUdara/SubBab3/Materi1/Bab3UdaraMateri1";
import Bab3udaraMateri2 from "../pages/PencemaranUdara/SubBab3/Materi2/Bab3UdaraMateri2";
import Bab3UdaraMateri3 from "../pages/PencemaranUdara/SubBab3/Materi3/Bab3UdaraMateri3";
import Bab1UdaraKuis3 from "../pages/PencemaranUdara/SubBab3/Kuis3/Bab2UdaraKuis3";
import Bab1TanahMateri1 from "../pages/PencemaranTanah/SubBab1/Materi1/Bab1TanahMateri1";
import Bab1TanahMateri2 from "../pages/PencemaranTanah/SubBab1/Materi2/Bab1TanahMateri2";
import Bab1TanahMateri3 from "../pages/PencemaranTanah/SubBab1/Materi3/Bab1TanahMateri3";
import Bab3TanahKuis1 from "../pages/PencemaranTanah/SubBab1/Kuis1/Bab3TanahKuis1";
import Bab2TanahMateri1 from "../pages/PencemaranTanah/SubBab2/Materi1/Bab2TanahMateri1";
import Bab2TanahMateri2 from "../pages/PencemaranTanah/SubBab2/Materi2/Bab2TanahMateri2";
import Bab2TanahMateri3 from "../pages/PencemaranTanah/SubBab2/Materi3/Bab2TanahMateri3";
import Bab3TanahKuis2 from "../pages/PencemaranTanah/SubBab2/Kuis2/Bab3TanahKuis2";
import Bab3TanahMateri1 from "../pages/PencemaranTanah/SubBab3/Materi1/Bab3TanahMateri1";
import Bab3TanahMateri2 from "../pages/PencemaranTanah/SubBab3/Materi2/Bab3TanahMateri2";
import Bab3TanahMateri3 from "../pages/PencemaranTanah/SubBab3/Materi3/Bab3TanahMateri3";
import Bab3TanahKuis3 from "../pages/PencemaranTanah/SubBab3/Kuis3/Bab3TanahKuis3";

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext); // Ambil loading dari AuthContext

  console.log("Loading:", loading);

  // Tampilkan loading jika masih dalam proses pengecekan
  if (loading) {
    return null;
  }

  // Protected Route Component
  const ProtectedRoute = ({ element: Element }) => {
    return user ? Element : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Auth Routes */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="/send-email"
        element={<ProtectedRoute element={<SendEmail />} />}
      />
      <Route
        path="/verify-email"
        element={<ProtectedRoute element={<VerifyEmail />} />}
      />
      <Route path="/reset-password" element={<ProtectedRoute element={<ResetPass />} />} />
      <Route path="/reset-password/:token" element={<ProtectedRoute element={<ResetPasswordForm />} />} />
      <Route path="/apa-itu-polusi-air-pencemaran-air" element={<ProtectedRoute element={<Bab1AirMateri1 />} />} />
      <Route path="/penyebab-polusi-air" element={<ProtectedRoute element={<Bab1AirMateri2 />} />} />
      <Route path="/dampak-umum-polusi-air" element={<ProtectedRoute element={<Bab1AirMateri3 />} />} />
      <Route path="/kuis-apa-itu-polusi-air" element={<ProtectedRoute element={<Bab1AirKuis1 />} />} />
      <Route path="/air-tercemar-dan-penyakit" element={<ProtectedRoute element={<Bab2AirMateri1 />} />} />
      <Route path="/siapa-yang-paling-Terdampak" element={<ProtectedRoute element={<Bab2AirMateri2 />} />} />
      <Route path="/menentukan-air-aman-dikonsumsi" element={<ProtectedRoute element={<Bab2AirMateri3 />} />} />
      <Route path="/kuis-penyebab-dan-dampak-polusi-air" element={<ProtectedRoute element={<Bab1AirKuis2 />} />} />
      <Route path="/pengolahan-limbah-air" element={<ProtectedRoute element={<Bab3AirMateri1 />} />} />
      <Route path="/aksi-individu-untuk-menjaga-air" element={<ProtectedRoute element={<Bab3AirMateri2 />} />} />
      <Route path="/pengelolaan-air-berkelanjutan" element={<ProtectedRoute element={<Bab3AirMateri3 />} />} />
      <Route path="/kuis-solusi-menjaga-kualitas-air" element={<ProtectedRoute element={<Bab1AirKuis3 />} />} />
      <Route path="/apa-itu-polusi-udara-dan-sumbernya" element={<ProtectedRoute element={<Bab1UdaraMateri1 />} />} />
      <Route path="/jenis-polutan-di-udara" element={<ProtectedRoute element={<Bab1UdaraMateri2 />} />} />
      <Route path="/dampak-polusi-terhadap-lingkungan" element={<ProtectedRoute element={<Bab1UdaraMateri3 />} />} />
      <Route path="/kuis-pengenalan-dan-dampak-polusi-udara" element={<ProtectedRoute element={<Bab1UdaraKuis1 />} />} />
      <Route path="/bagaimana-polusi-udara-mempengaruhi-tubuh-kita" element={<ProtectedRoute element={<Bab2UdaraMateri1 />} />} />
      <Route path="/pencegahan-dan-penganganan-risiko-kesehatan-akibat-polusi" element={<ProtectedRoute element={<Bab2UdaraMateri2 />} />} />
      <Route path="/pencemaran-udara-siapa-yang-paling-Terdampak" element={<ProtectedRoute element={<Bab2UdaraMateri3 />} />} />
      <Route path="/kuis-dampak-polusi-udara-terhadap-kesehatan" element={<ProtectedRoute element={<Bab1UdaraKuis3 />} />} />
      <Route path="/inovasi-di-kota-kota-besar-untuk-mengatasi-polusi-udara" element={<ProtectedRoute element={<Bab3UdaraMateri1 />} />} />
      <Route path="/peran-pemerintah-dan-regulasi" element={<ProtectedRoute element={<Bab3udaraMateri2 />} />} />
      <Route path="/aksi-individu-untuk-udara-lebih-bersih" element={<ProtectedRoute element={<Bab3UdaraMateri3 />} />} />
      <Route path="/kuis-solusi-dan-upaya-penanggulangan" element={<ProtectedRoute element={<Bab1UdaraKuis3 />} />} />
      <Route path="/apa-itu-polusi-tanah-dan-penyebabnya" element={<ProtectedRoute element={<Bab1TanahMateri1 />} />} />
      <Route path="/dampak-polusi-tanah-terhadap-lingkungan" element={<ProtectedRoute element={<Bab1TanahMateri2 />} />} />
      <Route path="/jenis-jenis-limbah-penyebab-polusi-tanah" element={<ProtectedRoute element={<Bab1TanahMateri3 />} />} />
      <Route path="/kuis-polusi-tanah-dan-penyebabnya" element={<ProtectedRoute element={<Bab3TanahKuis1 />} />} />
      <Route path="/zat-berbahaya-yang-terkandung-dalam-tanah-tercemar" element={<ProtectedRoute element={<Bab2TanahMateri1 />} />} />
      <Route path="/risiko-kesehatan-akibat-polusi-tanah" element={<ProtectedRoute element={<Bab2TanahMateri2 />} />} />
      <Route path="/kontaminasi-pada-tanaman-dan-dampaknya-ke-manusia" element={<ProtectedRoute element={<Bab2TanahMateri3 />} />} />
      <Route path="/kuis-dampak-polusi-tanah-terhadap-kesehatan" element={<ProtectedRoute element={<Bab3TanahKuis2 />} />} />
      <Route path="/pengelolaan-sampah-dan-limbah-rumah-tangga" element={<ProtectedRoute element={<Bab3TanahMateri1 />} />} />
      <Route path="/teknologi-pengendalian-dan-pemulihan-tanah" element={<ProtectedRoute element={<Bab3TanahMateri2 />} />} />
      <Route path="/peran-masyarakat-dan-edukasi-lingkungan" element={<ProtectedRoute element={<Bab3TanahMateri3 />} />} />
      <Route path="/kuis-solusi-mengatasi-polusi-tanah" element={<ProtectedRoute element={<Bab3TanahKuis3 />} />} />

    </Routes>
  );
};

export default AppRoutes;
