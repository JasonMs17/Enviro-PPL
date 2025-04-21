import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./bab3UdaraMateri3.css"
import { Bold } from "lucide-react";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab3UdaraMateri3 (){
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
            material_id: 18, // Ganti sesuai ID materi
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
        <div className={`Bab-3-udara-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Peran Pemerintah dan Regulasi
                        </h2>
                        
                        <div className="infografis-course-udara-bab3">
                                                   
                        </div>
                       
                        <h4>
                        1. Mengurangi Penggunaan Kendaraan Pribadi: Langkah Kecil, Dampak Besar                       
                        </h4>

                        <p>
                        Kendaraan bermotor adalah penyumbang utama polusi udara. Dengan mengurangi penggunaan kendaraan pribadi, kita bisa mengurangi polusi udara yang berasal dari gas buang kendaraan.
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>

                        <ul>
                            <li> <span className="line-bold">Mengurangi emisi gas berbahaya </span>yang dihasilkan kendaraan    </li>
                            <li> <span className="line-bold">Meningkatkan kualitas udara di sekitar kita </span></li>
                            <li> <span className="line-bold">Mengurangi kemacetan </span>dan polusi suara</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        🚶‍♀️ Kenapa ini penting?
                        </p>

                        <p>
                        Dengan menggunakan transportasi umum, bersepeda, atau berjalan kaki, kita tidak hanya mengurangi polusi udara tetapi juga menjaga kesehatan tubuh dengan lebih aktif bergerak!
                        </p>
                       
                        <h4>
                        2. Menanam Pohon: Bersihkan Udara dengan Hijau                        
                        </h4>

                        <p>
                        Pohon memiliki kemampuan alami untuk menyaring polutan udara seperti karbon dioksida dan menghasilkan oksigen. Dengan menanam lebih banyak pohon, kita membantu memperbaiki kualitas udara.
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>

                        <ul>
                            <li> <span className="line-bold">Menyerap polutan </span> dan meningkatkan kualitas udara    </li>
                            <li> <span className="line-bold">Menghasilkan oksigen </span> yang penting bagi kehidupan</li>
                            <li> <span className="line-bold">Memperbaiki keanekaragaman hayati </span> di sekitar kita</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        🌱 Kenapa ini penting?
                        </p>

                        <p>
                        Setiap pohon yang kita tanam menjadi penyaring alami polusi, dan memberikan kita udara yang lebih segar dan sehat.
                        </p>
                       
                        <h4>
                        3. Edukasi Lingkungan: Sebarkan Kesadaran, Ciptakan Perubahan                       
                        </h4>

                        <p>
                        Selain tindakan pribadi, kita bisa menyebarkan kesadaran kepada orang lain tentang pentingnya menjaga udara bersih. Dengan mengedukasi orang lain, kita memperluas dampak positif untuk menjaga kualitas udara.
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>

                        <ul>
                            <li> <span className="line-bold">Meningkatkan kesadaran </span>masyarakat terhadap polusi udara    </li>
                            <li> <span className="line-bold">Menumbuhkan rasa tanggung jawab </span> untuk menjaga lingkungan</li>
                            <li> <span className="line-bold">Menciptakan perubahan kolektif </span> yang lebih besar</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        📚 Kenapa ini penting?
                        </p>

                        <p>
                        Edukasi bisa menjadi kunci untuk menciptakan perubahan besar. Setiap orang yang sadar akan pentingnya udara bersih akan lebih berperan dalam menjaga kualitas udara.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}