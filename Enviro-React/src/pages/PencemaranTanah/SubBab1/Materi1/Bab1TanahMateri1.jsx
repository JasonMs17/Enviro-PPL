import { useState } from "react";
import "./Bab1TanahMateri1.css"
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab1TanahMateri1 (){
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
            material_id: 19, // Ganti sesuai ID materi
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
        <div className={`bab-1-tanah-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Apa Itu Polusi Tanah & Penyebabnya
                        </h2>
                        <h3>
                        💬 “Tanah bukan sekadar tempat kita berpijak—tapi fondasi utama kehidupan di bumi.”
                        </h3> 
                        <p>
                        Tanah merupakan bagian penting dari ekosistem. Ia menyimpan air, menyuburkan tanaman, dan menjadi tempat hidup bagi jutaan mikroorganisme. Tapi seperti udara dan air, tanah juga bisa tercemar. Dan ketika itu terjadi, seluruh kehidupan yang bergantung padanya pun ikut terdampak.
                        </p>

                        <h4>
                        🎥 Sebelum baca lebih jauh, yuk tonton dulu video ini:                        
                        </h4>
                        
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/keeQK1EzNEo?si=o73e3Pf_zJOLAbju"
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
                        Di video ini kamu akan diajak mengenal apa itu tanah, kenapa tanah penting bagi kehidupan, dan bagaimana tanah bisa tercemar. Eits, penasaran kan? 💡 Yuk tonton dulu sampai selesai supaya kamu lebih paham sebelum lanjut ke materi!                        
                        </p>
                        <hr />

                        <h3>
                        📚 Pengertian Tanah Menurut Para Ahli
                        </h3>
                        <p>
                        Menurut <span className="line-bold">Dokuchaev </span> (1870), tanah terbentuk dari pelapukan material induk yang mengalami perubahan alami dalam jangka waktu panjang akibat pengaruh air, udara, dan organisme hidup atau mati. Proses ini menciptakan lapisan tanah yang bisa dikenali dari warna, komposisi, dan strukturnya.
                        </p>
                        <p>
                        Sementara itu, <span className="line-bold">Das </span> (1995) menyatakan bahwa tanah terdiri atas partikel padat hasil pelapukan mineral dan bahan organik, serta pori-pori yang diisi oleh cairan dan gas. Kombinasi ini membuat tanah menjadi medium yang kompleks, dinamis, dan sangat vital bagi kehidupan.
                        </p>
                        <hr />

                        <h3>
                        🧪 Apa Itu Polusi Tanah?
                        </h3>
                        
                        <p>
                        Polusi tanah adalah kondisi ketika tanah—baik di permukaan maupun bawah tanah—terkontaminasi oleh zat-zat berbahaya, terutama bahan kimia buatan manusia. Zat ini masuk ke dalam tanah dalam konsentrasi tinggi dan menyebabkan perubahan sifat fisik, kimia, maupun biologi tanah.
                        </p>
                        <p>
                        Tanah yang tercemar menjadi tidak sehat untuk ditanami, tidak aman disentuh, bahkan bisa menjadi sumber penyakit bagi manusia dan hewan. Polusi tanah merusak habitat alami mikroorganisme, mengganggu keseimbangan ekosistem, dan bisa berdampak jangka panjang pada kesehatan manusia.
                        </p>
                        <hr />

                        <h3>
                        🌍 Bagaimana Polusi Tanah Terjadi?
                        </h3>
                        <p>
                        Polusi tanah bisa terjadi di dua lapisan utama:
                        </p>
                        <ol>
                            <li><span className="line-bold">Permukaan tanah:</span> biasanya disebabkan oleh tumpukan sampah dan pembuangan limbah padat yang tidak terkendali.</li>
                            <li><span className="line-bold">Lapisan bawah tanah:</span> umumnya berasal dari kebocoran limbah cair atau bahan kimia yang meresap ke dalam tanah dan mencemari air tanah.</li>
                        </ol>
                        <p>
                        Saat hujan turun, zat pencemar ini bisa menguap, terbawa aliran air, atau masuk lebih dalam ke dalam lapisan tanah. Proses ini membuat tanah menjadi tempat berkumpulnya senyawa kimia beracun yang sulit dihilangkan. 
                        </p>
                        <hr />

                        <h3>
                        ⚠️ Penyebab Polusi Tanah
                        </h3>
                        <p>
                        Berikut beberapa faktor yang paling sering menjadi penyebab tanah tercemar:
                        </p>
                        <ul>
                            <li>Kebocoran limbah cair dari pabrik atau rumah tangga</li>
                            <li>Tumpahan bahan kimia dari industri atau fasilitas komersial</li>
                            <li>Penggunaan pestisida dan pupuk kimia yang berlebihan di pertanian</li>
                            <li>Air permukaan dari tanah tercemar yang masuk ke lapisan bawah</li>
                            <li>Kecelakaan kendaraan pengangkut minyak atau bahan berbahaya</li>
                            <li>Pembuangan limbah langsung ke tanah, terutama dari area TPA atau limbah industri</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}