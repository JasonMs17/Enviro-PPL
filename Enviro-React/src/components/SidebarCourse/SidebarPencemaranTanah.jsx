import "./SidebarPencemaranTanah.css";
import { Link, useLocation } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle,faCircleChevronRight,faCircleChevronLeft,faChevronDown,faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function SidebarPencemaranTanah({ done, isOpen, toggleSidebar }) {
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
      title: "Pengenalan Polusi Tanah",
      items: [
        { text: "Apa Itu Polusi Tanah & Penyebabnya", link: "/apa-itu-polusi-tanah-dan-penyebabnya" },
        { text: "Dampak Polusi Tanah terhadap Lingkungan", link: "/dampak-polusi-tanah-terhadap-lingkungan" },
        { text: "Jenis-Jenis Limbah Penyebab Polusi Tanah", link: "/jenis-jenis-limbah-penyebab-polusi-tanah" },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Tanah terhadap Kesehatan",
      items: [
        { text: "Zat Berbahaya yang Terkandung dalam Tanah Tercemar", link: "/zat-berbahaya-yang-terkandung-dalam-tanah-tercemar" },
        { text: "Risiko Kesehatan Akibat Polusi Tanah", link: "/risiko-kesehatan-akibat-polusi-tanah" },
        { text: "Kontaminasi pada Tanaman & Dampaknya ke Manusia", link: "/kontaminasi-pada-tanaman-dan-dampaknya-ke-manusia" },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Mengatasi Polusi Tanah",
      items: [
        { text: "Pengelolaan Sampah & Limbah Rumah Tangga", link: "/pengelolaan-sampah-dan-limbah-rumah-tangga" },
        { text: "Teknologi Pengendalian & Pemulihan Tanah", link: "/teknologi-pengendalian-dan-pemulihan-tanah" },
        { text: "Peran Masyarakat & Edukasi Lingkungan", link: "/peran-masyarakat-dan-edukasi-lingkungan"},
      ],
    },
  ];

  return (
    
    <div className={`SidebarCourse ${isOpen ? "open" : "closed"}`}>
      <div className="progress-bar">

      </div>

      <h1 className="judul-bab">
        {isOpen && "🌱 POLUSI TANAH"}
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
                  {subbab.items.map((item, index) => (
                    <li key={index}>
                    <Link
                      to={item.link}
                      style={{
                        color: location.pathname === item.link ? "#1DBC60" : "white",
                        fontWeight: location.pathname === item.link ? "bold" : "normal",
                      }}
                    >
                      {done ? (
                        <CircleCheck
                          className="sudah-dipelajari"
                          size={20}
                          style={{
                            color: location.pathname === item.link ? "#1DBC60" : "white",
                          }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="belum-dipelajari"
                          icon={faCircle}
                          style={{
                            fontSize: "20px",
                            color: location.pathname === item.link ? "#1DBC60" : "white",
                          }}
                        />
                      )}
                      {item.text}
                    </Link>
                  </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
