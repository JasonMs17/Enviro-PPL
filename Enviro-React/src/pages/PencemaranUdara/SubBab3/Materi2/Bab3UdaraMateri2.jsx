import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab3UdaraMateri2.css"
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab3udaraMateri2 (){
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
            material_id: 17, // Ganti sesuai ID materi
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
        <div className={`bab-3-udara-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
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
                        1. Standar Emisi: Aturan untuk Menjaga Udara Bersih                        
                        </h4>

                        <p>
                        Pemerintah melalui standar emisi mengatur jumlah polutan yang boleh dilepaskan oleh kendaraan, pabrik, dan industri. Di Indonesia, regulasi seperti standar Euro 4 mengatur emisi kendaraan bermotor, sementara di negara maju seperti Eropa dan Amerika, regulasi ini bahkan lebih ketat untuk mengurangi gas rumah kaca.
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>

                        <ul>
                            <li> <span className="line-bold">Pengurangan gas berbahaya </span>seperti karbon monoksida dan nitrogen oksida    </li>
                            <li> <span className="line-bold">Meningkatkan kualitas udara </span>dan mengurangi risiko penyakit pernapasan</li>
                            <li> <span className="line-bold">Mengurangi polusi udara </span>dari kendaraan dan pabrik</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        🌍 Kenapa ini penting?
                        </p>

                        <p>
                        Regulasi yang ketat dapat menurunkan jumlah polutan yang dilepaskan ke udara, yang pada gilirannya akan membuat lingkungan hidup lebih sehat untuk kita semua.
                        </p>
                       
                        <h4>
                        2. Regulasi Industri: Mengontrol Polusi dari Pabrik                        
                        </h4>

                        <p>
                        Industri adalah salah satu penyumbang terbesar pencemaran udara. Oleh karena itu, pemerintah memiliki kewajiban untuk memastikan perusahaan mematuhi standar emisi yang telah ditetapkan. Di Indonesia, perusahaan-perusahaan besar harus mematuhi aturan pengolahan limbah dan emisi yang mengatur polusi udara.
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>

                        <ul>
                            <li> <span className="line-bold">Pabrik yang mematuhi regulasi </span> dapat mengurangi emisi gas berbahaya    </li>
                            <li> <span className="line-bold">Kualitas udara yang lebih baik </span> di sekitar area industri</li>
                            <li> <span className="line-bold">Kesehatan masyarakat yang terjaga </span> dari dampak polusi industri</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        🌱 Kenapa ini penting?
                        </p>

                        <p>
                        Regulasi industri berfungsi sebagai penghalang untuk pembangkangan terhadap hukum lingkungan dan memastikan bahwa pabrik tidak merusak kualitas udara yang kita hirup.
                        </p>
                       
                        <h4>
                        3. Transportasi Ramah Lingkungan: Menurunkan Polusi di Jalan Raya                        
                        </h4>

                        <p>
                        Pemerintah juga memainkan peran penting dalam mengurangi polusi dari sektor transportasi. Salah satunya adalah dengan mendorong penggunaan <span className="line-bold">kendaraan ramah lingkungan</span> seperti kendaraan listrik dan menyediakan <span className="line-bold">transportasi umum</span> yang efisien dan ramah lingkungan
                        </p>
                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>

                        <ul>
                            <li> <span className="line-bold">Pengurangan emisi CO2 </span> dari kendaraan bermotor    </li>
                            <li> <span className="line-bold">Kualitas udara yang lebih bersih </span> dengan lebih sedikit kendaraan pribadi</li>
                            <li> <span className="line-bold">Lebih banyak kendaraan listrik </span> yang bebas polusi</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        🚀 Kenapa ini penting?
                        </p>

                        <p>
                        Transportasi ramah lingkungan mengurangi polusi udara secara signifikan, meningkatkan kualitas hidup, dan mengurangi emisi yang menyebabkan pemanasan global.
                        </p>


                        
                    </div>
                </div>
            </div>
        </div>
    );
}