import "./SidebarPencemaranAir.css";
import { Link, useLocation } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle,faCircleChevronRight,faCircleChevronLeft,faChevronDown,faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function SidebarPencemaranAir({ done, isOpen, toggleSidebar }) {
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
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Air terhadap Kesehatan",
      items: [
        { text: "Air Tercemar dan Penyakit", link: "/air-tercemar-dan-penyakit" },
        { text: "Siapa yang Paling Terdampak?", link: "/siapa-yang-paling-Terdampak" },
        { text: "Menentukan Air Aman Dikonsumsi", link: "/menentukan-air-aman-dikonsumsi" },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Menjaga Kualitas Air",
      items: [
        { text: "Pengolahan Limbah Air", link: "/pengolahan-limbah-air" },
        { text: "Aksi Individu untuk Menjaga Air", link: "/aksi-individu-untuk-menjaga-air" },
        { text: "Pengelolaan Air Berkelanjutan", link: "/pengelolaan-air-berkelanjutan"},
      ],
    },
  ];

  return (
    
    <div className={`SidebarCourse ${isOpen ? "open" : "closed"}`}>
      <div className="progress-bar">

      </div>

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
