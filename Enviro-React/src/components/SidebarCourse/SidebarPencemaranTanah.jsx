import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Pastikan path ini benar

export default function SidebarPencemaranTanah() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isQuizOngoing, setIsQuizOngoing] = useState(false);

  // Data subbab untuk pencemaran tanah
  const dataSubbab = [
    {
      key: "pertama",
      title: "Pengenalan Polusi Tanah",
      items: [
        { id: 19, text: "Apa Itu Polusi Tanah & Penyebabnya" },
        { id: 20, text: "Dampak Polusi Tanah terhadap Lingkungan" },
        { id: 21, text: "Jenis-Jenis Limbah Penyebab Polusi Tanah" },
        {
          id: 34,
          text: "Quiz: Polusi Tanah & Penyebabnya",
          isQuiz: true,
          pollutionTypeId: 3,
          subbab: 1,
        },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Tanah terhadap Kesehatan",
      items: [
        { id: 22, text: "Zat Berbahaya yang Terkandung dalam Tanah Tercemar" },
        { id: 23, text: "Risiko Kesehatan Akibat Polusi Tanah" },
        { id: 24, text: "Kontaminasi pada Tanaman & Dampaknya ke Manusia" },
        {
          id: 35,
          text: "Quiz: Dampak Polusi Tanah terhadap Kesehatan",
          isQuiz: true,
          pollutionTypeId: 3,
          subbab: 2,
        },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Mengatasi Polusi Tanah",
      items: [
        { id: 25, text: "Pengelolaan Sampah & Limbah Rumah Tangga" },
        { id: 26, text: "Teknologi Pengendalian & Pemulihan Tanah" },
        { id: 27, text: "Peran Masyarakat & Edukasi Lingkungan" },
        {
          id: 36,
          text: "Quiz: Solusi Mengatasi Polusi Tanah",
          isQuiz: true,
          pollutionTypeId: 3,
          subbab: 3,
        },
      ],
    },
  ];

  return (
    <Sidebar
      isOpen={isSidebarOpen}
      toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      isQuizOngoing={isQuizOngoing}
      title="Polusi Tanah"
      basePath="/pencemaran-tanah"
      subbabs={dataSubbab}
      pollutionTypeId={3}
    />
  );
}
