import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Circle, CircleCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { http } from "@/utils/fetch";
import "./Sidebar.css";

const SkeletonDropdown = () => (
  <div className="skeleton-dropdown">
    <div className="skeleton-dropdown-header"></div>
    <ul className="skeleton-course-list">
      <li className="skeleton-item"></li>
      <li className="skeleton-item"></li>
      <li className="skeleton-item"></li>
    </ul>
  </div>
);

export default function SidebarCourseModule({
  isOpen,
  toggleSidebar,
  isQuizOngoing = false,
  title = "TOPIK",
  basePath = "/modul",
  subbabs = [],
  pollutionTypeId = 1,
}) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [dropdownStates, setDropdownStates] = useState({});
  const [completedMaterials, setCompletedMaterials] = useState([]);
  const [progressByType, setProgressByType] = useState({});
  const [loading, setLoading] = useState(true);
  const trackedRef = useRef(new Set());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (Object.keys(dropdownStates).length === 0) {
      const states = {};
      subbabs.forEach((s) => (states[s.key] = true));
      setDropdownStates(states);
    }
  }, [subbabs]);

  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      try {
        const [resDone, resProg] = await Promise.all([
          http("/api/completed-materials"),
          http("/api/overall-progress"),
        ]);
        const doneData = await resDone.json();
        const progData = await resProg.json();
        setCompletedMaterials(doneData);
        setProgressByType(progData.progress_by_type || {});
        doneData.forEach((id) => trackedRef.current.add(id));
      } catch (err) {
        console.error("Error loading progress:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProgress();
  }, []);

  useEffect(() => {
    if (params.material_id) {
      const materialId = parseInt(params.material_id);
      trackProgress(materialId);
    }
  }, [location.pathname]);

  const trackProgress = async (id) => {
    if (trackedRef.current.has(id)) return;
    try {
      const response = await http("/api/progress", {
        method: "POST",
        body: JSON.stringify({ material_id: id, progress: 100 }),
      });
      if (response.ok) {
        trackedRef.current.add(id);
        setCompletedMaterials((prev) => [...prev, id]);
        const progRes = await http("/api/overall-progress");
        const progData = await progRes.json();
        setProgressByType(progData.progress_by_type || {});
      } else {
        const errData = await response.json();
        console.error("Gagal simpan progress:", errData);
      }
    } catch (error) {
      console.error("Error saat simpan progress:", error);
    }
  };

  const toggleDropDown = (key) => {
    setDropdownStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const progress = progressByType[pollutionTypeId]?.progress || 0;

  const isMaterialLocked = (item, subbab) => {
    // Cari index subbab saat ini
    const currentSubbabIndex = subbabs.findIndex((s) => s.key === subbab.key);

    // Jika ini adalah subbab pertama
    if (currentSubbabIndex === 0) {
      // Jika ini adalah materi pertama dalam subbab pertama, selalu unlocked
      const isFirstInFirstSubbab = subbab.items[0].id === item.id;
      if (isFirstInFirstSubbab) return false;

      // Cek materi sebelumnya dalam subbab yang sama
      const currentIndex = subbab.items.findIndex((i) => i.id === item.id);
      if (currentIndex <= 0) return false;

      const previousMaterial = subbab.items[currentIndex - 1];
      return !completedMaterials.includes(previousMaterial.id);
    }

    // Untuk subbab selain yang pertama
    // Cek apakah subbab sebelumnya sudah selesai (semua materi dalam subbab sebelumnya harus selesai)
    const previousSubbab = subbabs[currentSubbabIndex - 1];
    const isPreviousSubbabComplete = previousSubbab.items.every((material) =>
      completedMaterials.includes(material.id)
    );

    if (!isPreviousSubbabComplete) return true;

    // Jika subbab sebelumnya selesai, cek materi sebelumnya dalam subbab saat ini
    const currentIndex = subbab.items.findIndex((i) => i.id === item.id);
    if (currentIndex <= 0) return false;

    const previousMaterial = subbab.items[currentIndex - 1];
    return !completedMaterials.includes(previousMaterial.id);
  };

  return (
    <>
      {isMobile && !isOpen && (
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{
            position: "fixed",
            top: "90px",
            left: "-15px",
            fontSize: "30px",
            color: "#1DBC60",
            cursor: "pointer",
            zIndex: 2000,
          }}
          onClick={toggleSidebar}
        />
      )}
      <div className={`SidebarCourse ${isOpen ? "open" : "closed"}`}>
        {isOpen ? (
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{
                width: loading ? "0%" : `${progress}%`,
                backgroundColor: loading ? "#888" : "#1DBC60",
              }}
            />
            <span className="progress-text">
              {loading ? "" : `${progress}% selesai`}
            </span>
          </div>
        ) : (
          <div className="progress-bar-mini">
            <div
              className="progress-bar-mini-fill"
              style={{
                height: loading ? "0%" : `${progress}%`,
                backgroundColor: loading ? "#888" : "#1DBC60",
              }}
            />
          </div>
        )}

        <h1 className="judul-bab">
          {isMobile && isOpen && `📘 ${title}`}
          <FontAwesomeIcon
            icon={isOpen ? faCircleChevronLeft : faCircleChevronRight}
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
            onClick={toggleSidebar}
          />
        </h1>

        {isOpen &&
          (loading
            ? subbabs.map((subbab) => <SkeletonDropdown key={subbab.key} />)
            : subbabs.map((subbab) => (
                <div className={`subbab ${subbab.key}`} key={subbab.key}>
                  <div
                    className="dropdown-header"
                    onClick={() => toggleDropDown(subbab.key)}
                  >
                    <span className="dropdown-title">{subbab.title}</span>
                    <FontAwesomeIcon
                      icon={
                        dropdownStates[subbab.key] ? faChevronUp : faChevronDown
                      }
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                    />
                  </div>
                  {dropdownStates[subbab.key] && (
                    <ul className="course-list">
                      {subbab.items.map((item) => {
                        const isQuiz = item.isQuiz === true;
                        const targetLink = isQuiz
                          ? `${basePath}/kuis/${item.pollutionTypeId}/${item.subbab}`
                          : `${basePath}/${item.id}`;
                        const currentPath = location.pathname;
                        const isActive = isQuiz
                          ? currentPath === targetLink
                          : String(item.id) === params.material_id;

                        const isDone = completedMaterials.includes(item.id);
                        const isLocked = isMaterialLocked(item, subbab);

                        return (
                          <li key={item.id}>
                            <Link
                              to={targetLink}
                              state={
                                isQuiz
                                  ? {
                                      title: item.text,
                                      pollutionTypeId: item.pollutionTypeId,
                                      subbab: item.subbab,
                                    }
                                  : undefined
                              }
                              onClick={(e) => {
                                if (isLocked) {
                                  e.preventDefault();
                                  alert(
                                    "Selesaikan materi sebelumnya terlebih dahulu!"
                                  );
                                  return;
                                }
                                if (!isQuiz && isQuizOngoing) {
                                  e.preventDefault();
                                  alert("Tidak boleh menyontek!");
                                }
                              }}
                              className={`link-item ${
                                isActive ? "active" : ""
                              } ${isLocked ? "locked" : ""}`}
                              style={{
                                color: isActive
                                  ? "#1DBC60"
                                  : isLocked
                                  ? "#666"
                                  : "white",
                                fontWeight: isActive ? "bold" : "normal",
                                cursor:
                                  isLocked || (!isQuiz && isQuizOngoing)
                                    ? "not-allowed"
                                    : "pointer",
                                opacity: isLocked ? 0.6 : 1,
                              }}
                            >
                              {isDone ? (
                                <CircleCheck size={16} />
                              ) : (
                                <Circle size={16} />
                              )}
                              <span>{item.text}</span>
                              {isLocked && (
                                <span className="lock-icon">🔒</span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )))}
      </div>
    </>
  );
}
