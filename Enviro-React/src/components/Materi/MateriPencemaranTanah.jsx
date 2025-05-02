import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Materi.css";
import SidebarPencemaranTanah from "../SidebarCourse/SidebarPencemaranTanah";
import QuizComponent from "@/components/Kuis/Kuis";
import { http } from "../../utils/fetch";

export default function CourseMaterialTanah() {
  const params = useParams();
  const location = useLocation();

  const [material, setMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const isQuizView = !!(params.pollutionTypeId && params.subbab);
  const materialId = params.material_id;

  useEffect(() => {
    setIsQuizActive(isQuizView);
  }, [params.pollutionTypeId, params.subbab]);

  useEffect(() => {
    setMaterial(null);
    setError(null);
    setIsLoading(true);

    if (!isQuizView && materialId) {
      const fetchMaterial = async () => {
        try {
          const res = await http(`/api/materials/${materialId}`, {
            method: "GET",
            credentials: "include",
          });
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          const data = await res.json();
          setMaterial(data);
        } catch (err) {
          console.error("Gagal fetch materi:", err);
          setError("Gagal memuat materi.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchMaterial();
    } else if (isQuizView) {
      setIsLoading(false);
    } else {
      setError("Halaman tidak ditemukan.");
      setIsLoading(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={`materi ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      <SidebarPencemaranTanah
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isQuizOngoing={isQuizActive}
      />
      <div className="course-container">
        <div className="course-article">
          <div className="course-content">
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!isLoading &&
              !error &&
              (isQuizView ? (
                <QuizComponent setIsQuizActive={setIsQuizActive} />
              ) : material ? (
                <div dangerouslySetInnerHTML={{ __html: material.detail }} />
              ) : (
                <p>Pilih materi dari sidebar.</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
