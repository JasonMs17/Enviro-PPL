import "./userCourse.css";
import pencemaran from "../../../assets/pencemaranUdara.png";
import { useEffect, useState } from "react";

export default function UserCourse() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaterials = async () => {
      const materialIds = [1, 2, 3, 4, 5, 6, 7]; // <-- ini ID-ID yang mau lu ambil dari tabel materials
      const fetchedMaterials = [];

      try {
        for (const id of materialIds) {
          const response = await fetch(`http://localhost:8000/api/materials?material_id=${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch material with ID ${id}`);
          }

          const data = await response.json();
          console.log("Fetched material:", data); // Debug data dari API
          fetchedMaterials.push(data.data ?? data);
        }

        setMaterials(fetchedMaterials);
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
              <a className="course-card-user-progress" href={`./material/${material.material_id}`}>
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
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>Belum ada materi yang kamu selesaikan.</p>
      )}
    </div>
  );
}
