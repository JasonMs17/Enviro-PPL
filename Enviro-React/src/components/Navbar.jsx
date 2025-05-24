import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import userIMG from "../assets/person.svg";
import logoEnviro from "../assets/logoEnviro.png";
import "./Navbar.css";
import DropDownPicture from "./DropdownNavbar/DropDownPicture";
import DropDownCourse from "./DropdownNavbar/DropdownCourse";

const Navbar = () => {
  const [openCourse, setOpenCourse] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/user", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data user");
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => console.error("Gagal ambil data user:", error));
  }, []);

  const courseTimeoutRef = useRef(null);
  const profileTimeoutRef = useRef(null);

  const handleCourseEnter = () => {
    if (!user) return;
    clearTimeout(courseTimeoutRef.current);
    setOpenCourse(true);
  };

  const handleCourseLeave = () => {
    courseTimeoutRef.current = setTimeout(() => setOpenCourse(false), 200);
  };

  const handleProfileEnter = () => {
    clearTimeout(profileTimeoutRef.current);
    setOpenProfile(true);
  };

  const handleProfileLeave = () => {
    profileTimeoutRef.current = setTimeout(() => setOpenProfile(false), 200);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const imageClick = () => navigate("/profile/course");

  return (
    <header className={`navbar ${isMobileMenuOpen ? "collapsed" : ""}`}>
       <button
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
     
      <div className="enviro-logo">
        <Link to="/">
          <img src={logoEnviro} alt="Website Logo" />
        </Link>
      </div>
      {/* Main navigation */}
      <nav className={`user-control ${isMobileMenuOpen ? "show" : "hide"}`}>
        <div
          className="user-course relative-wrapper"
          onMouseEnter={handleCourseEnter}
          onMouseLeave={handleCourseLeave}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(() => scrollToSection("explore-section"), 100);
            }}
          >
            Learn With Us
          </a>
          {user && (
            <DropDownCourse
              open={openCourse}
              onMouseEnter={handleCourseEnter}
              onMouseLeave={handleCourseLeave}
            />
          )}
        </div>

        <div className="user-challenge">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/challenge");
              setTimeout(() => scrollToSection("challenge-section"), 100);
            }}
          >
            Challenge
          </a>
        </div>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            setTimeout(() => scrollToSection("about-section"), 100);
          }}
        >
          About Us
        </a>

        {/* Mobile-only login/signup if not logged in */}

      </nav>
        <div className= "login-signup">
        {!user ? (
          <>
            <Link className="login-button" to="/login">
              Masuk
            </Link>
            <Link className="signup" to="/register">
              Sign Up
            </Link>
          </>
        ) : (
          <div
            className="user-profile"
            onMouseEnter={handleProfileEnter}
            onMouseLeave={handleProfileLeave}
          >
            <div className="User-Photo-Navbar">
              <img
                src={user.profile_photo || userIMG}
                alt="User"
                onClick={imageClick}
                className="profile-image"
              />
            </div>
                <DropDownPicture open={openProfile} />
            </div>
        )}
        </div>


      
    </header>
  );
};

export default Navbar;
