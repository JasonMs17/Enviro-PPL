import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import userIMG from "../assets/person.svg";
import logoEnviro from "../assets/logoEnviro.png";
import "./Navbar.css";
import DropDownPicture from "./DropdownNavbar/DropDownPicture";
import DropDownCourse from "./DropdownNavbar/DropdownCourse";
import VerifyEmailModal from "./VerifyEmailModal";
// import { useLocation } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const [openCourse, setOpenCourse] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const location = useLocation();
  // const isInCoursePage =
  // location.pathname.includes("/pencemaran-air/") ||
  // location.pathname.includes("/pencemaran-tanah/") ||
  // location.pathname.includes("/pencemaran-udara/");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsMobileMenuOpen(false);
        setOpenProfile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Set initial state for mobile
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
      setOpenProfile(false);
    }
    return () => window.removeEventListener("resize", handleResize);
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

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  const imageClick = () => {
    if (isMobile) {
      setOpenProfile(true);
      setIsMobileMenuOpen(false);
    } else {
      navigate("/profile/course");
    }
  };

  const handleCloseVerifyModal = () => {
    setShowVerifyModal(false);
  };

  const handleVerifyEmail = () => {
    navigate("/send-email");
    setShowVerifyModal(false);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="navbar">
        <button className="hamburger" onClick={handleMobileMenuToggle}>
          ☰
        </button>

        <div className="enviro-logo">
          <Link to="/" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
            <img src={logoEnviro} alt="Website Logo" />
          </Link>
        </div>
        {/* Main navigation */}
        <nav className={`user-control ${isMobileMenuOpen ? "show" : ""}`}>
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
            {user && !isMobile && (
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
                if (!user) {
                  navigate("/login");
                } else if (!user.email_verified_at) {
                  setShowVerifyModal(true);
                } else {
                  navigate("/challenge");
                  setTimeout(() => scrollToSection("challenge-section"), 100);
                }
                if (isMobile) {
                  setIsMobileMenuOpen(false);
                }
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
        </nav>
        <div className="login-signup">
          {!user ? (
            <>
              <Link
                className="login-button"
                to="/login"
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                className="signup"
                to="/register"
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
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
      {showVerifyModal && (
        <VerifyEmailModal
          onClose={handleCloseVerifyModal}
          onVerify={handleVerifyEmail}
        />
      )}
    </>
  );
};

export default Navbar;
