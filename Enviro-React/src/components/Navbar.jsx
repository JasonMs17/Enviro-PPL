import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import userIMG from "../assets/person.svg"
// import axios from "axios";

import logoEnviro from "../assets/logoEnviro.png";
import "./Navbar.css";
import DropDownPicture from "./DropdownNavbar/DropDownPicture";


const Navbar = () => {
  const [open , setOpen] = useState (false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect (() => {
    const handleclick = (event) =>{
      if(dropdownRef.current && !dropdownRef.current.contains (event.target)){
          setOpen(false);
      }
    };
      document.addEventListener("click", handleclick)

      return () => {
          document.removeEventListener("click", handleclick)
      };
  }, []);


  

  const imageClick = () => {
    navigate("/profile");
  };

  const handleMouseEnter = () => {
    setOpen(true); // Menampilkan dropdown saat mouse masuk
  };
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // Menyembunyikan dropdown saat mouse keluar
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
          <div className="user-profile"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}>
           <div className="User-Photo-Navbar" >
           <img
              src={userIMG}
              onClick={() => imageClick()}
              className="profile-image"
            />
           </div>
           <DropDownPicture open={open} />
            
          </div>
        ) : (
          <>
            <Link className="login-button" to="/login">Masuk</Link>
            <Link className="signup" to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
