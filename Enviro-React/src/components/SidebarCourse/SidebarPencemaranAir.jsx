import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Komponen reusable

export default function SidebarPencemaranAir() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isQuizOngoing, setIsQuizOngoing] = useState(false);

  const dataSubbab = [
    {
      key: "pertama",
      title: "Pengenalan Polusi Air & Dampak Umum",
      items: [
        { id: 1, text: "Apa Itu Polusi Air?" },
        { id: 2, text: "Penyebab Polusi Air" },
        { id: 3, text: "Dampak Umum Polusi Air" },
        {
          id: 28,
          text: "Quiz: Apa Itu Polusi Air?",
          isQuiz: true,
          pollutionTypeId: 1,
          subbab: 1,
        },
      ],
    },
    {
      key: "kedua",
      title: "Dampak Polusi Air terhadap Kesehatan",
      items: [
        { id: 4, text: "Air Tercemar dan Penyakit" },
        { id: 5, text: "Siapa yang Paling Terdampak?" },
        { id: 6, text: "Menentukan Air Aman Dikonsumsi" },
        {
          id: 29,
          text: "Quiz: Penyebab dan Dampak Polusi Air",
          isQuiz: true,
          pollutionTypeId: 1,
          subbab: 2,
        },
      ],
    },
    {
      key: "ketiga",
      title: "Solusi Menjaga Kualitas Air",
      items: [
        { id: 7, text: "Pengolahan Limbah Air" },
        { id: 8, text: "Aksi Individu untuk Menjaga Air" },
        { id: 9, text: "Pengelolaan Air Berkelanjutan" },
        {
          id: 30,
          text: "Quiz: Solusi Menjaga Kualitas Air",
          isQuiz: true,
          pollutionTypeId: 1,
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
      title="Polusi Air"
      subbabs={dataSubbab}
      basePath="/pencemaran-air"
    />
  );
}
