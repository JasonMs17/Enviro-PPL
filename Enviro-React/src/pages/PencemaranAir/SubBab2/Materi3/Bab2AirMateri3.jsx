import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./bab2AirMateri3.css"
import { Bold } from "lucide-react";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab2AirMateri3 (){
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
            material_id: 6, // Ganti sesuai ID materi
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
        <div className={`Bab-2-air-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >   
                        <h2 dir="ltr">
                        Menentukan Air Aman Dikonsumsi
                        </h2>
                        <p>
                        🎥 Ayo nonton video menarik ini dulu, biar kamu lebih kebayang soal gimana cara menentukan air yang aman buat dikonsumsi!
                        </p>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/G244Q4AGJ7U?si=iMLE3Wb_av5yWMuw" 
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
                        <h3>
                        🤔 Air Jernih Belum Tentu Aman
                        </h3>
                        <p>
                        Air yang terlihat jernih belum tentu bebas dari bahaya. Bisa saja ada zat kimia, bakteri, atau logam berat tersembunyi yang tak terlihat mata. Karena itu, penting banget untuk tahu <span className="line-bold">ciri-ciri air yang aman dikonsumsi,</span> apalagi kalau kamu pakai air dari sumur atau sumber non-PDAM.
                        </p>
                        <p>
                        Yuk pelajari langkah-langkahnya berikut ini:
                        </p>
                        <h4>
                        🔍 1. Pemeriksaan Fisik                       
                        </h4>
                        <p>
                        Beberapa tanda sederhana bisa langsung kita lihat atau rasakan:                        
                        </p>
                        <ul>
                            <li><span className="line-bold">Warna → </span> Air sehat seharusnya bening, tidak berwarna keruh atau kecoklatan.</li>
                            <li><span className="line-bold">Bau → </span> Hindari air dengan bau menyengat seperti bau besi, belerang, atau bahan kimia.</li>
                            <li><span className="line-bold">Rasa →</span> Air minum tidak boleh terasa aneh, pahit, asin, atau logam.</li>
                            <li><span className="line-bold">Kekeruhan → </span>  Air yang baik bebas dari partikel mengambang atau endapan.</li>
                        </ul>

                        <h4>
                        ⚗️ 2. Pemeriksaan Kimia
                        </h4>
                        <p>
                        Kalau ingin lebih pasti, pemeriksaan kimia juga penting :
                        </p>
                        <ul>
                            <li><span className="line-bold">pH air → </span> Idealnya netral, berada di kisaran 6,5 – 8,5.</li>
                            <li><span className="line-bold">Logam berat → </span> Air tidak boleh mengandung timbal, arsenik, atau merkuri.</li>
                            <li><span className="line-bold">Pestisida/limbah industri → </span>  Tidak boleh ada jejak bahan kimia beracun.</li>
                            <li><span className="line-bold">TDS (Total Dissolved Solids) → </span>  Kadar zat terlarut maksimal 500 mg/L.</li>
                        </ul>

                        <h4>
                        🦠 3. Pemeriksaan Mikrobiologis
                        </h4>
                        <p>
                        Air yang tampak bersih bisa saja mengandung bakteri tak terlihat :
                        </p>
                        <ul>
                            <li>Pastikan air <span className="line-bold">bebas dari E. coli atau bakteri koliform.</span></li>
                            <li>Jika sumber air dekat septic tank, penting untuk lakukan <span className="line-bold">tes laboratorium.</span></li>
                        </ul>

                        <h4>
                        🏞️ 4. Perhatikan Sumber Air
                        </h4>
                        <p>
                        Berbagai sumber air perlu perlakuan yang berbeda :
                        </p>
                        <ul>
                            <li><span className="line-bold">Air PDAM → </span>Umumnya sudah teruji dan diolah. </li>
                            <li><span className="line-bold">Air sumur atau mata air → </span> Wajib dicek berkala, terutama setelah hujan besar.</li>
                            <li><span className="line-bold">Air hujan / sungai / danau → </span> Harus <span className="line-bold">disaring dan direbus</span> sebelum digunakan.  </li>
                        </ul>

                        <h4>
                        🧪 5. Tes Sederhana di Rumah
                        </h4>
                        <p>
                        Beberapa hal bisa kamu cek sendiri :                        
                        </p>
                        <ul>
                            <li><span className="line-bold">Tes klorin → </span> Gunakan test strip, idealnya antara 0,2 – 4 mg/L.</li>
                            <li><span className="line-bold">Tes nitrat → </span> Di atas 10 mg/L berbahaya, terutama untuk bayi.</li>
                            <li><span className="line-bold">Merebus air → </span> Rebus air hingga mendidih selama 1–5 menit untuk membunuh bakteri.</li>
                        </ul>
                        
                        <h4>
                        ⚠️ 6. Tanda-Tanda Air Tidak Aman
                        </h4>
                        <p>
                        Kalau kamu merasa gejala seperti ini setelah minum atau mandi, bisa jadi air yang digunakan tercemar :
                        </p>
                        <ul>
                            <li>Kulit iritasi atau gatal setelah mandi.</li>
                            <li>Perut sakit atau diare setelah konsumsi.</li>
                            <li>Noda berwarna oranye/kecoklatan di wastafel atau panci (tanda logam berat).</li>
                        </ul>
                        <h4>
                        👥 7. Dampak Sosial
                        </h4>
                        <p>
                        Pencemaran air juga memperbesar kesenjangan sosial dan membuat hidup masyarakat semakin sulit.
                        </p>
                        <ul>
                            <li><span className="line-bold">Ketimpangan akses air :</span> Komunitas miskin sering kali jadi yang paling terdampak.</li>
                            <li><span className="line-bold">Migrasi paksa :</span> Jika air sudah tidak layak pakai, masyarakat bisa terpaksa pindah dari tempat tinggalnya</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}