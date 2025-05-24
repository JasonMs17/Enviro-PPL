import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DropdownCourse.css";

export default function DropDownCourse({ open, onMouseEnter, onMouseLeave }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpenMobile(false); // Reset saat kembali ke desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsOpenMobile((prev) => !prev);
    }
  };

  return (
    <div
      className={`DropDownCourse ${open || isOpenMobile ? "open" : ""}`}
      onMouseEnter={!isMobile ? onMouseEnter : undefined}
      onMouseLeave={!isMobile ? onMouseLeave : undefined}
    >

      <ul className="course-type">
        <li>
          <Link to="/pencemaran-tanah/19">Polusi Tanah</Link>
        </li>
        <li>
          <Link to="/pencemaran-air/1">Polusi Air</Link>
        </li>
        <li>
          <Link to="/pencemaran-udara/10">Polusi Udara</Link>
        </li>
      </ul>
    </div>
  );
}
