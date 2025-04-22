import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranTanah}
      title="Quiz: Dampak Polusi Udara terhadap Kesehatan"
      pollutionTypeId={2}
      subbab={2}
    />
  );
};

export default Kuis;
