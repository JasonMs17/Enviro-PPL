import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; 

import logoEnviro from "../assets/logoEnviro.png";
import "./Navbar.css";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "/api/logout",
        {},
        { withCredentials: true }
      );

      console.log(response);

      if (response.status === 200) {
        setUser(null);
        document.cookie =
          "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        navigate("/login");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="navbar">
      <div className="enviro-logo">
        <Link to="/">
          <img src={logoEnviro} alt="Website Logo" />
        </Link>
      </div>

      <nav>
        <a href="">Learn With Us</a>
        <a href="">Challenge</a>
        <a href="">About Us</a>
      </nav>

      <div className="login-signup">
        {user ? (
          <div className="user-profile">
            <img
              src="path-to-profile-image.jpg"
              alt="Profile"
              className="profile-image"
            />
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        ) : (
          <>
            <a href="/login" className="login">
              Masuk
            </a>
            <a href="/register" className="signup">
              Sign Up
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
