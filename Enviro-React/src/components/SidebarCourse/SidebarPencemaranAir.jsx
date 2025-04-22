import "./SidebarPencemaranAir.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Circle, CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function SidebarPencemaranAir({ done, isOpen, toggleSidebar, progress, isQuizOngoing }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownStates, setDropdownStates] = useState({
    pertama: true,
    kedua: true,
    ketiga: true,
  });

  const [completedMaterials, setCompletedMaterials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/completed-materials", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Gagal ambil data materi selesai");
        return res.json();
      })
      .then((data) => setCompletedMaterials(data))
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

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
        { text: "Apa Itu Polusi Air?", link: "/apa-itu-polusi-air-pencemaran-air", materialId: 1 },
        { text: "Penyebab Polusi Air", link: "/penyebab-polusi-air", materialId: 2 },
        { text: "Dampak Umum Polusi Air", link: "/dampak-umum-polusi-air", materialId: 3 },
        { text: "Quiz: Apa Itu Polusi Air?", link: "/kuis-apa-itu-polusi-air", materialId: 28 },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Air terhadap Kesehatan",
      items: [
        { text: "Air Tercemar dan Penyakit", link: "/air-tercemar-dan-penyakit", materialId: 4 },
        { text: "Siapa yang Paling Terdampak?", link: "/siapa-yang-paling-Terdampak", materialId: 5 },
        { text: "Menentukan Air Aman Dikonsumsi", link: "/menentukan-air-aman-dikonsumsi", materialId: 6 },
        { text: "Quiz: Penyebab dan Dampak Polusi Air", link: "/kuis-penyebab-dan-dampak-polusi-air", materialId: 29 },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Menjaga Kualitas Air",
      items: [
        { text: "Pengolahan Limbah Air", link: "/pengolahan-limbah-air", materialId: 7 },
        { text: "Aksi Individu untuk Menjaga Air", link: "/aksi-individu-untuk-menjaga-air", materialId: 8 },
        { text: "Pengelolaan Air Berkelanjutan", link: "/pengelolaan-air-berkelanjutan", materialId: 9 },
        { text: "Quiz: Solusi Menjaga Kualitas Air", link: "/kuis-solusi-menjaga-kualitas-air", materialId: 30 },
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
        <FontAwesomeIcon
          icon={isOpen ? faCircleChevronLeft : faCircleChevronRight}
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          onClick={toggleSidebar}
        />
      </h1>

      {isOpen &&
        subbabs.map((subbab) => (
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
                  const isDone = completedMaterials.includes(item.materialId);

                  return (
                    <li key={index}>
                      <Link
                        to={item.link}
                        onClick={(e) => {
                          if (!isQuiz && isQuizOngoing) {
                            e.preventDefault();
                            alert("Tidak boleh menyontek!");
                          } else if (!isActive) {
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
                        {isDone ? (
                          <CircleCheck
                            className="sudah-dipelajari"
                            size={20}
                            style={{ color: isActive ? "#1DBC60" : "white" }}
                          />
                        ) : (
                          <Circle
                            className="belum-dipelajari"
                            size={20}
                            style={{ color: isActive ? "#1DBC60" : "white" }}
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
    </div>
  );
}
