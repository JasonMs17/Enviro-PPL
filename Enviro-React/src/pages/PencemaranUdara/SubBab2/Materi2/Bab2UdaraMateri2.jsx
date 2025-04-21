import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab2UdaraMateri2.css"
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab2UdaraMateri2 (){
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
            material_id: 14, // Ganti sesuai ID materi
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
        <div className={`bab-2-udara-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Pencegahan & Penanganan Risiko Kesehatan Akibat Polusi
                        </h2>
                        <h3>
                        💬 “Kita mungkin nggak bisa kontrol kualitas udara… tapi kita bisa jaga diri sendiri.”
                        </h3>
                        <p>
                        Polusi udara memang sulit dihindari, apalagi di kota besar. Tapi jangan khawatir—ada banyak cara untuk mengurangi risiko kesehatannya, terutama jika kamu tinggal di daerah dengan kualitas udara yang buruk.
                        </p>
                        <hr />

                        <h4>
                        🎥 Yuk tonton video informatif ini:
                        </h4>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/6IKaUTYWtvg?si=gO1kr-SOqL5ozxBe" 
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            }}
                        ></iframe>
                        </div>
                        <p>
                        Video ini menjelaskan cara melindungi diri dari dampak polusi. Tonton dulu, lalu simak detailnya di artikel ini!
                        </p>
                        
                        <h4>
                        1. Gunakan Masker Berkualitas
                        </h4>
                        <ul>
                            <li>Pilih masker <span className="line-bold">N95 atau KN95</span> yang bisa menyaring partikel halus (PM2.5)</li>
                            <li>Ganti secara rutin, terutama jika sering dipakai di luar ruangan</li>
                            <li>Masker kain biasa kurang efektif melawan polusi tinggi</li>
                        </ul>
                        <hr />
                        
                        <h4>
                        2. Pakai Air Purifier di Dalam Ruangan
                        </h4>
                        <ul>
                            <li>Gunakan <span className="line-bold">filter HEPA</span> untuk menyaring udara di rumah</li>
                            <li>Letakkan di ruang tidur atau ruang kerja</li>
                            <li>Tutup jendela saat polusi sedang tinggi (cek indeks kualitas udara)</li>
                        </ul>
                        <hr />
                        
                        <h4>
                        3. Cek Kualitas Udara Sebelum Keluar
                        </h4>
                        <ul>
                            <li>Gunakan aplikasi seperti IQAir, BMKG, atau Google Weather</li>
                            <li>Hindari aktivitas berat di luar rumah saat AQI (Air Quality Index) buruk</li>
                            <li>Jadwalkan olahraga pagi saat udara lebih bersih</li>
                        </ul>
                        <hr />
                        
                        <h4>
                        4. Istirahat Cukup & Makan Sehat
                        </h4>
                        <ul>
                            <li>Tubuh yang fit lebih tahan terhadap efek polusi</li>
                            <li>Konsumsi makanan kaya antioksidan (buah, sayur, vitamin C dan E)</li>
                            <li>Tidur cukup bantu sistem imun melawan stres lingkungan</li>
                        </ul>
                        <hr />
                       
                    </div>
                </div>
            </div>
        </div>
    );
}