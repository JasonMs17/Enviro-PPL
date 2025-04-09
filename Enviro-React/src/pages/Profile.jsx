import { useEffect, useState } from "react";
import axios from 'axios';
import "./Profile.css";

export default function Profile () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/user", { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("Gagal ambil data user:", error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      {user ? (
        <>
        <div className="User-Profile">
          <div className="User-Photo-Wrapper">
              <div className="User-Photo">
                  <img src={"path-to-db"} alt="User" />
              </div>
                <a href="#" className="user-profile-picture-edit-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect
                        x="0.75"
                        y="0.75"
                        width="30.5"
                        height="30.5"
                        rx="15.25"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.8047 10.35C19.5936 10.14 19.3141 10.02 19.0193 10.02C18.7246 10.02 18.4451 10.14 18.234 10.35L10.5 18.09V21.5H13.91L21.65 13.77C21.8601 13.5587 21.9803 13.2788 21.9803 12.9836C21.9803 12.6884 21.8601 12.4085 21.65 12.1973L19.8047 10.35ZM13.1474 20.25H11.75V18.8526L18.619 11.9836L20.0164 13.381L13.1474 20.25Z"
                        fill="#3F3F46"
                      />
                      <rect
                        x="0.75"
                        y="0.75"
                        width="30.5"
                        height="30.5"
                        rx="15.25"
                        stroke="#1DBC60"
                        strokeWidth="1"
                      />
                    </svg>
                </a>
          </div>
          <div className="User-Information">
            <h2 className="profile-headline-name">{user.name}</h2>
            <p>Email : {user.email}</p>
            <p>Tanggal Lahir : {user.birth_date}</p>
          </div>
        </div>
        <div className="Header-Content">
            <nav className="navbar-Control">
              <ul className="profile-navbar-control">
                <li className="navbar-course-button">
                  <a href="#"> Course</a>
                </li>
                <li className="navbar-challenge-button">
                  <a href="#">Challenge</a>
                </li>
              </ul>
            </nav>
        </div>

        <div className="user-progress">
          <div className="container">
            <div className="profile-tab-content">
              <div className="dropdown-and-content">
                <div className="dropdown">
                  <p className="dropdown-label">Tampilkan</p>
                  <div className="dropdown-shown">
                    <button className="button-dropdown"> Sedang Dipelajari</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
