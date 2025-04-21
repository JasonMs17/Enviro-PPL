import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import Infografis  from "../../../../assets/Course/Polusi-Udara/UDARA-SUB-BAB 2-MATERI-3.png";
import "./bab2UdaraMateri3.css"
import { Bold } from "lucide-react";
export default function Bab2UdaraMateri3 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-2-udara-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Siapa yang Paling Terdampak?
                        </h2>
                        
                        <div className="infografis-course-udara-bab2">
                            <img src={Infografis} alt="" />
                        </div>

                        <h4>
                            1. Anak-anak: Sensitif terhadap Polusi Udara
                        </h4>
                        <p>
                        Anak-anak adalah kelompok yang sangat rentan terhadap dampak polusi udara. Kenapa? Karena sistem pernapasan mereka masih berkembang, dan mereka lebih sering terpapar polusi saat beraktivitas di luar ruangan. Bayangkan, polusi udara bisa memengaruhi perkembangan paru-paru mereka, bahkan meningkatkan risiko penyakit pernapasan seperti asma.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>
                        <ul>
                            <li><span className="line-bold">Asma</span> yang lebih sering kambuh</li>
                            <li><span className="line-bold">Gangguan perkembangan paru-paru</span> yang bisa berpengaruh jangka panjang</li>
                            <li><span className="line-bold">Peningkatan risiko infeksi saluran pernapasan</span> yang lebih berat</li>
                        </ul>
                        <h4>
                        ⚠️ Kenapa ini penting?                       
                        </h4>
                        <p>
                        Paparan polusi jangka panjang bisa menghambat kemampuan anak untuk tumbuh dan berkembang secara optimal. Melindungi mereka dari polusi udara berarti memberikan masa depan yang lebih sehat.
                        </p>

                        <h4>
                        2. Lansia: Risiko Lebih Tinggi di Usia Tua
                        </h4>
                        <p>
                        Semakin tua usia kita, semakin lemah daya tahan tubuh kita, termasuk kemampuan kita melawan efek buruk polusi udara. Lansia adalah kelompok yang sangat rentan, terutama bagi mereka yang sudah menderita penyakit kronis.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>
                        <ul>
                            <li><span className="line-bold">Peningkatan risiko serangan jantung</span> dan <span className="line-bold">stroke</span> akibat gangguan pembuluh darah</li>
                            <li><span className="line-bold">Penyakit paru-paru</span> yang semakin parah</li>
                            <li><span className="line-bold">Penurunan fungsi jantung, </span> meningkatkan risiko kematian mendadak</li>
                        </ul>
                        <h4>
                        🚨 Kenapa ini penting?                     
                        </h4>
                        <p>
                        Lansia yang terpapar polusi udara tidak hanya menghadapi gangguan kesehatan jangka pendek, tetapi bisa memperburuk kondisi kesehatan yang sudah ada, mempercepat penuaan sistem tubuh mereka.
                        </p>

                        <h4>
                        3. Penderita Penyakit Kronis: Beban Ganda bagi Kesehatan
                        </h4>
                        <p>
                        Bagi mereka yang sudah mengidap penyakit kronis seperti <span className="line-bold">asma, penyakit jantung,</span> atau <span className="line-bold">diabetes,</span> polusi udara bisa menjadi “musuh ganda”. Selain memperburuk kondisi yang sudah ada, polusi juga meningkatkan risiko komplikasi yang lebih serius.                       
                        </p>

                        <p className="paragraf-bold">
                        Dampaknya:
                        </p>
                        <ul>
                            <li><span className="line-bold">Serangan asma</span> yang lebih sering dan lebih berat</li>
                            <li><span className="line-bold">Peningkatan risiko serangan jantung</span>dan <span className="line-bold">stroke</span></li>
                            <li><span className="line-bold">Gangguan kesehatan sistem tubuh</span> yang lebih cepat berkembang</li>
                        </ul>
                        <h4>
                        💡 Kenapa ini penting?                      
                        </h4>
                        <p>
                        Mengurangi paparan terhadap polusi udara sangat krusial untuk penderita penyakit kronis agar mereka bisa lebih mudah mengelola kondisi kesehatan mereka dan mengurangi gejala yang timbul akibat polusi.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}