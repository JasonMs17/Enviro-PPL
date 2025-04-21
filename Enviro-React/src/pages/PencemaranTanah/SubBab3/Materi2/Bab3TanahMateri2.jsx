import { useState } from "react";
import "./Bab3TanahMateri2.css"
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
export default function Bab3TanahMateri2 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`bab-3-tanah-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Teknologi Pengendalian & Pemulihan Tanah
                        </h2>
                    
                       
                        <h3>
                        💬 “Tanah bisa sakit, tapi kabar baiknya—tanah juga bisa disembuhkan.”                      
                        </h3>

                        <p>
                        Tanah yang tercemar bukan akhir dari segalanya. Berkat kemajuan ilmu lingkungan, kini tersedia berbagai teknologi pemulihan tanah (soil remediation) yang dapat mengurangi bahkan menghilangkan pencemar berbahaya dari tanah. Proses ini penting untuk mengembalikan kesuburan, menjaga keamanan pangan, dan melindungi air tanah.
                        </p>
                        <p>
                        Di materi ini, kita akan belajar beberapa metode pemulihan tanah yang terbukti efektif—baik secara alami maupun teknologi modern.   
                        </p>
                        <hr />
                         
                        <h4>
                        🎥 Sebelum mulai, yuk tonton video berikut:
                        </h4>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/azB4TGPIuFo?si=YAXByBF1G1hGEsvz" 
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            }}
                        ></iframe>
                        </div>
                        <p>
                        Dalam video ini, kamu akan melihat beragam pendekatan yang digunakan untuk memperbaiki tanah yang tercemar, mulai dari penggunaan mikroba, tanaman, hingga teknologi panas dan isolasi.  
                        </p>
                        <hr />
                        
                        <h4>
                        1. Bioremediasi
                        </h4>
                        <p>
                        Bioremediasi menggunakan mikroorganisme alami seperti bakteri atau jamur untuk memecah zat pencemar menjadi bentuk yang tidak berbahaya. Metode ini cocok untuk tanah yang terkontaminasi minyak, pestisida, dan limbah organik.
                        </p>
                        <p className="paragraf-bold">
                        Kelebihan:
                        </p>

                        <ul>
                            <li> Ramah lingkungan</li>
                            <li> Biaya relatif terjangkau</li>
                            <li> Tidak merusak struktur tanah</li>
                        </ul>
                        
                        <p>
                        <span className="line-bold">Contoh:</span> Tanah bekas tumpahan minyak dipulihkan dengan bakteri pemakan hidrokarbon.
                        </p>
                        <hr />

                        <h4>
                        2. Fitoremediasi
                        </h4>
                        <p>
                        Fitoremediasi memanfaatkan tanaman tertentu untuk menyerap, menetralkan, atau menguraikan polutan dalam tanah. Tanaman seperti bunga matahari, kenikir, dan jagung sering digunakan untuk menyerap logam berat seperti timbal dan arsenik.
                        </p>
                        <p className="paragraf-bold">
                        Kelebihan:
                        </p>

                        <ul>
                            <li> Estetis (karena memakai tanaman)</li>
                            <li> Bisa dilakukan di lahan terbuka, bahkan pekarangan</li>
                            <li> Dukung biodiversitas lokal</li>
                        </ul>
                        <hr />
                        
                        <h4>
                        3. Remediasi Termal
                        </h4>
                        <p>
                        Dalam metode ini, tanah dipanaskan untuk menguapkan atau memecah zat pencemar, terutama senyawa organik volatil (VOC) dan minyak berat.
                        </p>
                        <p className="paragraf-bold">
                        Teknologi ini efektif untuk:
                        </p>

                        <ul>
                            <li> Limbah industri berat</li>
                            <li> Tanah tercemar hidrokarbon</li>
                            <li> Area bekas zona militer atau tambang</li>
                        </ul>
                        
                        <p>
                        <span className="line-bold">Contoh:</span> Membutuhkan energi tinggi, tapi efektif untuk kontaminasi berat.
                        </p>
                        <hr />

                        <h4>
                        4. Solidifikasi & Stabilisasi
                        </h4>
                        <p>
                        Metode ini mencampurkan bahan tambahan seperti semen atau bahan pengikat lain ke dalam tanah, untuk <span className="line-bold">mengunci</span> polutan agar tidak menyebar ke air tanah.
                        </p>
                        <p className="paragraf-bold">
                        Digunakan pada:
                        </p>

                        <ul>
                            <li> Limbah B3</li>
                            <li> Tanah dengan logam berat tinggi</li>
                            <li> Situs industri tidak aktif</li>
                        </ul>
                        
                        
                        <h4>
                        5. Kompos & Pupuk Organik
                        </h4>
                        <p>
                        Meski bukan teknologi pemulihan langsung, kompos dan pupuk organik bisa membantu memperbaiki struktur dan mikroba tanah setelah proses remediasi.
                        </p>
                        <p className="paragraf-bold">
                        Manfaatnya:
                        </p>

                        <ul>
                            <li> Mengembalikan kesuburan tanah</li>
                            <li> Menambah nutrisi alami</li>
                            <li> Mendukung bioremediasi secara tidak langsung</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}