import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./Bab3AirMateri1.css"
export default function Bab3AirMateri1 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-3-air-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Pengolahan Limbah Air
                        </h2>
                        <h3>
                        💬 “Air limbah itu kotor dan bau... tapi ternyata bisa dibersihkan dan dimanfaatkan kembali!”
                        </h3>
                        <p>
                        Pernah kepikiran ke mana perginya air limbah dari rumah atau pabrik setelah digunakan? Jawabannya: air limbah itu tidak langsung dibuang ke sungai atau laut, melainkan melalui proses panjang yang disebut <span className="line-bold">pengolahan air limbah.</span>
                        </p>
                        <p>
                        Proses ini sangat penting untuk <span className="line-bold">menjaga lingkungan tetap bersih,</span> mencegah pencemaran, dan bahkan membuat air limbah bisa digunakan kembali untuk keperluan tertentu. Yuk, kita pelajari bagaimana proses ini berjalan dari awal hingga akhir!
                        </p>
                        
                        <h4>
                        ♻️ 1. Pengumpulan dan Pengangkutan
                        </h4>
                        <p>
                        Semua air limbah—baik dari rumah, industri, maupun perkantoran—dikirim melalui jaringan pipa menuju <span className="line-bold">Instalasi Pengolahan Air Limbah (IPAL). </span>                      
                        </p>
                        <p>
                        Di tahap ini, penting untuk memastikan tidak ada kebocoran yang bisa mencemari tanah atau air di sekitarnya. Selain itu, kualitas air limbah juga harus dicek agar pengolahannya sesuai dengan tingkat pencemaran yang ada.                        
                        </p>
                        
                        <h4>
                        🧹 2. Penyaringan Kasar (Screening)
                        </h4>
                        <p>
                        Sebelum diolah lebih lanjut, air limbah melewati saringan besar untuk memisahkan benda padat seperti sampah, plastik, kayu, atau batu.                        
                        </p>
                        <p>
                        Tahap ini penting agar proses selanjutnya tidak tersumbat. Saringan perlu dibersihkan dan diawasi secara rutin agar bekerja maksimal.                        
                        </p>
                        
                        <h4>
                        ⚖️ 3. Pengendapan Primer
                        </h4>
                        <p>
                        Setelah itu, air limbah dialirkan ke bak besar untuk proses <span className="line-bold">pengendapan.</span> Zat-zat padat yang lebih berat akan tenggelam ke dasar dan membentuk <span className="line-bold">lumpur primer.</span> Air yang berada di atas akan melanjutkan proses, sementara endapan akan diproses terpisah. Efisiensi tahap ini bisa diukur lewat kadar partikel tersuspensi (TSS) yang tersisa.                        
                        </p>
                        
                        <h4>
                        🔬 4. Pengolahan Biologis
                        </h4>
                        <p>
                        Ini tahap penting untuk membersihkan bahan organik di air limbah. Mikroorganisme yang disebut “lumpur aktif” digunakan untuk <span className="line-bold">menguraikan kotoran secara alami</span>, dengan bantuan oksigen yang disuplai lewat proses aerasi. Proses ini memecah zat pencemar menjadi lumpur sekunder. Keberhasilan proses ini dipantau lewat parameter BOD (Biochemical Oxygen Demand) dan COD (Chemical Oxygen Demand).                        
                        </p>
                        
                        <h4>
                        🧯 5. Pengendapan Sekunder
                        </h4>
                        <p>
                        Lumpur aktif hasil proses biologis tadi akan kembali diendapkan dan dipisahkan dari air. Sebagian lumpur bisa dipakai ulang dalam proses biologis, sisanya diolah sebagai limbah padat. Air hasil endapan ini sudah jauh lebih bersih, tapi belum selesai sampai di sini.                        
                        </p>
                    
                        <h4>
                        ☀️ 6. Disinfeksi
                        </h4>
                        <p>
                        Sebelum dibuang ke lingkungan, air hasil olahan harus <span className="line-bold">disterilisasi</span> untuk membunuh bakteri dan virus berbahaya. Disinfeksi bisa dilakukan dengan <span className="line-bold">klorin, ozon, atau sinar ultraviolet (UV)</span>. Proses ini memastikan air bebas dari mikroorganisme patogen dan aman dikembalikan ke alam.                        
                        </p>
                    
                        <h4>
                        🌊 7. Pembuangan ke Lingkungan
                        </h4>
                        <p>
                        Setelah melewati semua proses, air yang sudah bersih (disebut <span className="line-bold">effluent</span>) dibuang ke sungai, laut, atau meresap ke dalam tanah. Tapi sebelum itu, kualitas air ini harus dicek ulang dan dibandingkan dengan standar lingkungan. Jika kualitasnya belum memenuhi baku mutu, maka air belum boleh dilepas ke alam.                        
                        </p>
                        <p>
                        Selain itu, monitoring juga dilakukan terhadap <span className="line-bold">air sungai dan laut di sekitar titik pembuangan</span>air sungai dan laut di sekitar titik pembuangan untuk mengevaluasi apakah ada dampak lingkungan yang timbul.                        
                        </p>
                       
                        <div className="infografis-course">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}