import { useState } from "react";
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-3-MATERI-3.png";
import "./bab3TanahMateri3.css"
import { Bold } from "lucide-react";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab3TanahMateri3 (){
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
            material_id: 27, // Ganti sesuai ID materi
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
        <div className={`Bab-3-tanah-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                           <div className="course-article">
                               <div className="course-content" >
                                   <h2 dir="ltr">
                                   Peran Masyarakat & Edukasi Lingkungan
                                   </h2>
                                   
                                   <div className="infografis-course-udara-bab2">
                                       <img src={Infografis} alt="" />
                                   </div>
           
                                   <h3>
                                   💬 “Polusi tanah bukan cuma urusan pemerintah. Ini juga tentang bagaimana komunitas bertindak.”
                                   </h3>
                                   <p>
                                   Kesadaran masyarakat adalah kunci keberhasilan dalam upaya mengatasi polusi tanah. Dengan semakin banyak orang yang peduli dan paham akan pentingnya menjaga kebersihan tanah, maka perubahan positif bisa terjadi dari tingkat lokal. Di sinilah pentingnya peran komunitas dan edukasi lingkungan.                       
                                   </p>
                                    <hr />

                                   <h4>
                                   1. Urban Farming
                                   </h4>
                                   <p>
                                   Urban farming bukan hanya untuk ketahanan pangan, tapi juga menjadi bagian dari pengelolaan tanah berkelanjutan.
                                   </p>
                               
                                   <p className="paragraf-bold">
                                   Manfaatnya:
                                   </p>
                                   <ul>
                                       <li>Mengurangi limbah organik (dijadikan kompos)</li>
                                       <li>Mengembalikan kesuburan tanah</li>
                                       <li>Mengedukasi masyarakat tentang pentingnya tanah sehat</li>
                                   </ul>
                                    <p>
                                    Bisa dilakukan lewat kebun komunitas, pot di balkon, atau hidroponik skala kecil.
                                    </p>
                                    <hr />

                                   <h4>
                                   2. Kampanye Lingkungan di Sekolah
                                   </h4>
                                   <p>
                                   Generasi muda adalah agen perubahan. Kampanye edukatif di sekolah bisa menciptakan kesadaran jangka panjang.
                                   </p>
                               
                                   <p className="paragraf-bold">
                                   Kegiatan yang bisa dilakukan:
                                   </p>
                                   <ul>
                                       <li>Edukasi soal daur ulang dan pemilahan</li>
                                       <li>Lomba daur ulang atau mural lingkungan</li>
                                       <li>Aksi tanam pohon atau buat kompos bareng</li>
                                   </ul>
                                   <hr />

                                   <h4>
                                   3. Bank Sampah
                                   </h4>
                                   <p>
                                   Bank sampah memungkinkan warga untuk menukar sampah non-organik dengan insentif. Ini menciptakan nilai dari sampah, sekaligus mendorong masyarakat untuk memilah limbah.
                                   </p>
                               
                                   <p className="paragraf-bold">
                                   Ciri khasnya:
                                   </p>
                                   <ul>
                                       <li>Dikelola komunitas</li>
                                       <li>Menjadi pusat edukasi lingkungan</li>
                                       <li>Menekan volume sampah masuk ke TPA</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
        </div>
    );
}