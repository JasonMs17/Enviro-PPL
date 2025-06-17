import React, { useState, useEffect } from "react";
import "../pages/Home.css";
import taglineImg from "../assets/polusi.jpg"; // Pastikan path sesuai dengan lokasi gambar
import trashImg from "../assets/trash.png";
import soilPollutionImg from "../assets/polusi.jpg";
import waterPollutionImg from "../assets/polusi.jpg";
import airPollutionImg from "../assets/polusi.jpg";
import {
  FaWater,
  FaCloudSun,
  FaSeedling,
  FaLeaf,
  FaUsers,
  FaBookReader,
  FaChartLine,
  FaHandHoldingHeart,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import PollutionCard from "./PollutionCard";
import LoginModal from "./LoginModal";
import VerifyEmailModal from "./VerifyEmailModal";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const navigate = useNavigate();

  const pollutionTypes = [
    {
      icon: FaSeedling,
      title: "Pencemaran Tanah",
      description:
        "Pencemaran tanah adalah keadaan di mana bahan kimia buatan manusia masuk dan mengubah lingkungan tanah alami.",
      image: soilPollutionImg,
      route: "/pencemaran-tanah/19",
    },
    {
      icon: FaWater,
      title: "Pencemaran Air",
      description:
        "Pencemaran air adalah suatu perubahan keadaan di suatu tempat penampungan air seperti danau, sungai, lautan dan air tanah akibat aktivitas manusia.",
      image: waterPollutionImg,
      route: "/pencemaran-air/1",
    },
    {
      icon: FaCloudSun,
      title: "Pencemaran Udara",
      description:
        "Pencemaran udara adalah kehadiran satu atau lebih substansi fisik, kimia, atau biologi di atmosfer dalam jumlah yang dapat membahayakan kesehatan manusia, hewan, dan tumbuhan.",
      image: airPollutionImg,
      route: "/pencemaran-udara/10",
    },
  ];

  const features = [
    {
      icon: FaLeaf,
      title: "Pembelajaran Interaktif",
      description:
        "Materi pembelajaran yang dikemas secara interaktif dengan visualisasi menarik dan kuis yang menantang untuk pengalaman belajar yang lebih menyenangkan.",
    },
    {
      icon: FaUsers,
      title: "Tantangan Ramah Lingkungan",
      description:
        "Fitur tantangan mingguan yang mendorong pengguna menerapkan kebiasaan ramah lingkungan dan membangun kesadaran melalui aksi nyata.",
    },
    {
      icon: FaBookReader,
      title: "Konten Berkualitas",
      description:
        "Materi disusun berdasarkan referensi dari sumber-sumber terpercaya dan diperbarui secara berkala untuk memberikan informasi yang akurat dan relevan.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Aktivis Lingkungan",
      text: "Platform yang sangat informatif untuk belajar tentang lingkungan. Materinya lengkap dan mudah dipahami.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa",
      text: "Enviro membantu saya memahami pentingnya menjaga lingkungan. Sekarang saya lebih peduli dengan alam sekitar.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Rina Putri",
      role: "Guru Biologi",
      text: "Sumber belajar yang bagus untuk mengajarkan tentang lingkungan kepada siswa. Visualisasinya menarik.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector(".features-section");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseVerifyModal = () => {
    setShowVerifyModal(false);
  };

  const handleVerifyEmail = () => {
    navigate("/send-email");
    setShowVerifyModal(false);
  };

  return (
    <>
      <div className="home-container">
        <div className="tagline-section">
          <div className="tagline-image">
            <img src={taglineImg} alt="Tagline Enviro" />
          </div>
          <div className="tagline-overlay">
            <div className="tagline-content">
              <h1>Lawan Polusi,</h1>
              <h1>Selamatkan Bumi!</h1>
            </div>
          </div>
          <div className="scroll-arrow" onClick={scrollToFeatures}>
            <FaChevronDown />
          </div>
        </div>

        <div className="features-section">
          <h2>Mengapa Memilih Enviro?</h2>
          <div className="features-slider">
            <button className="slider-button prev" onClick={prevFeature}>
              <FaChevronLeft />
            </button>
            <div className="feature-slide">
              <div className="feature-icon">
                {React.createElement(features[currentFeature].icon)}
              </div>
              <h3>{features[currentFeature].title}</h3>
              <p>{features[currentFeature].description}</p>
            </div>
            <button className="slider-button next" onClick={nextFeature}>
              <FaChevronRight />
            </button>
            <div className="slider-dots">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentFeature ? "active" : ""}`}
                  onClick={() => setCurrentFeature(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="pollution-section">
          <div className="pollution-image">
            <img src={trashImg} alt="Pencemaran Lingkungan" />
          </div>
          <div className="pollution-overlay">
            <div className="pollution-content">
              <h2>Pencemaran Lingkungan, Polusi, dan Penyebabnya</h2>
              <p>
                Polusi adalah pencemaran lingkungan oleh zat-zat berbahaya atau
                materi biologis. Polusi dapat terjadi di air, udara, tanah, dan
                tempat lain.
              </p>
              <button className="read-more">Baca Selanjutnya</button>
            </div>
          </div>
        </div> */}

        <div className="explore-section" id="explore-section">
          <h2>Pelajari</h2>
          <div className="pollution-types">
            {pollutionTypes.map((type, index) => (
              <PollutionCard
                key={index}
                icon={type.icon}
                title={type.title}
                description={type.description}
                image={type.image}
                route={type.route}
                onRequireLogin={() => setShowLoginModal(true)}
                onRequireVerify={() => setShowVerifyModal(true)}
              />
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-overlay"></div>
          <div className="stat-container">
            <div className="stat-item">
              <FaBookReader className="stat-icon" />
              <h3>25+</h3>
              <p>Materi Edukasi</p>
            </div>
            <div className="stat-item">
              <FaChartLine className="stat-icon" />
              <h3>5+</h3>
              <p>Tantangan Mingguan</p>
            </div>
            {/* <div className="stat-item">
              <FaHandHoldingHeart className="stat-icon" />
              <h3>5.000+</h3>
              <p>Relawan Aktif</p>
            </div> */}
          </div>
        </div>

        <div className="testimonials-section">
          <h2>Apa Kata Mereka?</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}

      {showVerifyModal && (
        <VerifyEmailModal
          onClose={handleCloseVerifyModal}
          onVerify={handleVerifyEmail}
        />
      )}
    </>
  );
};

export default LandingPage;
