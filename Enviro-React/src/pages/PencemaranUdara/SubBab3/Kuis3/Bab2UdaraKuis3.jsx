import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranTanah from "../../../../components/SidebarCourse/SidebarPencemaranTanah";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranTanah}
      title="Quiz: Solusi dan Upaya Penanggulangan"
      pollutionTypeId={2}
      subbab={3}
    />
  );
};

export default Kuis;
