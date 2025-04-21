import { useState } from "react";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import "./bab1TanahMateri3.css"
import { Bold } from "lucide-react";
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-1-MATERI-3.png";
export default function Bab1TanahMateri3 (){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    
    return (
        <div className={`Bab-1-tanah-materi-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content" >
                        <h2 dir="ltr">
                        Jenis-Jenis Limbah Penyebab Polusi Tanah
                        </h2>
                        <h3>
                        💬 “Polusi tanah dimulai dari apa yang kita buang, meskipun tampaknya sepele, dampaknya bisa sangat besar.”
                        </h3>
                        <p>
                        Polusi tanah adalah masalah yang semakin serius, terutama dengan meningkatnya jumlah limbah yang kita hasilkan setiap hari. Tanah kita yang sebelumnya subur kini terancam oleh limbah yang kita buang tanpa memikirkan dampaknya. Tanah yang tercemar bukan hanya merusak ekosistem, tetapi juga bisa memengaruhi kualitas hidup kita. Adapun beberapa jenis limbah penyebab polusi tanah sebagai berikut:                       
                        </p>
                        
                        <h4>
                        Limbah Domestik                        
                        </h4>
                        
                        <p>
                        Polusi tanah sering dimulai dari limbah domestik, atau sampah yang dihasilkan dari aktivitas rumah tangga kita. Ini termasuk sampah plastik, sisa makanan, dan bahkan air sisa detergen. Setiap hari, kita membuang ribuan ton sampah domestik tanpa banyak berpikir tentang dampaknya pada tanah. Limbah yang kita anggap sepele ini, jika tidak dikelola dengan baik, akan merusak tanah dan mengganggu kualitas hidup kita.                       
                        </p>

                        <p className="paragraf-bold">
                        Contoh Limbah Domestik:                       
                        </p>

                        <ul>
                            <li><span className="line-bold">Limbah Cair:</span> Detergen, sabun mandi, minyak bekas, dan air limbah dari kegiatan rumah tangga lainnya. Semua ini mengandung bahan kimia yang dapat merusak struktur tanah dan mengurangi kesuburan tanah.</li>
                            <li><span className="line-bold">Limbah Padat:</span> Plastik, kertas, dan sampah organik yang tidak dapat terurai dengan cepat, seperti kantong plastik yang sering kita buang di pasar. Limbah ini menghalangi tanah untuk menyerap air dan menyebabkan tanah menjadi keras dan tidak subur.</li>
                        </ul>
                        
                        <h4>
                        Limbah Pabrik                        
                        </h4>
                        
                        <p>
                        Limbah yang dihasilkan oleh pabrik memiliki potensi yang lebih besar untuk merusak tanah. Limbah industri sering kali mengandung bahan kimia yang sangat berbahaya dan sulit terurai. Indonesia yang semakin berkembang menjadi negara industri kini menghadapi tantangan besar dalam mengelola limbah pabrik yang semakin banyak. Sayangnya, meskipun pemerintah telah mengeluarkan peraturan untuk mengelola limbah industri, seringkali pembuangan limbah masih dilakukan secara sembarangan demi mengurangi biaya dan memaksimalkan keuntungan.                       
                        </p>

                        <p className="paragraf-bold">
                        Jenis Limbah Pabrik:                       
                        </p>

                        <ul>
                            <li><span className="line-bold">Limbah Cair:</span> Air yang terkontaminasi bahan kimia, sering kali berwarna keruh dan mengandung bahan berbahaya yang bisa merusak tanah jika dibuang sembarangan.</li>
                            <li><span className="line-bold">Limbah Padat:</span> Lumpur atau bubur yang mengandung zat kimia berbahaya yang bisa mengubah struktur tanah dan membuatnya tidak subur.</li>
                        </ul>

                        <p>
                        Limbah dari industri ini bukan hanya merusak tanah secara fisik, tetapi juga mengurangi kemampuannya untuk mendukung pertumbuhan tanaman. Tanah yang sudah terkontaminasi bahan kimia berbahaya sulit untuk dipulihkan dan membutuhkan waktu yang lama untuk mengembalikan kesuburannya.
                        </p>

                        <h4>
                        Limbah Pertanian
                        </h4>

                        <p>
                        Meskipun jumlahnya tidak sebanyak limbah domestik atau pabrik, limbah pertanian tetap menjadi penyumbang polusi tanah yang signifikan. Pupuk dan pestisida kimia yang digunakan dalam pertanian modern sangat ampuh dalam menyuburkan tanaman, namun juga merusak struktur tanah. Seringkali, petani beralih ke pupuk kimia karena lebih praktis dan memberikan hasil yang lebih cepat, tanpa menyadari dampak jangka panjangnya pada tanah.
                        </p>

                        <div className="infografis-course-tanah-bab1">
                            <img src={Infografis} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}