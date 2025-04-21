import { useState } from "react";
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-2-MATERI-3.png";
import "./bab2TanahMateri3.css"
import { Bold } from "lucide-react";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
export default function Bab2TanahMateri3 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-2-tanah-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Kontaminasi pada Tanaman & Dampaknya ke Manusia
                        </h2>
                        
                        <div className="infografis-course-udara-bab2">
                            <img src={Infografis} alt="" />
                        </div>

                        <h3>
                        💬 “Tanaman yang tumbuh di tanah yang tercemar bukan hanya terancam, tetapi juga mengancam kita. Apa yang terjadi ketika tanaman terkontaminasi? Yuk, cari tahu.”
                        </h3>
                        <p>
                        Tanaman adalah bagian penting dari rantai makanan kita. Namun, jika tanaman tumbuh di tanah yang tercemar, mereka dapat menyerap zat berbahaya yang terkandung dalam tanah, dan akhirnya zat-zat tersebut masuk ke dalam tubuh manusia ketika kita mengonsumsi produk pertanian tersebut. Kontaminasi tanah tidak hanya merusak lingkungan, tetapi juga menjadi ancaman serius bagi kesehatan kita.                       
                        </p>

                        <h4>
                        Sayuran dan Buah dari Tanah Tercemar
                        </h4>
                        <p>
                        Sayuran dan buah yang tumbuh di tanah yang tercemar mengandung logam berat dan bahan kimia berbahaya yang bisa membahayakan tubuh kita. Bahkan tanaman yang tampaknya sehat bisa menjadi sarana masuknya polutan ke dalam tubuh kita, terutama logam berat seperti timbal dan arsenik yang bisa menyebabkan kerusakan organ.
                        </p>
                    
                        <p className="paragraf-bold">
                        Dampaknya pada Kesehatan:
                        </p>
                        <ul>
                            <li>Paparan logam berat yang merusak organ tubuh</li>
                            <li>Peningkatan risiko gangguan pencernaan dan keracunan</li>
                            <li>Potensi terjadinya kanker melalui konsumsi makanan yang tercemar</li>
                        </ul>

                        <h4>
                        Bagaimana Zat Berbahaya Masuk ke Dalam Tubuh?
                        </h4>
                        <p>
                        Ketika tanaman menyerap polutan dari tanah, bahan kimia tersebut tidak hanya tetap di dalam tanaman, tetapi juga bisa terkumpul di dalam tubuh kita melalui konsumsi harian. Ini meningkatkan risiko terjadinya penyakit jangka panjang, terutama jika kita mengonsumsi makanan yang terkontaminasi dalam waktu yang lama.
                        </p>
                    
                        <p className="paragraf-bold">
                        Dampaknya pada Kesehatan:
                        </p>
                        <ul>
                            <li>Terakumulasi di dalam tubuh dan menyebabkan kerusakan jangka panjang</li>
                            <li>Risiko gangguan kesehatan akut dan kronis</li>
                            <li>Mengganggu kesehatan keluarga, terutama anak-anak yang lebih rentan terhadap racun</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}