import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./AirMateri2.css"
import { Bold } from "lucide-react";
export default function AirMateri2 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`air-materi-2 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                            Penyebab Polusi Air
                        </h2>
                        <h3>
                            🚨 Air tercemar nggak terjadi tiba-tiba...
                        </h3>
                        <p>
                        Bayangin kamu sedang minum segelas air yang terlihat bening—tapi siapa sangka, bisa jadi di dalamnya terkandung bahan kimia, bakteri, bahkan logam berat. Pencemaran air sering kali terjadi secara perlahan tapi pasti, dan seringkali berasal dari kebiasaan manusia sehari-hari yang tampak "sepele".
                        </p>
                        <p>
                        Nah, di materi ini kamu akan kenalan dengan penyebab polusi air—dari industri besar hingga hal-hal yang kita lakukan di rumah.
                        </p>
                        <h4>
                        🏭 1. Limbah Industri
                        </h4>
                        <p>
                        Industri adalah penyumbang polusi air paling besar. Banyak pabrik—seperti tekstil, logam, atau kimia—menghasilkan limbah cair yang berisi zat berbahaya. Kalau limbah ini dibuang ke sungai tanpa proses pengolahan, hasilnya bisa merusak ekosistem air dan membahayakan kesehatan manusia.                       
                        </p>
                        <p className = "paragraf-bold">
                            Apa saja kandungan limbah industri?                       
                        </p>
                        <ul>
                            <li>Logam berat: merkuri, timbal, kadmium</li>
                            <li>Senyawa organik: pelarut, minyak</li>
                            <li>Bahan kimia beracun: sianida, fenol</li>
                        </ul>
                        <p>
                            Efeknya? Ikan mati, air jadi beracun, dan kualitas hidup masyarakat sekitar ikut terancam.
                        </p>
                        <h4>
                            🏠 2. Limbah Domestik
                        </h4>
                        <p>
                            Limbah dari rumah kita—yang kelihatannya biasa aja—juga bisa jadi pencemar serius. Mulai dari air cucian, sabun, hingga sisa makanan, kalau langsung dibuang ke saluran air tanpa penyaringan, bisa jadi masalah besar.
                        </p>
                        <p className = "paragraf-bold">
                            Contohnya:                       
                        </p>
                        <ul>
                            <li>Air limbah dari dapur dan kamar mandi</li>
                            <li>Deterjen & pembersih kimiak</li>
                            <li>Sampah organik</li>
                        </ul>
                        <p>
                        Akibatnya? Air jadi sarang bakteri dan virus berbahaya yang bisa menyebar ke mana-mana.
                        </p>
                        <h4>
                        🌾 3. Aktivitas Pertanian
                        </h4>
                        <p>
                            Pupuk dan pestisida memang bikin tanaman subur, tapi kalau digunakan berlebihan, bisa ikut terbawa hujan dan mencemari sungai atau danau. Ini yang sering disebut sebagai limpasan pertanian.                        </p>
                        <p className = "paragraf-bold">
                        Zat yang sering terbawa:                   
                        </p>
                        <ul>
                            <li>Nitrat & fosfat (dari pupuk)</li>
                            <li>Pestisida & herbisida</li>
                            <li>Tanah hasil erosi</li>
                        </ul>
                        <p>
                            Efeknya? Gangguan ekosistem air, pertumbuhan alga berlebih, dan air minum yang tidak lagi aman.                      
                        </p>

                        <h4>
                        ⛏️ 4. Pertambangan
                        </h4>
                        <p>
                        Kegiatan tambang nggak cuma menggali tanah, tapi juga menghasilkan limbah berbahaya. Air yang mengalir dari lokasi tambang seringkali mengandung logam berat dan zat kimia lainnya.
                        </p>
                        <p className = "paragraf-bold">
                        Risikonya:                     
                        </p>
                        <ul>
                            <li>Air asam tambang</li>
                            <li>Sedimentasi berat</li>
                            <li>Kontaminasi air tanah</li>
                        </ul>
                        <p>
                        Yang mengkhawatirkan, efek pencemaran tambang bisa berlangsung bertahun-tahun bahkan setelah tambangnya tutup.                       
                        </p>
                        <h4>
                        🏙️ 5. Urbanisasi dan Pembangunan
                        </h4>
                        <p>
                        Semakin padat sebuah kota, semakin besar pula risiko pencemaran air. Jalanan, gedung, dan area beton luas membuat air hujan nggak bisa terserap ke tanah, dan malah membawa polutan langsung ke sungai.                        </p>
                        <p className = "paragraf-bold">
                        Dampaknya:                      
                        </p>
                        <ul>
                            <li>Peningkatan limbah rumah tangga & konstruksi</li>
                            <li>Erosi dan gangguan aliran air</li>
                            <li>Limbah bangunan masuk ke drainase</li>
                        </ul>
                        <p>
                            Kalau tidak dikelola, kota besar bisa jadi sumber polusi yang sangat serius.                       
                        </p>
                        <h4>
                        🚢 6. Transportasi Air
                        </h4>
                        <p>
                            Kapal besar bukan cuma bawa barang, tapi kadang juga bawa masalah. Minyak yang bocor, air ballast yang dibuang, atau limbah dari kapal bisa mencemari laut dan pesisir.
                        </p>
                        <p className = "paragraf-bold">
                            Apa aja yang mencemari?
                        </p>
                        <ul>
                            <li>Tumpahan minyak</li>
                            <li>Limbah bahan bakark</li>
                            <li>Air ballast dengan organisme asing</li>
                        </ul>
                        <p>
                            Dampaknya bisa merusak terumbu karang, biota laut, dan mencemari perairan tempat nelayan menggantungkan hidup.
                        </p>
                        <h4>
                            🌡️ 7. Perubahan Iklim
                        </h4>
                        <p>
                            Mungkin bukan penyebab langsung, tapi perubahan iklim bisa memperparah polusi air.
                        </p>
                        <p className = "paragraf-bold">
                        Bagaimana caranya?
                        </p>
                        <ul>
                            <li>Suhu air naik → kadar oksigen turun → ikan sulit hidup</li>
                            <li>Pola hujan berubah → limpasan dan erosi meningkat</li>
                            <li>Naiknya permukaan laut → air asin mencemari air tawar</li>
                        </ul>
                        <p>
                            Kalau tidak diantisipasi, dampaknya akan sangat luas dan sulit dikendalikan.                        
                        </p>
                        <div className="infografis-course">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}