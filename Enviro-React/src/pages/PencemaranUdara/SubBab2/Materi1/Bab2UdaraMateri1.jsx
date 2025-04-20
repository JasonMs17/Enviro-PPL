import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab2UdaraMateri1.css"
export default function Bab2UdaraMateri1 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-2-udara-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Bagaimana Polusi Udara Mempengaruhi Tubuh Kita
                        </h2>
                        <h3>
                        💬 “Satu tarikan napas bisa membawa partikel berbahaya langsung ke dalam tubuhmu.”
                        </h3>
                        <p>
                        Kita mungkin nggak sadar, tapi udara yang kita hirup setiap hari bisa membawa partikel kecil yang mematikan. Polusi udara bukan hanya sekadar asap—tapi campuran kompleks zat beracun yang bisa menyusup ke paru-paru, jantung, bahkan otak kita.
                        </p>
                        <h4>
                        🎥 Tonton dulu video dari WHO ini untuk tahu gambaran visualnya:
                        </h4>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/GVBeY1jSG9Y?si=Zn7TNMjpVjw8BmTA"
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
                        Di video ini kamu bisa lihat bagaimana polusi masuk ke tubuh dan memengaruhi berbagai organ penting. Setelah nonton, lanjut baca artikel ini untuk penjelasan yang lebih mendalam!
                        </p>
                        <hr />

                        <h4>
                        1. Sistem Pernapasan: Jalur Masuk Polusi
                        </h4>
                        <p>
                        Polusi udara menyerang langsung sistem pernapasan karena partikel halus seperti PM2.5 bisa masuk jauh ke dalam paru-paru.
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>
                        <ul>
                            <li>Iritasi saluran napas (batuk, sesak)</li>
                            <li>Memicu atau memperburuk asma</li>
                            <li>Meningkatkan risiko infeksi paru seperti bronkitis</li>
                            <li>Paparan jangka panjang → penurunan fungsi paru-paru dan kanker paru (batuk, sesak)</li>
                        </ul>
                        <hr />

                        <h4>
                        2. Sistem Kardiovaskular: Beban untuk Jantung
                        </h4>
                        <p>
                        Zat polutan seperti karbon monoksida dan ozon dapat masuk ke aliran darah dan memengaruhi jantung.
                        </p>
                        <p className="paragraf-bold">
                        Risikonya:
                        </p>
                        <ul>
                            <li>Tekanan darah meningkat (batuk, sesak)</li>
                            <li>Pembuluh darah menyempit</li>
                            <li>Risiko serangan jantung dan stroke naik</li>
                            <li>Memperparah penyakit jantung yang sudah ada</li>
                        </ul>
                        <hr />

                        <h4>
                        3. Otak dan Sistem Saraf
                        </h4>
                        <p>
                        Penelitian menunjukkan bahwa partikel ultra-halus dari udara tercemar dapat melintasi sawar darah otak.
                        </p>
                        <p className="paragraf-bold">
                        Kemungkinan dampaknya:
                        </p>
                        <ul>
                            <li>Penurunan fungsi kognitif</li>
                            <li>Risiko penyakit Alzheimer dan Parkinson meningkat</li>
                            <li>Gangguan perkembangan otak pada anak-anak</li>
                        </ul>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}