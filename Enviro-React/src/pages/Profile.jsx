import { useEffect, useState } from "react";
import axios from 'axios';
import { http } from "../utils/fetch";
import userIMG from "../assets/person.svg";
import { Link, useLocation } from "react-router-dom";
import UserCourse from "./ProfileLayout/userCourseLayout/userCourse";
import UserChallenge from "./ProfileLayout/userChallengeLayout/userChallenge";
import "./Profile.css";

export default function Profile() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("course");
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  useEffect(() => {
    axios.get("/api/user", { withCredentials: true })
      .then(response => {
        setUser(response.data);
        setNewName(response.data.name);
        setPreviewPhoto(response.data.profile_photo);
      })
      .catch(error => {
        console.error("Gagal ambil data user:", error);
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPhoto(file);
      setPreviewPhoto(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = async () => {
    const formData = new FormData();
    formData.append("name", newName);
    if (newPhoto) {
      formData.append("profile_photo", newPhoto);
    }
  
    try {
      const response = await http("/api/profile", {
        method: "POST",
        body: formData,
      });
  
      const contentType = response.headers.get("content-type");
  
      if (!response.ok) {
        if (contentType && contentType.includes("application/json")) {
          const errData = await response.json();
          console.error("Update gagal:", errData);
        } else {
          const text = await response.text();
          console.error("Update gagal. Response bukan JSON:", text);
        }
        return;
      }
  
      const resData = await response.json();
      console.log("Update sukses:", resData);
      window.location.reload();
      setShowModal(false);
  
      setUser((prev) => ({
        ...prev,
        name: resData.name,
        profile_photo: resData.profile_photo,
      }));
      setPreviewPhoto(resData.profile_photo);
      setNewPhoto(null);
    } catch (error) {
      console.error("Error saat update:", error);
    }
  };
  
  

  return (
    <div className="content-wrapper">
      {user ? (
        <>
          <div className="User-Profile">
            <div className="User-Photo-Wrapper">
              <div className="User-Photo">
                <img src={user.profile_photo || userIMG} alt="User" />
              </div>
              <button className="update-profile-button" onClick={() => setShowModal(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DBC60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </button>
            </div>

            <div className="User-Information">
              <div className="User-Info-Header">
                <div className="User-Text">
                  <h2 className="profile-headline-name">{user.name}</h2>
                  <p className="profile-email">{user.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Header-Content">
            <nav className="navbar-Control">
              <ul className="profile-navbar-control">
                <li className={location.pathname.includes("/profile/course") ? "navbar-course-button active-tab" : "navbar-course-button"}>
                  <Link to="/profile/course">Course</Link>
                </li>
                <li className={location.pathname.includes("/profile/challenge") ? "navbar-challenge-button active-tab" : "navbar-challenge-button"}>
                  <Link to="/profile/challenge">Challenge</Link>
                </li>
              </ul>
            </nav>
          </div>

          {location.pathname.includes("/profile/challenge") ? (
            <UserChallenge />
          ) : (
            <UserCourse />
          )}

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <div className="modal-section">
                  <label>Foto Profil:</label>
                  <div className="photo-upload-wrapper">
                    <div className="photo-preview">
                      <img src={previewPhoto || userIMG} alt="Preview" />
                    </div>
                    <button type="button" className="photo-upload-button" onClick={() => document.getElementById('fileInput').click()}>
                      Pilih Foto
                    </button>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                <div className="modal-section">
                  <label>Nama:</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Nama baru"
                  />
                </div>

                <div className="modal-buttons">
                  <button className="save-button" onClick={handleSaveChanges}>Simpan Perubahan</button>
                  <button className="cancel-button" onClick={() => setShowModal(false)}>Batal</button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}