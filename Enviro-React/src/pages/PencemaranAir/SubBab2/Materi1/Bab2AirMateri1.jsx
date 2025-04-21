import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./Bab2AirMateri1.css"
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab2AirMateri1 (){
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
            material_id: 4, // Ganti sesuai ID materi
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
        <div className={`Bab-2-air-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Air Tercemar dan Penyakit
                        </h2>
                        <h3>
                        💬 “Kelihatannya jernih, tapi bisa membawa penyakit...”
                        </h3>
                        <p>
                        Air yang terlihat bersih belum tentu aman. Tanpa kita sadari, air yang tercemar bisa membawa jutaan bakteri, virus, dan zat berbahaya yang mengancam kesehatan—terutama jika digunakan untuk minum, mandi, memasak, atau mencuci makanan.
                        </p>
                        <p>
                        Di materi ini, kamu akan mempelajari berbagai <span className="line-bold">penyakit yang sering muncul akibat pencemaran air</span> , serta mengapa air bersih itu sangat penting untuk menjaga kesehatan kita, khususnya anak-anak dan kelompok rentan.
                        </p>
                        
                        <h4>
                        1️⃣ Diare: Penyakit yang Paling Umum
                        </h4>
                        <p>
                        Diare adalah penyakit yang paling sering muncul akibat pencemaran air—dan balita adalah kelompok yang paling rentan. Penyebabnya bukan hanya karena minum air kotor, tapi juga karena kurangnya akses air bersih untuk cuci tangan, mandi, dan menyiapkan makanan.
                        </p>
                        <p>
                        Diare yang dibiarkan bisa menyebabkan dehidrasi parah, bahkan malnutrisi. Anak yang kurang gizi jadi lebih mudah terkena infeksi lain, menciptakan siklus penyakit yang berbahaya.
                        </p>
                        
                        <h4>
                        1️⃣ Diare: Penyakit yang Paling Umum
                        </h4>
                        <p>
                        Diare adalah penyakit yang paling sering muncul akibat pencemaran air—dan balita adalah kelompok yang paling rentan. Penyebabnya bukan hanya karena minum air kotor, tapi juga karena kurangnya akses air bersih untuk cuci tangan, mandi, dan menyiapkan makanan.
                        </p>
                        <p>
                        Diare yang dibiarkan bisa menyebabkan <span className="line-bold">dehidrasi berat</span>, bahkan <span className="line-bold">malnutrisi</span>. Anak yang kurang gizi jadi lebih mudah terkena infeksi lain, menciptakan siklus penyakit yang berbahaya.
                        </p>
                        
                        <h4>
                        2️⃣ Kolera: Menyebar Lewat Air Kotor
                        </h4>
                        <p>
                        Kolera adalah penyakit diare akut yang disebabkan oleh bakteri Vibrio cholerae. Bakteri ini menyebar lewat konsumsi air tercemar dan biasa muncul di wilayah dengan sanitasi buruk dan minim air bersih.                        
                        </p>
                        <p>
                        Gejala kolera bisa muncul dengan sangat cepat, dan jika tidak segera ditangani, bisa menyebabkan <span className="line-bold">dehidrasi berat</span> hingga kematian.                        
                        </p>
                        
                        <h4>
                        3️⃣ Tipes (Demam Tifoid)
                        </h4>
                        <p>
                        Tipes disebabkan oleh bakteri <span className="italic-line">Salmonella typhi</span>, yang juga menyebar lewat air atau makanan yang terkontaminasi. Kurangnya akses terhadap air bersih untuk minum dan kebersihan diri dapat meningkatkan risiko terkena tipes.                        
                        </p>
                        <p>
                        Penyakit ini cukup umum di daerah padat penduduk dengan sistem sanitasi yang tidak memadai.
                        </p>
                        
                        <h4>
                        4️⃣ Hepatitis A: Infeksi Hati dari Air yang Tercemar
                        </h4>
                        <p>
                        Virus hepatitis A bisa menyebar lewat konsumsi air atau makanan yang tidak bersih. Akibatnya, organ hati mengalami peradangan. Walau hepatitis A biasanya tidak menyebabkan penyakit hati kronis, infeksi berat bisa memicu <span className="line-bold">gagal hati akut</span> yang berbahaya.                        </p>
                        <p>
                        Kebiasaan mencuci tangan dan menjaga kebersihan air sangat penting untuk mencegah penularannya.                        
                        </p>

                        
                        <h4>
                        5️⃣ Iritasi dan Penyakit Kulit
                        </h4>
                        <p>
                        Air yang tercemar juga bisa merusak kulit. Kontak langsung dengan air yang mengandung bakteri, parasit, atau logam berat bisa menyebabkan iritasi, gatal, dan infeksi.
                        </p>
                        <p>
                        Dalam kasus tertentu, air tercemar bisa memicu penyakit kulit serius seperti:
                        </p>
                        <ul>
                            <li>Skabies</li>
                            <li>Infeksi karena arsenik</li>
                            <li>Bahkan kanker kulit jika terpapar dalam jangka panjang</li>
                        </ul>
                        
                        <h4>
                        6️⃣ Kanker: Ancaman Jangka Panjang
                        </h4>
                        <p>
                        Beberapa jenis polutan air—seperti arsenik, nitrat, dan kromium—dapat meningkatkan risiko kanker jika terkonsumsi dalam waktu lama.
                        </p>
                        <p className="paragraf-bold">
                        Jenis kanker yang bisa muncul akibat air tercemar:
                        </p>
                        <ul>
                            <li>Kanker lambung</li>
                            <li>Kanker ginjal</li>
                            <li>Kanker usus</li>
                        </ul>
                        <p>
                        Selain itu, bahan kimia seperti <span className="line-bold">BPA</span> pada kemasan plastik yang mencemari air juga dikaitkan dengan peningkatan risiko kanker.
                        </p>
                        <div className="infografis-course">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}