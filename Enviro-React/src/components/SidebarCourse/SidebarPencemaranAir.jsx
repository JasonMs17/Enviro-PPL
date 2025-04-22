import "./SidebarPencemaranAir.css";
import { Link, useLocation } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle,faCircleChevronRight,faCircleChevronLeft,faChevronDown,faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SidebarPencemaranAir({ done, isOpen, toggleSidebar, progress, isQuizOngoing }) {
  const navigate = useNavigate();

  // dropdown untuk tiap subbab
  const location = useLocation();

  const [dropdownStates, setDropdownStates] = useState({
    pertama: true,
    kedua: true,
    ketiga: true,
  });

  const toggleDropDown = (subbabKey) => {
    setDropdownStates((prev) => ({
      ...prev,
      [subbabKey]: !prev[subbabKey],
    }));
  };

  const subbabs = [
    {
      key: "pertama",
      title: "Pengenalan Polusi Air & Dampak Umum",
      items: [
        { text: "Apa Itu Polusi Air?", link: "/apa-itu-polusi-air-pencemaran-air" },
        { text: "Penyebab Polusi Air", link: "/penyebab-polusi-air" },
        { text: "Dampak Umum Polusi Air", link: "/dampak-umum-polusi-air" },
        { text: "Quiz: Apa Itu Polusi Air?", link: "/kuis-apa-itu-polusi-air" },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Air terhadap Kesehatan",
      items: [
        { text: "Air Tercemar dan Penyakit", link: "/air-tercemar-dan-penyakit" },
        { text: "Siapa yang Paling Terdampak?", link: "/siapa-yang-paling-Terdampak" },
        { text: "Menentukan Air Aman Dikonsumsi", link: "/menentukan-air-aman-dikonsumsi" },
        { text: "Quiz: Penyebab dan Dampak Polusi Air", link: "/kuis-penyebab-dan-dampak-polusi-air" },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Menjaga Kualitas Air",
      items: [
        { text: "Pengolahan Limbah Air", link: "/pengolahan-limbah-air" },
        { text: "Aksi Individu untuk Menjaga Air", link: "/aksi-individu-untuk-menjaga-air" },
        { text: "Pengelolaan Air Berkelanjutan", link: "/pengelolaan-air-berkelanjutan"},
        { text: "Quiz: Solusi Menjaga Kualitas Air", link: "/kuis-solusi-menjaga-kualitas-air" },
      ],
    },
  ];

  return (
    
    <div className={`SidebarCourse ${isOpen ? "open" : "closed"}`}>
        {isOpen ? (
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">{progress}% selesai</span>
          </div>
        ) : (
          <div className="progress-bar-mini">
            <div className="progress-bar-mini-fill" style={{ height: `${progress}%` }}></div>
          </div>
        )}
      
      <h1 className="judul-bab">
        {isOpen && "💦POLUSI AIR"}
        {isOpen ? (
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        )}
      </h1>

      {isOpen && (
        <>
          {subbabs.map((subbab) => (
            <div className={`subbab ${subbab.key}`} key={subbab.key}>
              <div className="dropdown-header" onClick={() => toggleDropDown(subbab.key)}>
                <span className="dropdown-title">{subbab.title}</span>
                <FontAwesomeIcon
                  icon={dropdownStates[subbab.key] ? faChevronUp : faChevronDown}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                />
              </div>
              {dropdownStates[subbab.key] && (
                <ul className="course-list">
                  {subbab.items.map((item, index) => {
                    const isQuiz = item.link.includes("kuis");
                    const isActive = location.pathname === item.link;

                    return (
                      <li key={index}>
                        <Link
                          to={item.link}
                          onClick={(e) => {
                            if (!isQuiz && isQuizOngoing) {
                              e.preventDefault();
                              alert("Tidak boleh menyontek!");
                            } else if (!isActive) {
                              // biar tidak reload kalau klik yang sudah aktif
                              e.preventDefault();
                              navigate(item.link);
                            }
                          }}
                          style={{
                            color: isActive ? "#1DBC60" : "white",
                            fontWeight: isActive ? "bold" : "normal",
                            cursor: (!isQuiz && isQuizOngoing) ? "not-allowed" : "pointer",
                          }}
                        >
                          {done ? (
                            <CircleCheck
                              className="sudah-dipelajari"
                              size={20}
                              style={{
                                color: isActive ? "#1DBC60" : "white",
                              }}
                            />
                          ) : (
                            <FontAwesomeIcon
                              className="belum-dipelajari"
                              icon={faCircle}
                              style={{
                                fontSize: "20px",
                                color: isActive ? "#1DBC60" : "white",
                              }}
                            />
                          )}
                          {item.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
