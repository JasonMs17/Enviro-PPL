import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./bab3AirMateri3.css"
import { Bold } from "lucide-react";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab3AirMateri3 (){
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
            material_id: 9, // Ganti sesuai ID materi
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
        <div className={`Bab-3-air-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >   
                        <h2 dir="ltr">
                        Pengelolaan Air Berkelanjutan
                        </h2>
                        <h4>
                        💧 Yuk, Tonton Dulu Videonya Biar Makin Paham!
                        </h4>
                        <p>
                        Sebelum kita bahas lebih dalam, saksikan dulu video ini biar kamu makin semangat belajar tentang pengelolaan air :
                        </p>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/wDXhpvhW16c?si=4a4h9eWrBPie_dxv" 
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
                        Nah, sekarang setelah nonton, kita langsung bahas yuk...
                        </p>
                        <h3>
                        🌊 Air Bersih di Tangan Kita: Cara Mengelolanya dengan Bijak
                        </h3>
                        <p>
                        Air yang kita pakai sehari-hari ternyata butuh pengelolaan khusus biar tetap bersih dan cukup untuk semua. Ini dia 5 cara keren yang bisa kita terapkan :
                        </p>
                        
                        <h4>
                        1. Bijak Pakai Air Sehari-hari
                        </h4>
                        <ul>
                            <li>Matikan keran pas gak dipakai (hemat 6 liter air per menit!)</li>
                            <li>Pilih shower hemat air yang bisa ngurangin pemakaian sampai 50%</li>
                            <li>Tampung air hujan buat nyiram tanaman atau cuci mobil</li>
                        </ul>
                        
                        <h4>
                        2. Kelola Limbah Rumah Tangga
                        </h4>
                        <ul>
                            <li>Jangan buang minyak goreng ke saluran air (1 liter minyak bisa cemari 1 juta liter air!)</li>
                            <li>Pakai deterjen ramah lingkungan yang cepat terurai</li>
                            <li>Buat lubang resapan biopori biar air hujan gak terbuang percuma</li>
                        </ul>
                        
                        <h4>
                        3. Dukung Teknologi Pengolahan Air
                        </h4>
                        <ul>
                            <li>Pasang filter air di rumah biar air keran lebih bersih</li>
                            <li>Daur ulang air bekas cucian buat menyiram tanaman</li>
                            <li>Dukung program penyaringan air bersih di daerah-daerah</li>
                        </ul>
                        
                        <h4>
                        4. Jaga Sumber Air Alami
                        </h4>
                        <ul>
                            <li>Tanam pohon di sekitar sumber air biar tanah tetap menyerap</li>
                            <li>Jangan buang sampah ke sungai atau danau</li>
                            <li>Ikut kegiatan bersih-bersih pantai/sungai</li>
                        </ul>
                        
                        <h4>
                        5. Edukasi Sekitar Kita
                        </h4>
                        <ul>
                            <li>Ajak teman & keluarga buat lebih peduli air</li>
                            <li>Share info penting ini di media sosial</li>
                            <li>Dukung kebijakan pemerintah yang pro lingkungan</li>
                        </ul>
                        <hr />
                        <p>🔥 Gimana? Siap jadi pahlawan air sehari-hari?</p>
                        <p> Mulai dari hal kecil aja dulu, lama-lama pasti jadi kebiasaan baik!</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}