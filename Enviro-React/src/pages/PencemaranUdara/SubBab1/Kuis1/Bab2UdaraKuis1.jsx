import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranTanah}
      title="Quiz: Pengenalan dan Dampak Polusi Udara"
      pollutionTypeId={2}
      subbab={1}
    />
  );
};

export default Kuis;
