import { useState } from "react";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./bab1UdaraMateri3.css"
import { Bold } from "lucide-react";
import Infografis  from "../../../../assets/Course/Polusi-Udara/UDARA-BAB 1-MATERI 3.jpg";
export default function Bab1UdaraMateri3 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-1-udara-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranUdara isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Dampak Polusi terhadap Lingkungan
                        </h2>
                        <h3>
                        💬 “Polusi udara bukan cuma soal langit yang abu-abu—tapi juga soal bumi yang makin rusak.”
                        </h3>
                        <p>
                        Saat kita membicarakan polusi udara, sering kali kita langsung terbayang soal kesehatan manusia. Tapi dampaknya jauh lebih luas. Polusi udara perlahan-lahan mengubah sistem alam yang selama ini menopang kehidupan. Dari atmosfer yang rusak hingga hujan yang berubah sifat, udara yang tercemar bisa mengguncang ekosistem global.                       
                        </p>
                        <hr />
                        
                        <h4>
                        1. Kerusakan Lapisan Ozon: Pelindung Bumi yang Menipis                        
                        </h4>
                        <p>
                        Lapisan ozon di atmosfer bagian atas berfungsi seperti “tabir surya” alami bumi. Ia menyerap sinar ultraviolet (UV-B) berbahaya dari matahari. Tapi beberapa zat pencemar, seperti <span className="line-bold"></span>chlorofluorocarbon (CFC) dan <span className="line-bold">halon</span>, bisa merusaknya.
                        </p>
                        <p>
                        Akibat dari lapisan ozon yang menipis:
                        </p>

                        <ul>
                            <li><span className="line-bold">Paparan sinar UV meningkat</span>, meningkatkan risiko kanker kulit dan katarak..</li>
                            <li><span className="line-bold">Tanaman dan fitoplankton laut</span> yang sensitif terhadap UV terganggu proses fotosintesisnya.</li>
                            <li><span className="line-bold">Gangguan pada rantai makanan </span>, terutama di ekosistem laut.</li>
                        </ul>

                        <p>
                        Meskipun Protokol Montreal (1987) telah berhasil menekan produksi CFC, lapisan ozon masih dalam proses pemulihan yang sangat lambat.
                        </p>
                        <hr />

                        <h4>
                        2. Pemanasan Global: Bumi Semakin Panas, Hidup Semakin Tidak Pasti
                        </h4>
                        <p>
                        Polutan seperti karbon dioksida (CO₂), metana (CH₄), dan nitrogen oksida (N₂O) adalah gas rumah kaca. Mereka memerangkap panas di atmosfer dan menyebabkan suhu global naik—proses ini dikenal sebagai efek rumah kaca.
                        </p>
                        <ul>
                            <li><span className="line-bold">Mencairnya es di kutub </span> → permukaan laut naik → pulau kecil dan kota pesisir terancam tenggelam.</li>
                            <li><span className="line-bold">Perubahan iklim ekstrem,</span>seperti musim hujan yang tak menentu atau kekeringan panjang.</li>
                            <li><span className="line-bold">Gangguan terhadap pertanian dan ketahanan pangan, </span>  karena suhu dan curah hujan berubah drastis.</li>
                            <li><span className="line-bold">Punahnya spesies: </span> yang tidak bisa beradaptasi terhadap suhu baru.</li>
                        </ul>
                        <hr />

                        <h4>
                        3. Hujan Asam: Air Hujan yang Membawa Racun
                        </h4>

                        <div className="infografis-course-udara-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                        <p>
                        Ketika <span className="line-bold">sulfur dioksida (SO₂)</span> dan <span className="line-bold">nitrogen oksida (NOx)</span> dari pembakaran batu bara dan kendaraan bermotor naik ke atmosfer, mereka bereaksi dengan uap air dan membentuk asam sulfat dan asam nitrat. Inilah yang kemudian turun sebagai <span className="line-bold">hujan asam.</span>
                        </p>
                        <p>
                        Efeknya sangat merusak:
                        </p>
                        <ul>
                            <li><span className="line-bold">Tanah kehilangan nutrisi,</span> menyebabkan tanaman gagal tumbuh.</li>
                            <li><span className="line-bold">Air danau dan sungai jadi asam, </span> membunuh ikan dan kehidupan akuatik lainnya.</li>
                            <li><span className="line-bold">Bangunan dan monumen cepat rusak, </span>terutama yang terbuat dari batu kapur dan logam.</li>
                            <li><span className="line-bold">Korosi infrastruktur, </span>  merugikan secara ekonomi.</li>
                        </ul>
                        <hr />

                        <h4>
                        4. Cuaca Ekstrem: Ketidakpastian Iklim yang Meningkat
                        </h4>
                        <p>
                        Pemanasan global dan perubahan pola atmosfer memperbesar kemungkinan terjadinya cuaca ekstrem. Kita makin sering melihat:
                        </p>
                        <ul>
                            <li><span className="line-bold">Gelombang panas</span>yang mematikan di kota besar </li>
                            <li><span className="line-bold">Badai dan angin topan</span> yang lebih kuat dan sering terjadi</li>
                            <li><span className="line-bold">Hujan ekstrem dan banjir bandang, </span> bahkan di wilayah yang sebelumnya jarang hujan  </li>
                            <li><span className="line-bold">Musim kemarau berkepanjangan, </span> berdampak pada pertanian dan air bersih  </li>
                        </ul>
                        <p>
                        Perubahan ini mengancam ekosistem, keselamatan manusia, dan keberlangsungan kota.
                        </p>
            
                    </div>
                </div>
            </div>
        </div>
    );
}