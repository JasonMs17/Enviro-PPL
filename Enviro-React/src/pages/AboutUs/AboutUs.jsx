import React from "react";
import "./AboutUs.css";
import {
  FaLeaf,
  FaBook,
  FaRobot,
  FaTrophy,
  FaUsers,
  FaHandshake,
  FaHeartbeat,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-hero">
        <div className="about-us-hero-content">
          <h1>Tentang Enviro</h1>
          <p className="about-us-tagline">
            Platform Edukasi Lingkungan Interaktif
          </p>
        </div>
      </div>

      <div className="about-us-content">
        <section className="about-us-section">
          <div className="about-us-section-icon">
            <FaLeaf />
          </div>
          <h2>Apa itu Enviro?</h2>
          <p>
            Enviro adalah platform edukasi interaktif berbasis web yang
            dirancang untuk meningkatkan kesadaran masyarakat tentang dampak
            polusi terhadap kesehatan serta cara pencegahannya. Kami berkomitmen
            untuk memberikan edukasi lingkungan yang mudah diakses dan menarik
            bagi semua kalangan.
          </p>
        </section>

        <section className="about-us-section about-us-sdgs-section">
          <div className="about-us-section-icon">
            <FaHeartbeat />
          </div>
          <h2>SDG 3.9: Kesehatan dan Lingkungan</h2>
          <p>
            Enviro mendukung Sustainable Development Goals (SDGs) 3.9 yang
            berfokus pada pengurangan angka kematian dan penyakit yang
            disebabkan oleh polusi dan kontaminasi lingkungan. Target ini
            mencakup:
          </p>
          <ul className="about-us-sdgs-list">
            <li>
              Mengurangi angka kematian akibat polusi udara di dalam dan luar
              ruangan
            </li>
            <li>
              Mengurangi angka kematian akibat air yang tidak aman, sanitasi
              yang buruk, dan kurangnya kebersihan
            </li>
            <li>
              Mengurangi angka kematian akibat keracunan yang tidak disengaja
            </li>
            <li>
              Meningkatkan kesadaran masyarakat tentang bahaya bahan kimia
              berbahaya
            </li>
            <li>
              Mengurangi dampak kesehatan dari polusi tanah, air, dan udara
            </li>
          </ul>
          <p className="about-us-sdgs-note">
            Melalui platform edukasi kami, Enviro berkomitmen untuk membantu
            mencapai target SDG 3.9 dengan memberikan pengetahuan dan pemahaman
            yang komprehensif tentang dampak polusi terhadap kesehatan dan cara
            pencegahannya.
          </p>
        </section>

        <section className="about-us-section">
          <h2>Fitur Utama</h2>
          <div className="about-us-features-grid">
            <div className="about-us-feature-card">
              <div className="about-us-feature-icon">
                <FaBook />
              </div>
              <h3>Materi Edukatif</h3>
              <p>
                Akses berbagai materi edukasi tentang polusi udara, air, dan
                tanah dalam bentuk artikel, infografis, serta video edukatif.
                Setiap materi dilengkapi dengan kuis untuk menguji pemahaman
                Anda.
              </p>
            </div>

            <div className="about-us-feature-card">
              <div className="about-us-feature-icon">
                <FaRobot />
              </div>
              <h3>Chatbot Interaktif</h3>
              <p>
                Berinteraksi langsung dengan chatbot kami untuk mendapatkan
                jawaban atau rekomendasi terkait isu lingkungan yang Anda
                hadapi.
              </p>
            </div>

            <div className="about-us-feature-card">
              <div className="about-us-feature-icon">
                <FaTrophy />
              </div>
              <h3>Tantangan Mingguan</h3>
              <p>
                Ikuti tantangan mingguan yang mengajak Anda melakukan kebiasaan
                ramah lingkungan, seperti mengurangi penggunaan plastik atau
                beralih ke transportasi umum.
              </p>
            </div>

            <div className="about-us-feature-card">
              <div className="about-us-feature-icon">
                <FaUsers />
              </div>
              <h3>Profil Personal</h3>
              <p>
                Buat dan kelola profil Anda dengan informasi seperti username,
                email, dan foto profil untuk pengalaman yang lebih personal.
              </p>
            </div>
          </div>
        </section>

        <section className="about-us-section about-us-vision-section">
          <div className="about-us-section-icon">
            <FaHandshake />
          </div>
          <h2>Visi Kami</h2>
          <p>
            Dengan kombinasi edukasi dan keterlibatan aktif, Enviro bertujuan
            untuk membangun komunitas yang sadar lingkungan serta mendorong
            perubahan perilaku yang lebih berkelanjutan. Kami percaya bahwa
            setiap individu memiliki peran penting dalam menjaga kelestarian
            lingkungan.
          </p>
        </section>

        <section className="about-us-section about-us-join-section">
          <h2>Bergabung Bersama Kami</h2>
          <p>
            Daftar dan login untuk mengakses semua fitur Enviro. Bagi yang belum
            login, Anda masih dapat mengakses halaman utama untuk mengenal lebih
            jauh tentang platform kami.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
