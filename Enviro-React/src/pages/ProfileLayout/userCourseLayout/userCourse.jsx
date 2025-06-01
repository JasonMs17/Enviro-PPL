import "./userCourse.css";
import pencemaran from "../../../assets/pencemaranUdara.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../../../components/SkeletonCard";
import { http } from "@/utils/fetch";

export default function UserCourse() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategoryByMaterialId = (materialId) => {
    if (materialId >= 1 && materialId <= 9) {
      return "pencemaran-air";
    } else if (materialId >= 10 && materialId <= 18) {
      return "pencemaran-udara";
    } else if (materialId >= 19 && materialId <= 27) {
      return "pencemaran-tanah";
    }
    return "pencemaran-udara";
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case "pencemaran-air":
        return "Pencemaran Air";
      case "pencemaran-udara":
        return "Pencemaran Udara";
      case "pencemaran-tanah":
        return "Pencemaran Tanah";
      default:
        return "Kategori Lainnya";
    }
  };

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await http("/api/user-materials");

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
    return (
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div className="row-section">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  if (materials.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Belum ada materi yang kamu selesaikan.
        </p>
      </div>
    );
  }

  // Group materials by category
  const groupedMaterials = materials.reduce((acc, material) => {
    const category = getCategoryByMaterialId(material.material_id);
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(material);
    return acc;
  }, {});

  return (
    <div className="materials-container">
      {Object.entries(groupedMaterials).map(([category, categoryMaterials]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{getCategoryTitle(category)}</h2>
          <div className="row-section">
            {categoryMaterials.map((material, index) => (
              <div
                className="progress-container"
                key={material.material_id || index}
              >
                <div className="user-course-profile">
                  <Link
                    className="course-card-user-progress"
                    to={`/${category}/${material.material_id}`}
                  >
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
