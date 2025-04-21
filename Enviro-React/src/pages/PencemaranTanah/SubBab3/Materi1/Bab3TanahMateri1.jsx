import { useState } from "react";
import "./Bab3TanahMateri1.css"
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import Infografis  from "../../../../assets/Course/Polusi-Tanah/TANAH-SUB-BAB-3-MATERI-1.png";
import { http } from "../../../../utils/fetch";
let isProgressTracked = false; // supaya hanya dipanggil sekali

export default function Bab3TanahMateri1 (){
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
            material_id: 25, // Ganti sesuai ID materi
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
        <div className={`Bab-3-tanah-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarPencemaranTanah isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                            <div className="course-article">
                                <div className="course-content" >
                                    <h2 dir="ltr">
                                    Pengelolaan Sampah & Limbah Rumah Tangga
                                    </h2>
                                    
                                    <div className="infografis-course-udara-bab2">
                                        <img src={Infografis} alt="" />
                                    </div>
            
                                    <h3>
                                    💬 “Solusi polusi tanah bisa dimulai dari tempat paling dekat: rumah kita sendiri.”
                                    </h3>
                                    <p>
                                    Polusi tanah tidak hanya disebabkan oleh industri besar atau limbah pabrik. Faktanya, kebiasaan sehari-hari di rumah tangga seperti membuang sampah sembarangan, mencampur limbah berbahaya ke tempat sampah biasa, atau tidak memilah sampah organik dan anorganik dapat berdampak besar pada pencemaran tanah.                       
                                    </p>
                                    <p>
                                    Oleh karena itu, penting untuk memahami dan menerapkan pengelolaan limbah yang benar di rumah sebagai langkah awal solusi.
                                    </p>
                                    <hr />

                                    <h4>
                                    1. Pemilahan Sampah
                                    </h4>
                                    <p>
                                    Memisahkan sampah berdasarkan jenisnya sangat penting agar proses daur ulang dan pengolahan akhir lebih efektif.
                                    </p>
                                
                                    <p className="paragraf-bold">
                                    Kategori umum:
                                    </p>
                                    <ul>
                                        <li><span className="line-bold">Organik: </span>sisa makanan, daun, limbah dapur</li>
                                        <li><span className="line-bold">Anorganik: </span>plastik, logam, kaca</li>
                                        <li><span className="line-bold">B3 Rumah Tangga:</span>baterai, lampu, elektronik bekas</li>
                                    </ul>
                                    <hr />

                                    <h4>
                                    2. Daur Ulang
                                    </h4>
                                    <p>
                                    Barang seperti botol plastik, kaleng, atau kertas bisa didaur ulang menjadi produk baru.
                                    </p>
                                
                                    <p className="paragraf-bold">
                                    Manfaatnya:
                                    </p>
                                    <ul>
                                        <li>Mengurangi volume sampah yang dibuang ke TPA</li>
                                        <li>Mengurangi risiko pencemaran tanah dari bahan yang sulit terurai</li>
                                        <li>Mendorong ekonomi sirkular di masyarakat</li>
                                    </ul>
                                    <p>
                                    Beberapa komunitas juga mendirikan <span className="line-bold">bank sampah</span> yang menampung dan mengelola sampah anorganik.
                                    </p>
                                    <hr />
                                    
                                    <h4>
                                    3. Hindari Buang Sampah Sembarangan
                                    </h4>
                                    <p>
                                    Kebiasaan membuang sampah ke sungai, halaman kosong, atau membakar sampah tanpa kontrol masih sering dilakukan. Ini bisa menyebabkan:
                                    </p>
                                
                                    <ul>
                                        <li>Penyumbatan aliran air → banjir</li>
                                        <li>Limbah meresap ke tanah → mencemari air tanah</li>
                                        <li>Emisi gas beracun dari pembakaran plastik</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
        </div>
    );
}