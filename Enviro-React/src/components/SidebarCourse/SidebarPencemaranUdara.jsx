import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function SidebarPencemaranUdara() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isQuizOngoing, setIsQuizOngoing] = useState(false);

  const dataSubbab = [
    {
      key: "pertama",
      title: "Pengenalan Polusi Udara & Dampaknya terhadap Lingkungan",
      items: [
        { id: 10, text: "Apa Itu Polusi Udara dan Sumbernya?" },
        { id: 11, text: "Jenis Polutan di Udara" },
        { id: 12, text: "Dampak Polusi terhadap Lingkungan" },
        {
          id: 31,
          text: "Quiz: Pengenalan dan Dampak Polusi Udara",
          isQuiz: true,
          pollutionTypeId: 2,
          subbab: 1,
        },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Udara terhadap Kesehatan",
      items: [
        { id: 13, text: "Bagaimana Polusi Udara Mempengaruhi Tubuh Kita" },
        {
          id: 14,
          text: "Pencegahan & Penanganan Risiko Kesehatan Akibat Polusi",
        },
        { id: 15, text: "Siapa yang Paling Terdampak?" },
        {
          id: 32,
          text: "Quiz: Dampak Polusi Udara terhadap Kesehatan",
          isQuiz: true,
          pollutionTypeId: 2,
          subbab: 2,
        },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi dan Upaya Penanggulangan",
      items: [
        {
          id: 16,
          text: "Inovasi di Kota-Kota Besar untuk Mengatasi Polusi Udara",
        },
        { id: 17, text: "Peran Pemerintah dan Regulasi" },
        { id: 18, text: "Aksi Individu untuk Udara Lebih Bersih" },
        {
          id: 33,
          text: "Quiz: Solusi dan Upaya Penanggulangan",
          isQuiz: true,
          pollutionTypeId: 2,
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
      title="Polusi Udara"
      subbabs={dataSubbab}
      basePath="/pencemaran-udara"
      pollutionTypeId={2}
    />
  );
}
