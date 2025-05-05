import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Materi.css";
import SidebarPencemaranUdara from "../SidebarCourse/SidebarPencemaranUdara";
import QuizComponent from "@/components/Kuis/Kuis";
import { http } from "../../utils/fetch";
import Chatbot from "@/components/Chatbot/Chatbot";

export default function CourseMaterialUdara() {
  const params = useParams();
  const location = useLocation();

  const [material, setMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
      setError("Pilih materi dari sidebar.");
      setIsLoading(false);
    }
  }, [location.pathname, materialId, isQuizView]);

  return (
    <div className="materi split-view">
      <SidebarPencemaranUdara
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
                <p>{error}</p>
              ))}
          </div>
        </div>
      </div>
      {!isQuizView && material && (
        <Chatbot
          material={material}
          isOpen={isChatOpen}
          setIsOpen={setIsChatOpen}
        />
      )}
    </div>
  );
}
