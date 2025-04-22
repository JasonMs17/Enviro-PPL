import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </AuthProvider>
  );
}

function App() {
  const location = useLocation();

  const hideFooterRoutes = useMemo(
    () => [
      "/kuis-apa-itu-polusi-air",
      "/kuis-penyebab-dan-dampak-polusi-air",
      "/kuis-solusi-menjaga-kualitas-air",
      "/kuis-pengenalan-dan-dampak-polusi-udara",
      "/kuis-dampak-polusi-udara-terhadap-kesehatan",
      "/kuis-solusi-dan-upaya-penanggulangan",
      "/kuis-polusi-tanah-dan-penyebabnya",
      "/kuis-dampak-polusi-tanah-terhadap-kesehatan",
      "/kuis-solusi-mengatasi-polusi-tanah",
    ],
    []
  );

  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default AppWrapper;
