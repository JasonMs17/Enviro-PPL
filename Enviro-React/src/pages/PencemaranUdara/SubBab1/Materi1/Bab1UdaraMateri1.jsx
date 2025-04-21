import { useState } from "react";
import "./Bab1UdaraMateri1.css"
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab1UdaraMateri1 (){
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
            material_id: 10, // Ganti sesuai ID materi
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
        <div className={`bab-1-udara-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Apa Itu Polusi Udara dan Sumbernya
                        </h2>
                        <h3>
                        💬 “Udara itu nggak kelihatan… tapi bisa mematikan.”
                        </h3>
                        <p>
                        Kita bernapas tanpa sadar lebih dari 20.000 kali sehari. Tapi pernah nggak kamu mikir: apa yang sebenarnya kita hirup?
                        </p>
                        <p>
                        Polusi udara bukan cuma bikin langit mendung atau bikin napas sesak. Dalam jangka panjang, udara yang tercemar bisa merusak organ tubuh, memperparah penyakit kronis, dan bahkan menyebabkan kematian dini.                        
                        </p>
                        <p>
                        Di materi ini, kamu akan belajar tentang apa itu polusi udara, dari mana asalnya, dan contoh-contoh zat pencemar yang perlu diwaspadai.                        
                        </p>
                        <h4>
                        🎥 Yuk tonton dulu video menarik ini dari National Geographic:                        
                        </h4>
                        
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/e6rglsLy1Ys?si=B8s56l-0NAfQeMgW"
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
                        Di video ini kamu akan diperkenalkan dengan konsep gas rumah kaca, smog, dan polutan beracun. Tonton dulu sebentar, lalu lanjutkan bacanya untuk penjelasan lebih lengkap!                        
                        </p>

                        <h3>
                        🌬️ Apa Itu Polusi Udara?
                        </h3>
                        <p>
                        Polusi udara terjadi ketika udara tercampur dengan zat-zat asing—baik dalam bentuk gas, partikel, atau bahan kimia—yang dapat membahayakan kesehatan manusia, hewan, dan lingkungan. Polusi ini bisa muncul dari aktivitas sehari-hari, industri, hingga bencana alam.
                        </p>
                        <hr />

                        <h3>
                        🏭 Sumber Polusi Udara: Alami vs Buatan
                        </h3>

                        <h4>
                            🔍 🌋 Sumber Alami
                        </h4>

                        <ul>
                            <li>Letusan gunung berapi</li>
                            <li>Debu dari gurun</li>
                            <li>Kebakaran hutan alami</li>
                            <li>Serbuk sari tanaman</li>
                        </ul>

                        
                        <h4>
                        🚗 Sumber Buatan (Manusia)
                        </h4>

                        <ul>
                            <li>Asap kendaraan bermotor</li>
                            <li>Emisi pabrik dan pembangkit listrik</li>
                            <li>Pembakaran sampah dan bahan bakar fosil</li>
                            <li>Penggunaan bahan kimia rumah tangga</li>
                        </ul>

                        <p>
                        Polusi dari aktivitas manusia cenderung terjadi terus-menerus dan dalam skala besar, sehingga berdampak lebih luas dan berbahaya.
                        </p>
                        <hr />
                        <h3>
                        ☁️ Contoh Polutan di Udara
                        </h3>
                        <p>
                        Beberapa jenis polutan yang umum ditemukan di udara antara lain:
                        </p>
                        
                        <ul>
                            <li><span className="line-bold">Gas rumah kaca </span>seperti CO₂ dan metana, yang mempercepat pemanasan global</li>
                            <li><span className="line-bold">Smog </span> atau kabut asap, yang terbentuk dari campuran asap kendaraan dan sinar matahari</li>
                            <li><span className="line-bold">Zat beracun </span> seperti karbon monoksida, sulfur dioksida, dan timbal, yang bisa masuk ke paru-paru dan merusak organ</li>
                        </ul>
                        
                        <p>
                        Masing-masing polutan ini punya sifat dan dampak berbeda terhadap lingkungan dan tubuh manusia. 
                        </p>
                        
                        <p>
                        📌 Untuk memahami lebih dalam bagaimana polusi udara terbentuk, yuk lanjut ke materi berikutnya yang membahas klasifikasi utama polutan: primer dan sekunder.
                        </p>
                        <ul>
                            <li style={{ listStyleType: "none" }}> 💡 Dampak: kerusakan organ tubuh manusia dan kematian biota air</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}