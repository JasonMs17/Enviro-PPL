import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./bab1AirMateri3.css"
import { Bold } from "lucide-react";
import { http } from "../../../../utils/fetch";

let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab1AirMateri3 (){
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
            material_id: 3, // Ganti sesuai ID materi
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
        <div className={`Bab-1-air-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Dampak Umum Polusi Air
                        </h2>
                        <h3>
                            🚨 “Kalau air tercemar, apa sih efeknya buat kita?”
                        </h3>
                        <p>
                        Mungkin kamu pernah dengar soal polusi air, tapi tahu nggak sih sejauh mana dampaknya? Pencemaran air bukan cuma bikin air jadi bau atau keruh—tapi juga bisa menghancurkan ekosistem, mengganggu kesehatan manusia, bahkan bikin krisis ekonomi dan sosial.                        </p>
                        <p>
                        Di materi ini, kamu akan melihat bagaimana pencemaran air memberi dampak luas dan serius, bukan hanya hari ini, tapi juga untuk masa depan.
                        </p>
                        <h4>
                        🐟 1. Dampak terhadap Ekosistem Air                        </h4>
                        <p>
                        Air adalah rumah bagi jutaan makhluk hidup. Tapi saat air tercemar, kehidupan di dalamnya ikut terancam.
                        </p>
                        <ul>
                            <li><span className="line-bold">Keanekaragaman hayati menurun :</span> Banyak ikan dan tumbuhan air tidak bisa hidup dalam air yang tercemar. Populasi mereka menurun, bahkan bisa punah.</li>
                            <li><span className="line-bold">Rantai makanan terganggu :</span> Jika satu spesies hilang, seluruh rantai makanan bisa ikut kacau.</li>
                            <li><span className="line-bold">Ledakan alga (eutrofikasi) : </span> Nutrisi berlebih dari pupuk menciptakan pertumbuhan alga tak terkendali. Alga menyerap oksigen, menyebabkan ikan mati, dan menciptakan “zona mati”.</li>
                            <li><span className="line-bold">Perubahan habitat : </span>  Endapan lumpur atau bahan kimia bisa mengubah lingkungan alami makhluk air.</li>
                        </ul>

                        <h4>
                            🧍‍♀️ 2. Dampak terhadap Kesehatan Manusia
                        </h4>
                        <p>
                        Air yang tercemar bisa jadi pembawa penyakit berbahaya, bahkan racun.
                        </p>
                        <ul>
                            <li><span className="line-bold">Penyakit menular :</span> Air kotor bisa menyebarkan kolera, hepatitis A, dan tifoid.</li>
                            <li><span className="line-bold">Keracunan kimia :</span> Minum air yang mengandung logam berat seperti arsenik bisa menyebabkan kerusakan organ.</li>
                            <li><span className="line-bold">Gangguan hormon : </span>  Beberapa zat pencemar bisa mengacaukan sistem hormonal dalam tubuh.</li>
                            <li><span className="line-bold">Risiko kanker : </span>  Paparan jangka panjang terhadap bahan kimia tertentu meningkatkan risiko kanker.</li>
                        </ul>

                        <h4>
                        💸 3. Dampak terhadap Ekonomi
                        </h4>
                        <p>
                        Polusi air nggak cuma merusak lingkungan, tapi juga bikin kantong masyarakat dan pemerintah ikut terkuras.
                        </p>
                        <ul>
                            <li><span className="line-bold">Biaya pengolahan air meningkat :</span> Air yang makin kotor butuh alat dan teknologi lebih mahal untuk dibersihkan.</li>
                            <li><span className="line-bold">Industri perikanan rugi :</span> Populasi ikan menurun, hasil tangkapan bisa beracun dan tidak aman dikonsumsi.</li>
                            <li><span className="line-bold">Nilai properti turun : </span>  Wilayah yang dekat sumber air tercemar sering kali ditinggalkan dan nilainya jatuh..</li>
                            <li><span className="line-bold">Pariwisata merosot : </span>  Pantai, danau, atau sungai yang tercemar kehilangan daya tarik wisata.</li>
                        </ul>

                        <h4>
                        🌾 4. Dampak terhadap Pertanian
                        </h4>
                        <p>
                        Polusi air juga bisa membuat hasil pertanian menjadi berbahaya untuk dikonsumsi.
                        </p>
                        <ul>
                            <li><span className="line-bold">Tanah ikut tercemar :</span>Irigasi menggunakan air kotor bisa membuat zat berbahaya menumpuk di tanah. </li>
                            <li><span className="line-bold">Kontaminasi hasil panen :</span> Tanaman bisa menyerap polutan dan jadi berbahaya jika dimakan.</li>
                            <li><span className="line-bold">Produktivitas menurun : </span> Beberapa bahan pencemar bisa menghambat pertumbuhan tanaman.  </li>
                        </ul>

                        <h4>
                        🚱 5. Dampak terhadap Ketersediaan Air Bersih
                        </h4>
                        <p>
                        Semakin banyak air yang tercemar, semakin sedikit air yang aman digunakan.                        </p>
                        <ul>
                            <li><span className="line-bold">Krisis air bersih :</span> Banyak daerah kesulitan mendapatkan air yang layak pakai.</li>
                            <li><span className="line-bold">Potensi konflik :</span> Persaingan mendapatkan air bersih bisa memicu konflik sosial dan politik.</li>
                        </ul>
                        
                        <h4>
                        🌍 6. Dampak Jangka Panjang terhadap Lingkungan
                        </h4>
                        <p>
                        Beberapa efek polusi air tidak terlihat langsung, tapi berlangsung lama dan sulit diperbaiki.
                        </p>
                        <ul>
                            <li><span className="line-bold">Polutan menumpuk :</span> Zat seperti logam berat bisa menetap di sedimen dan tubuh makhluk hidup selama bertahun-tahun.</li>
                            <li><span className="line-bold">Polutan menumpuk :</span> Suhu air yang berubah bisa memengaruhi cuaca di sekitar wilayah perairan.</li>
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

                        <div className="video-course">
                        <h3 dir="ltr">
                        📽️ Yuk, Lihat Lebih Jelas Lewat Video Ini:
                        </h3>
                        <p>
                        Masih penasaran seperti apa efek nyata dari pencemaran air? Kamu bisa menonton video singkat ini untuk melihat langsung dampak pencemaran air terhadap lingkungan dan kehidupan di dalamnya:
                        </p>
                        <div className="course-video">
                        <iframe
                            src="https://www.youtube.com/embed/zBKGxuxFn1E?si=IrfpfkJrevftD3aF"
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}