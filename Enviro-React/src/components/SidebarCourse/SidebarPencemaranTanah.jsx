import "./SidebarPencemaranTanah.css";
import { Link, useLocation } from "react-router-dom";
import { Circle, CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function SidebarPencemaranTanah({ isOpen, toggleSidebar }) {
  const location = useLocation();
  const [dropdownStates, setDropdownStates] = useState({
    pertama: true,
    kedua: true,
    ketiga: true,
  });
  const [completedMaterials, setCompletedMaterials] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/api/completed-materials", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setCompletedMaterials(data))
      .catch((err) => console.error("Gagal fetch:", err));

    fetch("http://localhost:8000/api/overall-progress", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setProgress(data.progress))
      .catch((err) => console.error("Gagal ambil progress:", err));
  }, []);

  const toggleDropDown = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const subbabs = [
    {
      key: "pertama",
      title: "Pengenalan Polusi Tanah",
      items: [
        { id: 19, text: "Apa Itu Polusi Tanah & Penyebabnya", link: "/apa-itu-polusi-tanah-dan-penyebabnya" },
        { id: 20, text: "Dampak Polusi Tanah terhadap Lingkungan", link: "/dampak-polusi-tanah-terhadap-lingkungan" },
        { id: 21, text: "Jenis-Jenis Limbah Penyebab Polusi Tanah", link: "/jenis-jenis-limbah-penyebab-polusi-tanah" },
        { id: 34, text: "Quiz: Polusi Tanah & Penyebabnya", link: "/kuis-polusi-tanah-dan-penyebabnya" },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Tanah terhadap Kesehatan",
      items: [
        { id: 22, text: "Zat Berbahaya yang Terkandung dalam Tanah Tercemar", link: "/zat-berbahaya-yang-terkandung-dalam-tanah-tercemar" },
        { id: 23, text: "Risiko Kesehatan Akibat Polusi Tanah", link: "/risiko-kesehatan-akibat-polusi-tanah" },
        { id: 24, text: "Kontaminasi pada Tanaman & Dampaknya ke Manusia", link: "/kontaminasi-pada-tanaman-dan-dampaknya-ke-manusia" },
        { id: 35, text: "Quiz: Dampak Polusi Tanah terhadap Kesehatan", link: "/kuis-dampak-polusi-tanah-terhadap-kesehatan" },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Mengatasi Polusi Tanah",
      items: [
        { id: 25, text: "Pengelolaan Sampah & Limbah Rumah Tangga", link: "/pengelolaan-sampah-dan-limbah-rumah-tangga" },
        { id: 26, text: "Teknologi Pengendalian & Pemulihan Tanah", link: "/teknologi-pengendalian-dan-pemulihan-tanah" },
        { id: 27, text: "Peran Masyarakat & Edukasi Lingkungan", link: "/peran-masyarakat-dan-edukasi-lingkungan" },
        { id: 36, text: "Quiz: Solusi Mengatasi Polusi Tanah", link: "/kuis-solusi-mengatasi-polusi-tanah" },
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
        {isOpen && "🌱 POLUSI TANAH"}
        <FontAwesomeIcon
          icon={isOpen ? faCircleChevronLeft : faCircleChevronRight}
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          onClick={toggleSidebar}
        />
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
                  {subbab.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className={`link-item ${location.pathname === item.link ? "active" : ""}`}
                      >
                        {completedMaterials.includes(item.id) ? (
                          <CircleCheck
                            className="sudah-dipelajari"
                            size={20}
                            style={{
                              color: location.pathname === item.link ? "#1DBC60" : "white",
                            }}
                          />
                        ) : (
                          <Circle
                            className="belum-dipelajari"
                            size={20}
                            style={{
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
