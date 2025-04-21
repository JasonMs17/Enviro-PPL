import { useState } from "react";
import SidebarPencemaranAir from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import Infografis  from "../../../../assets/Course/Polusi-Air/AIR-SUB-BAB-1-MATERI-1.png";
import { http } from "../../../../utils/fetch";
import "./Bab1AirMateri1.css";

let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab1AirMateri1() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const trackProgress = async () => {
        try {
        await http("/sanctum/csrf-cookie", {
            method: "GET",
            credentials: "include",
        });

        const response = await http("/api/progress", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
            material_id: 1, // Ganti sesuai ID materi
            progress: 100,
            }),
        });

        if (!response.ok) {
            const errData = await response.json();
            console.error("Gagal simpan progress:", errData);
            return;
        }

        const data = await response.json();
        console.log("Progress berhasil disimpan:", data);
        } catch (error) {
        console.error("Error saat simpan progress:", error);
        }
    };

    if (!isProgressTracked) {
        isProgressTracked = true;
        trackProgress();
    }

  return (
    <div className={`bab-1-air-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <SidebarPencemaranAir isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  className={`sidebar-course ${isSidebarOpen ? "open" : "closed"}`} />
      <div className="course-container">
        <div className="course-article">
          <div className="course-content">
            <h2 dir="ltr">Apa Itu Polusi Air?</h2>
            <h3>👋 Tahukah kamu?</h3>
                        <p>
                            Setiap tetes air yang kita minum, gunakan untuk mandi, atau mengairi tanaman, bisa jadi tidak sebersih yang kita bayangkan. Tanpa kita sadari, aktivitas sehari-hari bisa mencemari air dan berdampak langsung pada lingkungan—bahkan pada kesehatan kita sendiri.
                            Di materi ini, kita akan mulai memahami apa sebenarnya yang disebut sebagai polusi air, dari definisi paling dasar hingga jenis-jenis pencemar yang wajib kita waspadai.
                        </p>
                        <h3>
                            Pengertian Polusi Air 
                        </h3>
                        <p>
                            Polusi air adalah kondisi ketika air di sungai, danau, laut, atau air tanah tercemar oleh zat-zat yang merusak kualitasnya. Secara sederhana, 
                            ini terjadi saat bahan berbahaya—baik dari makhluk hidup, zat kimia, energi, maupun partikel lain—masuk ke dalam air akibat aktivitas manusia, sehingga air tidak bisa lagi digunakan sebagaimana mestinya.
                        </p>
                        <p>
                            Contohnya, limbah pabrik yang dibuang langsung ke sungai tanpa pengolahan terlebih dahulu adalah bentuk pencemaran langsung. Sedangkan pencemaran tidak langsung bisa terjadi lewat air hujan yang membawa polutan dari udara atau tanah masuk ke badan air.
                        </p>
                        <p>
                            Namun, tidak semua perubahan kualitas air disebut sebagai pencemaran. Suatu air dikatakan tercemar jika kualitasnya menurun hingga tidak layak lagi untuk digunakan, baik untuk diminum, pertanian, industri, atau menjaga ekosistem air tetap seimbang.
                        </p>
                        <h3>
                            🔍 Ciri-Ciri Air yang Tercemar
                        </h3>
                        <p>
                            Beberapa indikator yang menandakan air telah tercemar antara lain:
                        </p>
                        <ul>
                            <li>Perubahan suhu air secara drastis.</li>
                            <li>Perubahan warna, bau, atau rasa air.</li>
                            <li>Air menjadi lebih asam atau terlalu basa. (pH tidak seimbang)</li>
                            <li>Munculnya endapan atau zat terlarut.</li>
                            <li>Terdapat mikroorganisme berbahaya.</li>
                            <li>Meningkatnya zat radioaktif dalam air.</li>
                        </ul>
                        <p>
                            Memahami dasar dari pencemaran air sangat penting agar kita bisa lebih sadar dan bertanggung jawab dalam menjaga sumber air bersih di sekitar kita.
                        </p>
                        <h3>
                            💧 Jenis-Jenis Polusi Air
                        </h3>
                        <p>
                            Polusi air dapat dibedakan berdasarkan jenis pencemarnya. Masing-masing punya sumber, dampak, dan cara penanganan yang berbeda.
                        </p>
                        <h4>
                            1. Pencemaran Mikrobiologis
                        </h4>
                        <p>
                        Terjadi karena air terkontaminasi bakteri, virus, atau parasit berbahaya. Biasanya berasal dari limbah rumah tangga yang mengandung tinja manusia atau hewan.   
                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}>📌 Contoh: E. coli, virus hepatitis A, parasit Giardia</li>
                            <li style={{ listStyleType: "none" }}>💡 Dampak: diare, kolera, hepatitis A</li>
                        </ul>
                        <h4>
                            2. Pencemaran Kimia Organik
                        </h4>
                        <p>
                            Disebabkan oleh senyawa kimia organik seperti pestisida, minyak, atau deterjen yang masuk ke dalam air dari pertanian atau rumah tangga. 
                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}> 💡 Dampak: meracuni ikan dan manusia, mencemari rantai makanan</li>
                        </ul>
                        <h4>
                            3. Pencemaran Kimia Anorganik
                        </h4>
                        <p>
                            Melibatkan logam berat (timbal, merkuri), asam kuat, dan senyawa pupuk. Sering berasal dari industri atau pertambangan.
                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}> 💡 Dampak: kerusakan organ tubuh manusia dan kematian biota air</li>
                        </ul>
                        <h4>
                            4. Pencemaran Termal
                        </h4>
                        <p>
                            Terjadi ketika suhu air naik akibat pembuangan air panas dari industri/pembangkit listrik.
                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}>💡 Dampak: oksigen terlarut menurun, ikan kesulitan bernapas</li>
                        </ul>
                        <h4>
                            5. Pencemaran Sedimen
                        </h4>
                        <p>
                        Partikel tanah dan debu masuk ke air dalam jumlah banyak, sering kali akibat erosi atau deforestasi.

                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}>💡 Dampak: air jadi keruh, sinar matahari sulit menembus, fotosintesis terganggu</li>
                        </ul>
                        <h4>
                            6. Pencemaran Nutrisi (Eutrofikasi)
                        </h4>
                        <p>
                            Disebabkan oleh kelebihan pupuk (nitrogen dan fosfor) dari pertanian atau limbah.
                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}>💡 Dampak: pertumbuhan alga berlebihan, kadar oksigen turun, ikan mati massal
                            </li>
                        </ul>

                        <div className="infografis-course-tanah-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}