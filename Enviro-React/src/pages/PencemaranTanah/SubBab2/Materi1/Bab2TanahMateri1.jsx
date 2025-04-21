import { useState } from "react";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import "./Bab2TanahMateri1.css"
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-2-MATERI-1.png";
export default function Bab2TanahMateri1 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-2-tanah-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Zat Berbahaya yang Terkandung dalam Tanah Tercemar
                        </h2>
                        <div className="infografis-course-tanah-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                        <h3>
                        💬 “Tanah yang kita anggap aman bisa jadi menyimpan racun yang membahayakan kesehatan. Apa saja zat berbahaya yang terkandung di dalam tanah tercemar? Mari kita telusuri.”
                        </h3>
                        <p>
                        Tanah kita, meskipun tampak biasa dan tidak berbahaya, ternyata bisa menyimpan berbagai zat berbahaya yang mengancam lingkungan dan kesehatan kita. Polusi tanah akibat pembuangan limbah berbahaya, aktivitas industri, dan penggunaan bahan kimia yang tidak terkelola dengan baik dapat menyebabkan akumulasi zat berbahaya di dalam tanah. Zat-zat ini bertahan lama di dalam tanah dan dapat masuk ke dalam rantai makanan kita melalui tanaman atau air tanah yang terkontaminasi. Mari kita lihat lebih dalam mengenai beberapa zat berbahaya yang sering ditemukan dalam tanah yang tercemar.
                        </p>
                        <hr />

                        <h4>
                        Timbal (Pb)
                        </h4>
                        <p>
                        Timbal adalah salah satu logam berat yang paling sering ditemukan dalam tanah tercemar. Polusi tanah akibat timbal biasanya berasal dari limbah industri, kendaraan bermotor, atau bahan bangunan lama. Timah yang terdapat di tanah tidak mudah terurai dan dapat bertahan di dalam tanah selama bertahun-tahun. Bahkan meskipun kita tidak bisa melihatnya, timbal bisa merusak lingkungan secara perlahan.
                        </p>
                    
                        <p className="paragraf-bold">
                        Kenapa timbal berbahaya?
                        </p>
                        <ul>
                            <li>Sifatnya yang mudah terserap oleh tanaman</li>
                            <li>Tidak bisa terurai secara alami</li>
                        </ul>

                        <p className="paragraf-bold">
                        Efek timbal pada tanah:
                        </p>
                        <ul>
                            <li>Mengurangi kesuburan tanah</li>
                            <li>Merusak struktur tanah dan menghambat pertumbuhan tanaman</li>
                            <li>Meningkatkan potensi pencemaran air tanah</li>
                        </ul>
                        <hr />

                        <h4>
                        Arsenik (As)
                        </h4>
                        <p>
                        Arsenik adalah bahan kimia beracun yang sering ditemukan di tanah yang tercemar akibat pestisida, limbah industri, dan aktivitas pertambangan. Meskipun arsenik sering ditemukan dalam jumlah kecil, keberadaannya dalam tanah bisa menjadi ancaman besar. Tanah yang tercemar arsenik dapat mengkontaminasi tanaman yang tumbuh di atasnya dan, pada gilirannya, memengaruhi kualitas air tanah.
                        </p>
                    
                        <p className="paragraf-bold">
                        Kenapa arsenik berbahaya?
                        </p>
                        <ul>
                            <li>Tidak baik untuk dikonsumsi manusia</li>
                            <li>Sulit terurai oleh tanah</li>
                        </ul>

                        <p className="paragraf-bold">
                        Efek arsenik pada tanah:
                        </p>
                        <ul>
                            <li>Mengurangi kualitas tanah yang mendalam</li>
                            <li>Merusak struktur tanah dan mengurangi kemampuannya untuk mendukung pertumbuhan tanaman</li>
                            <li>Dapat menyebabkan kerusakan lingkungan yang berkepanjangan</li>
                        </ul>
                        <hr />

                        <h4>
                        Merkuri (Hg)
                        </h4>
                        <p>
                        Merkuri adalah logam berat berbahaya lainnya yang sering ditemukan dalam tanah yang tercemar akibat kegiatan industri, pertambangan, dan pembakaran bahan bakar fosil. Merkuri adalah bahan kimia yang sangat toksik dan sangat sulit untuk dihilangkan dari lingkungan. Seiring berjalannya waktu, merkuri yang tercemar di tanah akan meresap ke dalam tanaman dan bahkan ke dalam rantai makanan kita melalui air yang tercemar.
                        </p>
                    
                        <p className="paragraf-bold">
                        Kenapa merkuri berbahaya?
                        </p>
                        <ul>
                            <li>Merkuri sangat berbahaya karena bisa merusak sistem saraf dan ginjal meskipun dalam jumlah kecil.</li>
                            <li>Merkuri dapat terakumulasi dalam rantai makanan dan masuk ke tubuh melalui konsumsi makanan yang tercemar.</li>
                        </ul>

                        <p className="paragraf-bold">
                        Efek merkuri pada tanah:
                        </p>
                        <ul>
                            <li>Meningkatkan risiko pencemaran makanan</li>
                            <li>Merusak tanah dan mengurangi kesuburannya</li>
                            <li>Meningkatkan potensi keracunan yang bisa merusak ekosistem</li>
                        </ul>
                        <hr />

                        <h4>
                        Senyawa Kimia Beracun Lainnya
                        </h4>
                        <p>
                        Selain timbal, arsenik, dan merkuri, ada banyak senyawa kimia berbahaya lainnya yang bisa mencemari tanah, seperti pestisida dan bahan kimia industri. Zat-zat ini bisa masuk ke dalam tanah melalui kegiatan pertanian dan industri. Meskipun kadang kita tidak menyadari keberadaan bahan kimia ini, mereka dapat tetap berada di tanah selama bertahun-tahun dan merusak kualitas tanah serta kesehatan lingkungan.
                        </p>
                    
                        <p className="paragraf-bold">
                        Contoh senyawa kimia berbahaya lainnya:
                        </p>
                        <ul>
                            <li><span className="line-bold">Pestisida organik:</span>Pestisida yang digunakan dalam pertanian untuk membasmi hama dapat mencemari tanah, menyebabkan ketidakseimbangan ekosistem, dan berbahaya bagi kesehatan manusia.</li>
                            <li><span className="line-bold">Bahan kimia industri:</span>Beberapa bahan kimia yang digunakan dalam industri seperti pelarut, cat, dan bahan bakar bisa mencemari tanah dengan dampak yang merusak jangka panjang.</li>
                        </ul>

                        <p className="paragraf-bold">
                        Efek senyawa kimia berbahaya pada tanah:
                        </p>
                        <ul>
                            <li>Menurunkan kesuburan tanah</li>
                            <li>Menyebabkan ketidakseimbangan ekosistem</li>
                            <li>Memengaruhi kualitas tanaman dan kualitas air tanah</li>
                        </ul>
                        <hr />


                      
                    </div>
                </div>
            </div>
        </div>
    );
}