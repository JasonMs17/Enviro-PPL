import React, { useContext, useState, useRef } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import userIMG from "../assets/person.svg"
// import axios from "axios";

import logoEnviro from "../assets/logoEnviro.png";
import "./Navbar.css";
import DropDownPicture from "./DropdownNavbar/DropDownPicture";
import DropDownCourse from "./DropdownNavbar/DropdownCourse";


const Navbar = () => {
  const [openCourse, setOpenCourse] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const courseTimeoutRef = useRef(null);
  const profileTimeoutRef = useRef(null);

  const handleCourseEnter = () => {
    clearTimeout(courseTimeoutRef.current);
    setOpenCourse(true);
  };
  const handleCourseLeave = () => {
    courseTimeoutRef.current = setTimeout(() => {
      setOpenCourse(false);
    }, 200);
  };

  // Fungsi hover untuk Profile
  const handleProfileEnter = () => {
    clearTimeout(profileTimeoutRef.current);
    setOpenProfile(true);
  };
  const handleProfileLeave = () => {
    profileTimeoutRef.current = setTimeout(() => {
      setOpenProfile(false);
    }, 200);
  };


  

  const imageClick = () => {
    navigate("/profile");
  };

  return (
    <header className="navbar">
      
      <div className="enviro-logo">
        <Link to="/">
          <img src={logoEnviro} alt="Website Logo" />
        </Link>
      </div>

      <nav className="user-control">
        <div className="user-course"
        onMouseEnter={handleCourseEnter}
        onMouseLeave={handleCourseLeave}>
        <a to="/" className="leaa">Learn With Us</a>
        <DropDownCourse 
        open = {openCourse}
        onMouseEnter={handleCourseEnter}
        onMouseLeave={handleCourseLeave}
        />

        </div>
        <div className="user-challenge">
          <a to= '/'>Challenge</a>
        </div>
        <a href="">About Us</a>
      </nav>

      <div className="login-signup">
        {user ? (
          <div className="user-profile"
          onMouseEnter={handleProfileEnter}
          onMouseLeave={handleProfileLeave}>
           <div className="User-Photo-Navbar" >
              <img
                  src={userIMG}
                  onClick={() => imageClick()}
                  className="profile-image"
                />
           </div>
           <DropDownPicture open={openProfile} />  
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
