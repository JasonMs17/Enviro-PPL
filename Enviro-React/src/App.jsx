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

  const hideFooter = useMemo(() => {
    const hiddenPrefixes = [
      "/pencemaran-air",
      "/pencemaran-udara",
      "/pencemaran-tanah",
      "/kuis"
    ];
    return hiddenPrefixes.some((prefix) =>
      location.pathname.startsWith(prefix)
    );
  }, [location.pathname]);

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
