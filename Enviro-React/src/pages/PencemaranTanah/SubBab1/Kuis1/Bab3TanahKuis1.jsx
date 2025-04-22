import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranTanah}
      title="Quiz: Polusi Tanah & Penyebabnya"
      pollutionTypeId={3}
      subbab={1}
    />
  );
};

export default Kuis;
