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

const SkeletonItem = () => <div className="skeleton-item"></div>;

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

  useEffect(() => {
    const states = {};
    subbabs.forEach((s) => (states[s.key] = true));
    setDropdownStates(states);
  }, [subbabs]);

  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      try {
        const [resDone, resProg] = await Promise.all([
          fetch("/api/completed-materials", { credentials: "include" }),
          fetch("/api/overall-progress", { credentials: "include" }),
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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ material_id: id, progress: 100 }),
      });
      if (response.ok) {
        trackedRef.current.add(id);
        setCompletedMaterials((prev) => [...prev, id]);
        const progRes = await fetch("/api/overall-progress", {
          credentials: "include",
        });
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

  return (
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
            {loading ? "Loading..." : `${progress}% selesai`}
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
        {isOpen && `📘 ${title}`}
        <FontAwesomeIcon
          icon={isOpen ? faCircleChevronLeft : faCircleChevronRight}
          style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          onClick={toggleSidebar}
        />
      </h1>

      {isOpen &&
        (loading ? (
          subbabs.map((subbab) => <SkeletonDropdown key={subbab.key} />)
        ) : (
          subbabs.map((subbab) => (
            <div className={`subbab ${subbab.key}`} key={subbab.key}>
              <div
                className="dropdown-header"
                onClick={() => toggleDropDown(subbab.key)}
              >
                <span className="dropdown-title">{subbab.title}</span>
                <FontAwesomeIcon
                  icon={dropdownStates[subbab.key] ? faChevronUp : faChevronDown}
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
                          onClick={async (e) => {
                            if (!isQuiz && isQuizOngoing) {
                              e.preventDefault();
                              alert("Tidak boleh menyontek!");
                            } else if (!isActive) {
                              e.preventDefault();
                              if (!isQuiz) await trackProgress(item.id);
                              navigate(targetLink, {
                                state: isQuiz
                                  ? {
                                      title: item.text,
                                      pollutionTypeId: item.pollutionTypeId,
                                      subbab: item.subbab,
                                    }
                                  : undefined,
                              });
                            }
                          }}
                          className={`link-item ${isActive ? "active" : ""}`}
                          style={{
                            color: isActive ? "#1DBC60" : "white",
                            fontWeight: isActive ? "bold" : "normal",
                            cursor:
                              !isQuiz && isQuizOngoing
                                ? "not-allowed"
                                : "pointer",
                          }}
                        >
                          {isDone ? (
                            <CircleCheck
                              size={20}
                              style={{ color: isActive ? "#1DBC60" : "white" }}
                            />
                          ) : (
                            <Circle
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
          ))
        ))}
    </div>
  );
}
