import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Materi.css";
import SidebarPencemaranAir from "../SidebarCourse/SidebarPencemaranAir";
import QuizComponent from "@/components/Kuis/Kuis";
import { http } from "../../utils/fetch";
import Chatbot from "@/components/Chatbot/Chatbot";

export default function CourseMaterialUdara() {
  const params = useParams();
  const location = useLocation();

  const [material, setMaterial] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Secara default sidebar terbuka
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // State untuk mengontrol chatbot

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const isQuizView = !!(params.pollutionTypeId && params.subbab);
  const materialId = params.material_id;

  useEffect(() => {
    if (params.pollutionTypeId && params.subbab) {
      setIsQuizActive(true);
    } else {
      setIsQuizActive(false);
    }
  }, [params.pollutionTypeId, params.subbab]);

  useEffect(() => {
    setMaterial(null);
    setError(null);
    setIsLoading(true);
    if (!isQuizView) {
      setIsQuizActive(false);
    }

    if (!isQuizView && materialId) {
      const fetchMaterial = async () => {
        try {
          const res = await http(`/api/materials/${materialId}`, {
            method: "GET",
            credentials: "include",
          });
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setMaterial(data);
          setError(null);
        } catch (err) {
          console.error("Gagal fetch materi:", err);
          setError("Gagal memuat materi.");
          setMaterial(null);
        } finally {
          setIsLoading(false);
        }
      };
      fetchMaterial();
    } else if (isQuizView) {
      setIsLoading(false);
    } else {
      setError("Pilih materi dari sidebar."); // Pesan awal saat tidak ada materi atau kuis yang dipilih
      setIsLoading(false);
    }
  }, [location.pathname, materialId, isQuizView]);

  return (
    <div className="materi split-view">
      {" "}
      <SidebarPencemaranAir
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
