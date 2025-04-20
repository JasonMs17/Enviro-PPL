import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab3UdaraMateri1.css"
export default function Bab3UdaraMateri1 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-3-udara-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Inovasi di Kota-Kota Besar untuk Mengatasi Polusi Udara
                        </h2>
                        <h3>
                        💬 “Kalau kota besar penyebab utama polusi, bisa gak sih mereka juga jadi solusinya?”
                        </h3>
                        <p>
                        Jawabannya: bisa banget.
                        </p>
                        <p>
                        Banyak kota besar di dunia—yang sebelumnya dikenal sebagai penyumbang polusi udara terbesar—kini justru menjadi pionir dalam mencari <span className="line-bold">inovasi ramah lingkungan.</span> Dari transportasi publik yang efisien hingga zona rendah emisi, berbagai langkah kreatif mulai diterapkan untuk memperbaiki kualitas udara.
                        </p>
                        <hr />

                        <h4>
                        🎥 Sebelum lanjut, yuk lihat contoh nyatanya dalam video berikut:
                        </h4>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/3F6mq20QOcE?si=M0QDD5M6qGPzpCDj"
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
                        Video ini menampilkan bagaimana kota-kota besar melakukan berbagai upaya luar biasa untuk mengatasi krisis udara. Tonton dulu sebagai gambaran, lalu lanjut baca untuk penjelasan yang lebih detail!                      
                        </p>
                        <hr />
                        
                        <h4>
                        🌁 1. Seoul, Korea Selatan – Ruang Hijau di Tengah Kota                        
                        </h4>
                        
                        <p>
                        Dulu penuh jalan layang, sekarang Seoul mengubah bekas jalan tol menjadi <span className="line-bold">taman kota besar</span> bernama Cheonggyecheon Stream.
                        </p>
                        <p>
                        Upaya lainnya:                        
                        </p>
                        <ul>
                            <li>Pengembangan transportasi publik masif</li>
                            <li>Pembatasan kendaraan pribadi di area padat</li>
                            <li>Pemantauan kualitas udara real-time di berbagai titik kota</li>
                        </ul>
                        
                        <p>
                        💡 Hasilnya: peningkatan kualitas udara + ruang publik yang lebih sehat untuk warganya.
                        </p>
                        <hr />
                        
                        <h4>
                        🚦 2. London, Inggris – Zona Emisi Ultra Rendah                       
                        </h4>
                        
                        <p>
                        London menerapkan  <span className="line-bold">ULEZ (Ultra Low Emission Zone),</span>  yaitu area di mana hanya kendaraan rendah emisi yang boleh melintas. Mobil tua dan kendaraan berpolusi tinggi dikenai biaya tinggi jika ingin masuk.
                        </p>
                        <p>
                        Langkah lain:                        
                        </p>
                        <ul>
                            <li>Transportasi umum berbasis listrik & hibridaf</li>
                            <li>Jalur sepeda aman & luas</li>
                            <li>Pajak emisi kendaraan</li>
                        </ul>
                        
                        <p>
                        💡 Efeknya: emisi NO₂ di pusat kota menurun drastis dalam 1 tahun.
                        </p>
                        <hr />
                        
                        <h4>
                        🏭 3. Delhi, India – Gerakan Lawan Asap                        
                        </h4>
                        
                        <p>
                        Delhi mengalami polusi ekstrem hingga masuk kategori “berbahaya”. Pemerintah pun:
                        </p>

                        <ul>
                            <li>Menutup pembangkit listrik tenaga batu bara di dalam kota</li>
                            <li>Membatasi aktivitas industri saat indeks kualitas udara (AQI) melewati ambang bahaya</li>
                            <li>Menggunakan alat “smog tower” yang menyedot dan menyaring udara kotor</li>
                        </ul>
                        
                        <p>
                        💡 Program edukasi publik juga digencarkan lewat kampanye "Odd-Even" (plat nomor ganjil-genap).
                        </p>
                        <hr />
                        
                        <h4>
                        🚌 4. Jakarta, Indonesia – Perbaikan Transportasi Masif                        
                        </h4>
                        
                        <p>
                        Jakarta mulai melakukan transformasi besar:
                        </p>

                        <ul>
                            <li>Integrasi transportasi umum (TransJakarta, MRT, LRT)</li>
                            <li>Uji emisi kendaraan pribadi</li>
                            <li>Program langit biru dan penghijauan kota</li>
                        </ul>
                        
                        <p>
                        💡 Meskipun masih dalam proses, langkah ini menunjukkan komitmen kota terhadap udara lebih bersih.
                        </p>
                        <hr />

                    </div>
                </div>
            </div>
        </div>
    );
}