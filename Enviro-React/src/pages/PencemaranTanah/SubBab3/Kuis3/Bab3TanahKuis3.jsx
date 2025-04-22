import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranTanah}
      title="Quiz: Solusi Mengatasi Polusi Tanah"
      pollutionTypeId={3}
      subbab={3}
    />
  );
};

export default Kuis;
