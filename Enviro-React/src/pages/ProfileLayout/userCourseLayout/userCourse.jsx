import "./userCourse.css";
import pencemaran from "../../../assets/pencemaranUdara.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserCourse() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user-materials", {
          method: "GET",
          credentials: "include", 
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Gagal ambil data materi selesai");
        }

        const data = await response.json();
        console.log("Fetched materials:", data);
        setMaterials(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching materials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (loading) {
    return <p>Loading materi...</p>;
  }

  return (
    <div className="row-section">
      {materials.length > 0 ? (
        materials.map((material, index) => (
          <div className="progress-container" key={material.material_id || index}>
            <div className="user-course-profile">
             <Link className="course-card-user-progress" to={`/pencemaran-${material.category}/${material.material_id}`}>
                <div className="course-card-header">
                  <div className="course-card-logo-wrapper">
                    <img
                      src={material.photo || pencemaran}
                      className="course-card-logo"
                      alt={material.title}
                    />
                  </div>
                  <div className="course-card-content">
                    <h5 className="course-card-name">{material.title}</h5>
                  </div>
                </div>
                <div className="course-card-summary">
                  <p>{material.content}</p>
                </div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Belum ada materi yang kamu selesaikan.</p>
      )}
    </div>
  );
}
