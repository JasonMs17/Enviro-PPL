import { useState } from "react";
import "./Bab2TanahMateri2.css"
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-2-MATERI-2.png";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab2TanahMateri2 (){
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
            material_id: 23, // Ganti sesuai ID materi
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
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Risiko Kesehatan Akibat Polusi Tanah
                        </h2>
                        <div className="infografis-course-tanah-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                        <h3>
                        💬 “Polusi tanah bukan hanya masalah lingkungan, tapi juga ancaman serius bagi kesehatan kita. Bagaimana polusi tanah mempengaruhi tubuh kita?”
                        </h3>
                        <p>
                        Ketika tanah tercemar, dampaknya tidak hanya dirasakan oleh lingkungan sekitar, tetapi juga oleh kesehatan manusia. Polutan yang terkandung dalam tanah bisa masuk ke dalam tubuh kita melalui tanaman yang kita konsumsi atau melalui kontak langsung dengan tanah yang tercemar. Dampak kesehatan yang ditimbulkan sangat berbahaya, mulai dari gangguan sistem saraf hingga kanker.
                        </p>

                        <h4>
                        Gangguan Sistem Saraf
                        </h4>
                        <p>
                        Paparan terhadap polusi tanah yang mengandung logam berat seperti timbal, merkuri, dan arsenik dapat merusak sistem saraf manusia. Anak-anak lebih rentan terhadap dampak ini, karena otak mereka masih berkembang. Efek jangka panjangnya dapat mengurangi kemampuan kognitif dan memengaruhi perkembangan otak mereka.
                        </p>
                    
                        <p className="paragraf-bold">
                        Dampaknya pada Kesehatan:
                        </p>
                        <ul>
                            <li>Gangguan pada perkembangan otak anak-anak</li>
                            <li>Penurunan kemampuan belajar dan daya ingat</li>
                            <li>Kerusakan saraf permanen pada orang dewasa</li>
                        </ul>


                        <h4>
                        Kanker
                        </h4>
                        <p>
                        Logam berat dan bahan kimia berbahaya yang terkandung dalam tanah tercemar dapat memasuki tubuh melalui makanan yang kita konsumsi. Senyawa seperti arsenik dan cadmium sangat berbahaya karena mereka dapat menyebabkan mutasi sel yang berujung pada kanker.
                        </p>
                    
                        <p className="paragraf-bold">
                        Dampaknya pada Kesehatan:
                        </p>
                        <ul>
                            <li>Peningkatan risiko kanker paru-paru, ginjal, dan kulit</li>
                            <li>Kanker darah (leukemia) akibat paparan logam berat</li>
                            <li>Kerusakan DNA yang meningkatkan kemungkinan terjadinya kanker</li>
                        </ul>

                        <h4>
                        Penyakit Kulit
                        </h4>
                        <p>
                        Paparan tanah yang tercemar dapat menyebabkan gangguan pada kulit. Zat kimia berbahaya yang ada di tanah bisa merusak lapisan pelindung kulit, menyebabkan iritasi, luka, atau bahkan infeksi. Tanah yang tercemar juga bisa menjadi tempat berkembang biaknya patogen berbahaya yang dapat menyebabkan penyakit kulit.
                        </p>
                    
                        <p className="paragraf-bold">
                        Dampaknya pada Kesehatan:
                        </p>
                        <ul>
                            <li>Iritasi kulit dan ruam</li>
                            <li>Infeksi kulit yang bisa berkembang menjadi lebih parah</li>
                            <li>Risiko gangguan kulit jangka panjang</li>
                        </ul>

                        <h4>
                        Gangguan Reproduksi
                        </h4>
                        <p>
                        Polusi tanah juga berisiko menyebabkan gangguan reproduksi, terutama akibat paparan bahan kimia berbahaya seperti pestisida dan bahan kimia industri. Zat-zat ini dapat mengganggu keseimbangan hormon tubuh, yang mengarah pada kesulitan hamil, gangguan menstruasi, dan peningkatan risiko kelahiran prematur.
                        </p>
                    
                        <p className="paragraf-bold">
                        Dampaknya pada Kesehatan:
                        </p>
                        <ul>
                            <li>Gangguan kesuburan dan reproduksi</li>
                            <li>Risiko kelahiran prematur</li>
                            <li>Gangguan pada kesehatan seksual</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}