import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./Bab3AirMateri2.css"
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab3AirMateri2 (){
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
            material_id: 8, // Ganti sesuai ID materi
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
        <div className={`bab-3-air-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Aksi Individu untuk Menjaga Air
                        </h2>

                        <p>
                        Air adalah sumber kehidupan, namun polusi dan krisis air bersih semakin mengancam. Meskipun masalah ini terlihat besar, setiap individu bisa berkontribusi melalui aksi nyata sehari-hari. Berikut tips hemat air dan cara mencegah polusi air yang bisa kamu terapkan mulai sekarang!                        
                        </p>
                        <hr />

                        <h4>
                        1. Gunakan Air Secara Bijak (Hemat Air)
                        </h4>
                        <p>
                        Setiap tetes air yang terbuang memperburuk krisis air bersih. Yuk, kurangi pemakaian air dengan cara :
                        </p>

                        <ul>
                            <li> Matikan keran saat tidak dipakai.    </li>
                            <li> Perbaiki kebocoran pipa.</li>
                            <li> Gunakan shower hemat air.</li>
                            <li> Siram tanaman di pagi/sore hari.</li>
                        </ul>
                        
                        <p>
                        💡 Fakta Menarik :  Menurut UN Water, dengan menghemat air, satu keluarga bisa menghemat hingga  100.000 liter air per tahun!
                        </p>
                        <hr />

                        <h4>
                        2. Stop Buang Sampah ke Sungai & Saluran Air
                        </h4>
                        <p>
                        Sampah plastik dan limbah rumah tangga adalah penyumbang utama polusi air. Dampaknya?
                        </p>

                        <ul>
                            <li >Mencemari ekosistem laut</li>
                            <li >Menyumbat saluran air</li>
                            <li >Mengancam kesehatan</li>
                        </ul>
                        
                        <p className="paragraf-bold">
                        Apa yang Bisa Kamu Lakukan?
                        </p>
                        
                        <ul>
                            <li> 🗑️ Buang sampah pada tempatnya</li>
                            <li> 🔄 Kurangi plastik sekali pakai</li>
                            <li> 🌿 Ikut aksi bersih sungai</li>
                        </ul>
                        <hr />

                        <h4>
                        3. Edukasi Diri & Orang Lain
                        </h4>
                        <p>
                        Perubahan dimulai dari kesadaran! Bagikan pengetahuan tentang pentingnya air bersih dengan :
                        </p>

                        <ul>
                            <li> 📢 Diskusikan isu polusi air   di media sosial atau komunitas.</li>
                            <li> 📚 Pelajari teknologi pengolahan air</li>
                            <li> 👨‍👩‍👧‍👦 Ajarkan anak-anak kebiasaan baik</li>
                        </ul>

                        <div className="infografis-course">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}