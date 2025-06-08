import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { http } from "../../utils/fetch";
import VerifyEmailModal from "../VerifyEmailModal";
import "./DropdownCourse.css";

export default function DropDownCourse({ open, onMouseEnter, onMouseLeave }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpenMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpenMobile((prev) => !prev);
    }
  };

  const handleCloseVerifyModal = () => {
    setShowVerifyModal(false);
  };

  const handleVerifyEmail = () => {
    navigate("/send-email");
    setShowVerifyModal(false);
  };

  const handleChallengeClick = async (e, path) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const response = await http(`/api/user`, {
        method: "GET",
      });
      const userData = await response.json();

      if (!userData.email_verified_at) {
        setShowVerifyModal(true);
        return;
      }

      navigate(path);
    } catch (error) {
      console.error("Error checking email verification:", error);
      navigate(path);
    }
  };

  return (
    <>
      <div
        className={`DropDownCourse ${open || isOpenMobile ? "open" : ""}`}
        onMouseEnter={!isMobile ? onMouseEnter : undefined}
        onMouseLeave={!isMobile ? onMouseLeave : undefined}
      >
        <ul className="course-type">
          <li>
            <a
              href="#"
              onClick={(e) => {
                if (isMobile) {
                  handleClick(e);
                }
                handleChallengeClick(e, "/pencemaran-tanah/19");
              }}
            >
              Polusi Tanah
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                if (isMobile) {
                  handleClick(e);
                }
                handleChallengeClick(e, "/pencemaran-air/1");
              }}
            >
              Polusi Air
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                if (isMobile) {
                  handleClick(e);
                }
                handleChallengeClick(e, "/pencemaran-udara/10");
              }}
            >
              Polusi Udara
            </a>
          </li>
        </ul>
      </div>

      {showVerifyModal && (
        <VerifyEmailModal
          onClose={handleCloseVerifyModal}
          onVerify={handleVerifyEmail}
        />
      )}
    </>
  );
}
