import { useState, useEffect } from "react";
import { http } from "@/utils/fetch";
import { FaLeaf, FaUsers, FaBookReader } from "react-icons/fa";
import "./UserProgress.css";
import { useParams } from "react-router-dom";

export default function UserProgress() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [materials, setMaterials] = useState([
    { id: 1, title: "Pencemaran Air", description: "Deskripsi materi air", icon: FaLeaf },
    { id: 2, title: "Pencemaran Udara", description: "Deskripsi materi udara", icon: FaUsers },
    { id: 3, title: "Pencemaran Tanah", description: "Deskripsi materi tanah", icon: FaBookReader }
  ]);
  const params = useParams();

  useEffect(() => {
    const loadProgress = async () => {
      setLoading(true);
      try {
        const [resProg] = await Promise.all([
          fetch("/api/overall-progress", { credentials: "include" })
        ]);
        const progData = await resProg.json();
        setProgress(progData.progress);
      } catch (err) {
        console.error("Error loading progress:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProgress();
  }, []);

  const changeFeature = (index) => setCurrentFeature(index);

  return (
    <div className="user-progress">
      <div className="container-progress">
        <div className="status-user">
          <h1 className="status">Dalam Progress</h1>
          <div className="slider-dots">
            {materials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentFeature ? "active" : ""}`}
                onClick={() => changeFeature(index)}
              />
            ))}
          </div>
        </div>

        <div className="main-progress">
          <div className="image-polution">
            material image here
            {/* Add your material images here */}
          </div>

          <div className="progress-detail">
            <h4>Materi</h4>
            <h2 className="course-name">{materials[currentFeature].title}</h2>
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{
                  width: loading ? "0%" : `${progress}%`,
                  backgroundColor: loading ? "#888" : "#1DBC60"
                }}
              />
              <span className="progress-text-landing-page">
                {loading ? "Loading..." : `${progress}% selesai`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
