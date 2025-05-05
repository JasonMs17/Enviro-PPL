import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Test from "@/pages/Test";
import Profile from "@/pages/Profile";
import SendEmail from "@/pages/SendEmail";
import VerifyEmail from "@/pages/VerifyEmail";
import ResetPass from "@/pages/ResetPass";
import ResetPasswordForm from "@/pages/ResetPasswordForm";
import { useContext } from "react";
import { AuthContext } from "@/AuthContext";
import Loading from "@/components/Loading"; // Import komponen Loading
import CourseMaterialAir from "@/components/Materi/MateriPencemaranAir"; // Import komponen Loading
import CourseMaterialTanah from "@/components/Materi/MateriPencemaranTanah"; // Import komponen Loading
import CourseMaterialUdara from "@/components/Materi/MateriPencemaranUdara"; // Import komponen Loading
import Challenge from "@/pages/Challenge/Challenge";
import LandingPage from "../components/LandingPage";
import LandingPageLogin from "../components/LandingPageLogin";

const ProtectedRoute = ({ element: Element }) => {
  const { user } = useContext(AuthContext);
  return user ? Element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading && user == undefined) {
    return null;
  }
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Auth Routes */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      <Route path="/profile/course" element={user ? <Profile /> : <Navigate to="/" />} />
      <Route path="/send-email" element={<ProtectedRoute element={<SendEmail />} />} />
      <Route path="/verify-email" element={<ProtectedRoute element={<VerifyEmail />} />} />
      <Route path="/reset-password" element={<ResetPass />} />
      <Route path="/reset-password/:token" element={<ResetPasswordForm />} />

      <Route path="/challenge" element={<Challenge />} />
      <Route path="/pencemaran-air/:material_id" element={<ProtectedRoute element={<CourseMaterialAir />} />} />
      <Route path="/pencemaran-tanah/:material_id" element={<ProtectedRoute element={<CourseMaterialTanah />} />} />
      <Route path="/pencemaran-udara/:material_id" element={<ProtectedRoute element={<CourseMaterialUdara />} />} />
      <Route path="/pencemaran-air/kuis/:pollutionTypeId/:subbab" element={<ProtectedRoute element={<CourseMaterialAir />} />} />
      <Route path="/pencemaran-tanah/kuis/:pollutionTypeId/:subbab" element={<ProtectedRoute element={<CourseMaterialTanah />} />} />
      <Route path="/pencemaran-udara/kuis/:pollutionTypeId/:subbab" element={<ProtectedRoute element={<CourseMaterialUdara />} />} />
    </Routes>
  );
};

export default AppRoutes;
