import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import Infografis  from "../../../../assets/Course/Polusi-Air/AIR-SUB-BAB-2-MATERI-2.png";
import "./Bab2AirMateri2.css"
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab2AirMateri2 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
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
            material_id: 5, // Ganti sesuai ID materi
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
        <div className={`bab-2-air-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Siapa yang Paling Terdampak?
                        </h2>
                        <h3>
                        🚨 Air Tercemar: Ancaman yang Tidak Merata
                        </h3>
                        <p>
                        Pencemaran air bukan hanya masalah lingkungan—ini adalah krisis kemanusiaan yang paling membebani kelompok rentan. Anak-anak, lansia, dan komunitas di wilayah tertentu menanggung dampak terberat dari krisis air ini.
                        </p>
                        
                        <h3>
                        👶 Anak-Anak: Korban Terbesar
                        </h3>
                        <p>
                        Setiap hari, lebih dari <span className="line-bold">1.000 anak di bawah usia lima tahun meninggal </span>akibat penyakit yang disebabkan oleh air tercemar, sanitasi yang buruk, dan kebersihan yang tidak memadai . Penyakit seperti diare, kolera, dan hepatitis A menjadi penyebab utama kematian ini.
                        </p>
                        
                        <h3>
                        👵 Lansia: Ketahanan Tubuh yang Melemah
                        </h3>
                        <p>
                        Lansia memiliki sistem kekebalan tubuh yang lebih lemah, membuat mereka lebih rentan terhadap infeksi yang disebabkan oleh air tercemar. Paparan jangka panjang terhadap logam berat dan bahan kimia berbahaya dalam air dapat memperburuk kondisi kesehatan mereka.                        </p>
                        
                        <h3>
                        🧭 Wilayah Tertentu: Beban yang Lebih Berat
                        </h3>
                        <p>
                        Krisis air tidak merata secara geografis. Di banyak negara berkembang, terutama di daerah pedesaan dan pinggiran kota, akses terhadap air bersih sangat terbatas. Menurut WHO dan UNICEF, sekitar <span className="line-bold">2,2 miliar orang di seluruh dunia tidak memiliki akses ke layanan air minum yang dikelola dengan aman .</span>                        </p>
                       
                        <h3>
                        💧 Krisis Air: Ketimpangan yang Meningkat
                        </h3>
                        <p>
                        Krisis air memperparah ketimpangan sosial. Mereka yang memiliki akses terhadap air bersih dapat menjalani kehidupan yang sehat dan produktif, sementara yang tidak—harus menghadapi risiko penyakit setiap hari. Akses yang tidak merata ini menciptakan siklus kemiskinan dan penyakit yang sulit diputus.                        </p>
                        
                        

                        <div className="infografis-course-air-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}