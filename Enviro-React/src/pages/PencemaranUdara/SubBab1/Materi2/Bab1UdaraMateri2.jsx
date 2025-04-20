import { useState } from "react";
import "./Bab1UdaraMateri2.css"
import { Bold } from "lucide-react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
export default function Bab1UdaraMateri2 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-1-udara-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Jenis Polutan di Udara
                        </h2>
                        <h3>
                        💬 “Kelihatannya bersih, tapi penuh zat berbahaya.”
                        </h3>
                        <p>
                        Udara bisa terlihat jernih tapi tetap mengandung partikel berbahaya yang tidak bisa kita lihat dengan mata telanjang. Zat-zat ini bisa berasal langsung dari aktivitas manusia, atau terbentuk karena reaksi kimia di atmosfer.
                        </p>
                        
                        <h4>
                        🎥 Sebelum lanjut, yuk tonton dulu video keren ini dari TED-Ed:                        
                        </h4>

                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/xEodej_M7TI?si=vG1nBqfVYDD3ZkNz"
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
                        <hr />
                        
                        <p>
                        Di materi sebelumnya, kamu sudah dikenalkan dengan beberapa contoh polusi udara seperti smog, gas rumah kaca, dan zat-zat beracun.                       
                        </p>

                        <p>
                        Nah, sekarang kita masuk ke pembahasan yang lebih teknis—yaitu mengklasifikasikan polusi udara menjadi dua jenis utama: primary (primer) dan secondary (sekunder) pollutants.                       
                        </p>
                        <hr />

                        <h4>
                        🧪 1. Primary Pollutants – Polutan Primer
                        </h4>

                        <p>
                        Polutan primer adalah zat pencemar yang langsung dilepas ke udara dari sumbernya. Mereka berasal dari pembakaran, proses industri, atau aktivitas manusia lainnya.   
                        </p>
                        <ul>
                            <li>Karbon monoksida (CO) – dari kendaraan bermotor</li>
                            <li>Sulfur dioksida (SO₂) – dari pembakaran batu bara</li>
                            <li>Nitrogen oksida (NOx) – dari mesin kendaraan dan industri</li>
                            <li>Partikulat (PM2.5 dan PM10) – debu, asap, jelaga</li>
                            <li>VOC (Volatile Organic Compounds) – dari cat, bensin, semprotan aerosol</li>
                        </ul>
                        <p>
                        Polutan ini langsung masuk ke udara, dan bisa segera terhirup oleh manusia dan hewan.
                        </p>
                        <hr />

                        <h4>
                        🔁 2. Secondary Pollutants – Polutan Sekunder
                        </h4>
                        <p>
                        Polutan sekunder adalah zat pencemar yang tidak langsung keluar dari sumber, tapi terbentuk di atmosfer karena reaksi kimia antar polutan primer.
                        </p>
                        <p>
                            Contoh:                       
                        </p>
                        <ul>
                            <li>Ozon troposferik (O₃) – terbentuk dari reaksi NOx dan VOC di bawah sinar matahari</li>
                            <li>Smog fotokimia – kabut beracun di kota besar</li>
                            <li>Asam nitrat dan asam sulfat – penyebab hujan asam</li>
                        </ul>
                        <p>
                        Meskipun tidak muncul langsung, polutan sekunder bisa jauh lebih kompleks dan sulit ditangani karena terbentuk dari kombinasi berbagai zat.
                        </p>
                        <hr />

                        <h4>
                        ☠️ Dampaknya terhadap Kesehatan
                        </h4>
                        <p>
                        Baik polutan primer maupun sekunder punya potensi merusak kesehatan:                        
                        </p>
                        <p>
                        Zat yang sering terbawa:                   
                        </p>
                        <ul>
                            <li>Iritasi mata, hidung, dan tenggorokan</li>
                            <li>Sesak napas dan asma</li>
                            <li>Penyakit paru-paru kronis</li>
                            <li>Gangguan jantung</li>
                            <li>Risiko kanker paru dalam jangka panjang</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}