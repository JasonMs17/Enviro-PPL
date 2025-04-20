import "./SidebarPencemaranUdara.css";
import { Link, useLocation } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle,faCircleChevronRight,faCircleChevronLeft,faChevronDown,faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function SidebarPencemaranUdara({ done, isOpen, toggleSidebar }) {
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
      title: "Pengenalan Polusi Udara & Dampaknya terhadap Lingkungan",
      items: [
        { text: "Apa Itu Polusi Udara dan Sumbernya?", link: "/apa-itu-polusi-udara-dan-sumbernya" },
        { text: "Jenis Polutan di Udara", link: "/jenis-polutan-di-udara" },
        { text: "Dampak Polusi terhadap Lingkungan", link: "/dampak-polusi-terhadap-lingkungan" },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Udara terhadap Kesehatan",
      items: [
        { text: "Bagaimana Polusi Udara Mempengaruhi Tubuh Kita", link: "/bagaimana-polusi-udara-mempengaruhi-tubuh-kita" },
        { text: "Pencegahan & Penanganan Risiko Kesehatan Akibat Polusi", link: "/pencegahan-dan-penganganan-risiko-kesehatan-akibat-polusi" },
        { text: "Siapa yang Paling Terdampak?", link: "/pencemaran-udara-siapa-yang-paling-Terdampak" },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi dan Upaya Penanggulangan",
      items: [
        { text: "Inovasi di Kota-Kota Besar untuk Mengatasi Polusi Udara", link: "/" },
        { text: "Peran Pemerintah dan Regulasi", link: "/" },
        { text: "Aksi Individu untuk Udara Lebih Bersih", link: "/"},
      ],
    },
  ];

  return (
    
    <div className={`SidebarCourse ${isOpen ? "open" : "closed"}`}>
      <div className="progress-bar">

      </div>

      <h1 className="judul-bab">
        {isOpen && "💨 POLUSI UDARA"}
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
