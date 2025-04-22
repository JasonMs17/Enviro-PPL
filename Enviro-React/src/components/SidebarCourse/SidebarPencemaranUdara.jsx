import "./SidebarPencemaranUdara.css";
import { Link, useLocation } from "react-router-dom";
import { CircleCheck, Circle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function SidebarPencemaranUdara({ done, isOpen, toggleSidebar, progress, isQuizOngoing }) {
  const navigate = useNavigate();

  // dropdown untuk tiap subbab
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
      title: "Pengenalan Polusi Udara & Dampaknya terhadap Lingkungan",
      items: [
        { id: 10, text: "Apa Itu Polusi Udara dan Sumbernya?", link: "/apa-itu-polusi-udara-dan-sumbernya" },
        { id: 11, text: "Jenis Polutan di Udara", link: "/jenis-polutan-di-udara" },
        { id: 12, text: "Dampak Polusi terhadap Lingkungan", link: "/dampak-polusi-terhadap-lingkungan" },
        { id: 31, text: "Quiz: Pengenalan dan Dampak Polusi Udara", link: "/kuis-pengenalan-dan-dampak-polusi-udara" },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Udara terhadap Kesehatan",
      items: [
        { id: 13, text: "Bagaimana Polusi Udara Mempengaruhi Tubuh Kita", link: "/bagaimana-polusi-udara-mempengaruhi-tubuh-kita" },
        { id: 14, text: "Pencegahan & Penanganan Risiko Kesehatan Akibat Polusi", link: "/pencegahan-dan-penganganan-risiko-kesehatan-akibat-polusi" },
        { id: 15, text: "Siapa yang Paling Terdampak?", link: "/pencemaran-udara-siapa-yang-paling-Terdampak" },
        { id: 32, text: "Quiz: Dampak Polusi Udara terhadap Kesehatan", link: "/kuis-dampak-polusi-udara-terhadap-kesehatan" },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi dan Upaya Penanggulangan",
      items: [
        { id: 16, text: "Inovasi di Kota-Kota Besar untuk Mengatasi Polusi Udara", link: "/inovasi-di-kota-kota-besar-untuk-mengatasi-polusi-udara" },
        { id: 17, text: "Peran Pemerintah dan Regulasi", link: "/peran-pemerintah-dan-regulasi" },
        { id: 18, text: "Aksi Individu untuk Udara Lebih Bersih", link: "/aksi-individu-untuk-udara-lebih-bersih" },
        { id: 33, text: "Quiz: Solusi dan Upaya Penanggulangan", link: "/kuis-solusi-dan-upaya-penanggulangan" },
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
        {isOpen && "💨 POLUSI UDARA"}
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
