import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar /> 
          <AppRoutes />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
