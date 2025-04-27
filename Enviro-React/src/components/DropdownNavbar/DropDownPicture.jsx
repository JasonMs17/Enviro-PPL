import "./DropDownPicture.css";
import { Link } from "react-router-dom";
import http from "../../utils/fetch";
import React, {useContext} from "react";
import { AuthContext } from "../../AuthContext";

export default function DropDownPicture({ open, onMouseEnter, onMouseLeave }) {
    const {  setUser } = useContext(AuthContext);
  
  const handleLogout = async (event) => {
    event.preventDefault();

    try {
      const response = await http("/api/logout", {
        method: "POST",
      });

      console.log(response);

      if (response.status === 200) {
        setUser(null);
        localStorage.removeItem("user");
        window.location.href = "/login";
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  
  return (
    
    <div
      className={`DropDownPicture ${open ? "open" : ""}`}
      onMouseEnter={onMouseEnter}  // Event hover untuk memasuki dropdown
      onMouseLeave={onMouseLeave}  // Event hover untuk keluar dari dropdown
    >
      <ul className="gap-4">
        <li><Link to="/profile/course">Profil Saya</Link></li>
        <li><Link to="/settings">Pengaturan</Link></li>
        <li><button onClick={handleLogout} className="logout">
              Logout
            </button></li>
      </ul>
    </div>
  );
}