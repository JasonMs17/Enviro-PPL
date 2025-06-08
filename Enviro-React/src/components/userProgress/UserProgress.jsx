import { useState, useEffect } from "react";
import {
  FaLeaf,
  FaUsers,
  FaBookReader,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./UserProgress.css";
import { useParams } from "react-router-dom";
import http from "../../utils/fetch";

export default function UserProgress() {
  const [loading, setLoading] = useState(true);
  const [progressByType, setProgressByType] = useState({});
  const [completedMaterials, setCompletedMaterials] = useState([]);
  const [currentMaterial, setCurrentMaterial] = useState(0);
  const materials = [
    {
      id: 1,
      title: "Pencemaran Air",
      icon: FaLeaf,
    },
    {
      id: 2,
      title: "Pencemaran Udara",
      icon: FaUsers,
    },
    {
      id: 3,
      title: "Pencemaran Tanah",
      icon: FaBookReader,
    },
  ];
  const [pollutionPhotos, setPollutionPhotos] = useState({});
  // const params = useParams();

  const nextMaterial = () => {
    setCurrentMaterial((prev) => (prev + 1) % materials.length);
  };
  const prevMaterial = () => {
    setCurrentMaterial(
      (prev) => (prev - 1 + materials.length) % materials.length
    );
  };

  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      try {
        // Fetch overall progress by type
        const resProg = await http("/api/overall-progress");
        const progData = await resProg.json();
        setProgressByType(progData.progress_by_type);

        // Set pollution photos (make sure photo exists)
        setPollutionPhotos(progData.progress_by_type);

        // Fetch completed materials
        const resCompleted = await http("/api/completed-materials");
        const completedData = await resCompleted.json();
        setCompletedMaterials(completedData);
      } catch (err) {
        console.error("Error loading progress:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProgress();
  }, []);

  const changeMaterial = (index) => setCurrentMaterial(index);

  const getProgressForMaterial = (materialId) => {
    return progressByType[materialId]?.progress || 0;
  };

  const getPhotoForMaterial = (materialId) => {
    const photo = pollutionPhotos[materialId]?.photo;
    return photo ? photo : "https://via.placeholder.com/150"; // Default placeholder jika tidak ada foto
  };

  return (
    <div className="user-progress">
      <button
        className="slider-button-landing-page prev-page"
        onClick={prevMaterial}
      >
        <FaChevronLeft />
      </button>
      <div className="container-progress">
        <div className="status-user">
          <h1 className="status">Dalam Progress</h1>
          <div className="slider-dots-landing-page">
            {materials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentMaterial ? "active" : ""}`}
                onClick={() => changeMaterial(index)}
              />
            ))}
          </div>
        </div>

        <div className="main-progress">
          <div className="image-polution">
            <img
              src={getPhotoForMaterial(materials[currentMaterial].id)}
              alt={`Materi ${materials[currentMaterial].title}`}
            />
          </div>
          <div className="container-detail-progress">
            <div className="progress-detail">
              <h4>Materi</h4>
              <h2 className="course-name">
                {materials[currentMaterial].title}
              </h2>
            </div>
            <div className="progress-section">
              <div className="progress-bar-container-landing-page">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: loading
                      ? "0%"
                      : `${getProgressForMaterial(
                          materials[currentMaterial].id
                        )}%`,
                    backgroundColor: loading ? "#888" : "#1DBC60",
                  }}
                />
              </div>
              <div className="progress-percentage">
                {loading
                  ? "0%"
                  : `${getProgressForMaterial(materials[currentMaterial].id)}%`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-button-landing-page next-page"
        onClick={nextMaterial}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
