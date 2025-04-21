import { useState } from "react";
import "./Bab1TanahMateri2.css"
import { Bold } from "lucide-react";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-1-MATERI-2.png";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab1TanahMateri2 (){
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
            material_id: 20, // Ganti sesuai ID materi
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
        <div className={`Bab-1-tanah-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Dampak Polusi Tanah terhadap Lingkungan
                        </h2>
                        <div className="infografis-course-tanah-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                        <h3>
                        💬 “Tanah yang kita pijak bisa jadi lebih kotor dari yang kita bayangkan. Tapi, kita bisa mulai mengubahnya dari sekarang.”
                        </h3>
                        <p>
                        Polusi tanah adalah masalah yang seringkali tidak terlihat, namun dampaknya bisa sangat besar dan berjangka panjang. Tanah yang tercemar membawa dampak serius, tidak hanya bagi lingkungan tetapi juga bagi kehidupan manusia dan makhluk hidup lainnya. Beberapa macam dampak polusi tanah antara lain adalah sebagai berikut:
                        </p>
                        
                        <h4>
                        Menurunkan Kesuburan Tanah                        
                        </h4>
                        
                        <p>
                        Salah satu dampak terbesar dari polusi tanah adalah penurunan kesuburan tanah. Tanah yang tercemar oleh bahan kimia, logam berat, atau sampah plastik kehilangan kemampuan alaminya untuk mendukung pertumbuhan tanaman. Polutan yang meresap ke dalam tanah merusak struktur tanah dan menghambat kemampuannya untuk menyerap air dan unsur hara. Tanah yang kehilangan kesuburannya akan berdampak langsung pada hasil pertanian yang menurun.                       
                        </p>

                        <p className="paragraf-bold">
                        Mengapa ini penting?                       
                        </p>

                        <ul>
                            <li>Tanaman akan kesulitan tumbuh karena tanah yang tak subur.</li>
                            <li>Produksi pangan menurun, dan ini berisiko mengancam ketahanan pangan kita di masa depan.</li>
                            <li>Dampak ini tidak hanya dirasakan di satu tempat, tetapi dapat menyebar lebih luas.</li>
                        </ul>
                        
                        <h4>
                        Menurunkan Produktivitas Tanah                        
                        </h4>
                        
                        <p>
                        Tanah yang tercemar tidak hanya kehilangan kesuburannya, tetapi juga produktivitasnya. Ketika tanah kehilangan kemampuannya untuk menyerap air dan nutrisi, tanah tersebut juga kehilangan fungsi utamanya dalam mendukung kehidupan tanaman. Tanaman yang ditanam di tanah yang tercemar tidak dapat tumbuh dengan optimal, dan ini langsung berpengaruh pada hasil panen yang jauh dari harapan.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Tanah tidak lagi dapat menyediakan hasil yang maksimal untuk pertanian.</li>
                            <li>Kualitas produk pangan menurun, dan ini bisa mengurangi pendapatan petani.</li>
                            <li>Meningkatkan biaya produksi pertanian karena kebutuhan tambahan untuk memperbaiki kualitas tanah.</li>
                        </ul>
                        
                        <h4>
                        Tanah Kehilangan Nutrisi yang Terkandung Di Dalamnya                        
                        </h4>
                        
                        <p>
                        Tanah yang sehat mengandung berbagai unsur hara yang sangat penting untuk pertumbuhan tanaman. Namun, ketika tanah tercemar, banyak nutrisi yang terkandung di dalamnya hilang. Polusi tanah mengganggu proses alami yang memberikan keseimbangan bagi tanaman. Tanah yang tercemar tidak bisa lagi menyuplai nutrisi yang dibutuhkan oleh tanaman, yang mengakibatkan tanaman tumbuh dengan kondisi yang buruk.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Tanaman yang tumbuh di tanah tercemar menjadi lemah, layu, dan lebih rentan terhadap penyakit.</li>
                            <li>Kehilangan daya dukung tanah menyebabkan tanaman tidak dapat tumbuh dengan baik.</li>
                            <li>Tanah tidak lagi menjadi tempat yang baik bagi pertumbuhan tanaman, merusak ekosistem lokal.</li>
                        </ul>
                        
                        <h4>
                        Terganggunya Keseimbangan Flora dan Fauna di Dalam Tanah                        
                        </h4>
                        
                        <p>
                        Tanah tidak hanya rumah bagi tanaman, tetapi juga bagi mikroorganisme dan fauna tanah lainnya. Mikroba seperti cacing, jamur, dan bakteri sangat penting untuk menjaga kesuburan tanah. Namun, polusi tanah mengancam kehidupan mereka. Ketika tanah tercemar, flora dan fauna tanah terganggu dan kehilangan keseimbangannya. Kehidupan yang bergantung pada tanah yang sehat akan terganggu dan dapat menyebabkan kehancuran ekosistem yang lebih luas.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Flora dan fauna tanah yang hilang akan merusak keseimbangan ekosistem.</li>
                            <li>Gangguan pada mikroorganisme menyebabkan penurunan kualitas tanah secara keseluruhan.</li>
                            <li>Kehilangan keanekaragaman hayati tanah mengurangi fungsi ekologis tanah itu sendiri.</li>
                        </ul>
                        
                        <h4>
                        Mengganggu Pertumbuhan Tanaman                        
                        </h4>
                        
                        <p>
                        Tanah yang tercemar langsung mempengaruhi pertumbuhan tanaman. Polusi tanah mengganggu struktur tanah dan mengurangi kemampuannya untuk mendukung pertumbuhan tanaman dengan baik. Tanaman yang tumbuh di tanah yang tercemar sering kali tidak dapat berkembang dengan baik, bahkan bisa menjadi kerdil dan layu. Tanah yang tidak sehat memengaruhi kualitas dan kuantitas hasil pertanian, yang pada akhirnya berpengaruh pada ketahanan pangan kita.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Tanaman menjadi kurang sehat dan produktif.</li>
                            <li>Tanah yang tercemar menghalangi proses fotosintesis yang efisien.</li>
                            <li>Hasil pertanian menurun, dan petani mengalami kerugian ekonomi.</li>
                        </ul>
                        
                        <h4>
                        Meningkatkan Salinitas Tanah                        
                        </h4>
                        
                        <p>
                        Polusi tanah juga dapat meningkatkan salinitas tanah, yang berarti peningkatan kadar garam dalam tanah. Ini mengurangi kemampuan tanah untuk mendukung vegetasi dan membuat tanah menjadi tidak subur. Peningkatan salinitas ini menyebabkan tanah menjadi tandus dan tidak bisa digunakan untuk bertani atau menanam tanaman.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Tanah menjadi tidak bisa digunakan untuk tanaman yang membutuhkan tanah subur.</li>
                            <li>Meningkatnya kesulitan dalam bertani karena tanah menjadi sangat keras dan kering.</li>
                            <li>Mengurangi kapasitas tanah untuk menyerap air dengan baik, membuat tanaman kesulitan tumbuh.</li>
                        </ul>
                        
                        <h4>
                        Menimbulkan Bau yang Tidak Sedap                        
                        </h4>
                        
                        <p>
                        Polusi tanah juga dapat menimbulkan bau yang tidak sedap. Bau ini biasanya berasal dari sampah atau limbah yang terdegradasi di dalam tanah. Tanah yang tercemar tidak hanya merusak kualitas lingkungan, tetapi juga mengganggu kenyamanan hidup kita. Bau tak sedap yang terus-menerus bisa mengganggu aktivitas kita sehari-hari.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Bau tidak sedap mengganggu kenyamanan hidup di sekitar area yang tercemar.</li>
                            <li>Dapat mengurangi kualitas hidup masyarakat yang tinggal di sekitar tanah tercemar.</li>
                            <li>Meningkatkan ketidaknyamanan lingkungan sekitar.</li>
                        </ul>
                        
                        <h4>
                        Menyebabkan Pencemaran Udara                        
                        </h4>
                        
                        <p>
                        Tanah yang tercemar juga dapat menyebabkan pencemaran udara. Debu dan partikel kecil yang dihasilkan oleh tanah yang tercemar akan terbawa angin dan mencemari udara. Ini dapat memperburuk kualitas udara di sekitar kita, membuatnya lebih kotor dan berisiko bagi kesehatan.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Menyebabkan pencemaran udara yang lebih parah.</li>
                            <li>Mengurangi kualitas hidup dengan memperburuk kualitas udara.</li>
                            <li>Meningkatkan risiko penyakit pernapasan bagi orang yang terpapar debu beracun.</li>
                        </ul>
                        
                        <h4>
                        Merusak Ekosistem                        
                        </h4>
                        
                        <p>
                        Polusi tanah juga merusak ekosistem darat secara keseluruhan. Tanah yang tercemar tidak hanya merusak tanaman, tetapi juga mengganggu keseimbangan flora dan fauna di dalamnya. Ketika tanah kehilangan kesuburannya, ekosistem yang bergantung padanya pun mulai hancur, menyebabkan kerusakan yang meluas bagi kehidupan di sekitar tanah tersebut.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:                       
                        </p>

                        <ul>
                            <li>Kerusakan ekosistem darat yang mengganggu kehidupan makhluk hidup.</li>
                            <li>Kehilangan keanekaragaman hayati yang sangat penting untuk keseimbangan alam.</li>
                            <li>Gangguan pada rantai makanan, yang mempengaruhi seluruh ekosistem.</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}