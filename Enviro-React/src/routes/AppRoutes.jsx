import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Test from "@/pages/Test";
import Profile from "@/pages/Profile";
import SendEmail from "@/pages/SendEmail";
import VerifyEmail from "@/pages/VerifyEmail";
import ResetPass from "@/pages/resetPass";
import ResetPasswordForm from "@/pages/ResetPasswordForm";
import { useContext } from "react";
import { AuthContext } from "@/AuthContext";
import Loading from "@/components/Loading";
import CourseMaterialAir from "@/components/Materi/MateriPencemaranAir";
import CourseMaterialTanah from "@/components/Materi/MateriPencemaranTanah";
import CourseMaterialUdara from "@/components/Materi/MateriPencemaranUdara";
import Quiz from "@/components/Kuis/kuishubung";
import Challenge from "@/pages/Challenge/Challenge";
import ChallengeClaimed from "@/pages/Challenge/ChallengeClaimed";
import LandingPage from "../components/LandingPage";
import LandingPageLogin from "../components/LandingPageLogin";
import MaterialDetail from "../components/MaterialDetail/MaterialDetail";
import AboutUs from "../pages/AboutUs/AboutUs";

const ProtectedRoute = ({ element: Element }) => {
  const { user } = useContext(AuthContext);
  return user ? Element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

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
        path="/profile/course"
        element={user ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="/profile/challenge"
        element={user ? <Profile /> : <Navigate to="/" />}
      />
      <Route path="/profile/material/:id" element={<MaterialDetail />} />
      <Route
        path="/send-email"
        element={<ProtectedRoute element={<SendEmail />} />}
      />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/reset-password" element={<ResetPass />} />
      <Route path="/reset-password/:token" element={<ResetPasswordForm />} />

      <Route path="/testingkuis" element={<Quiz />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route
        path="/challenge"
        element={<ProtectedRoute element={<Challenge />} />}
      />
      <Route path="/challenge-claimed" element={<ChallengeClaimed />} />
      <Route
        path="/pencemaran-air/:material_id"
        element={<ProtectedRoute element={<CourseMaterialAir />} />}
      />
      <Route
        path="/pencemaran-tanah/:material_id"
        element={<ProtectedRoute element={<CourseMaterialTanah />} />}
      />
      <Route
        path="/pencemaran-udara/:material_id"
        element={<ProtectedRoute element={<CourseMaterialUdara />} />}
      />
      <Route
        path="/pencemaran-air/kuis/:pollutionTypeId/:subbab"
        element={<ProtectedRoute element={<CourseMaterialAir />} />}
      />
      <Route
        path="/pencemaran-tanah/kuis/:pollutionTypeId/:subbab"
        element={<ProtectedRoute element={<CourseMaterialTanah />} />}
      />
      <Route
        path="/pencemaran-udara/kuis/:pollutionTypeId/:subbab"
        element={<ProtectedRoute element={<CourseMaterialUdara />} />}
      />
    </Routes>
  );
};

export default AppRoutes;
