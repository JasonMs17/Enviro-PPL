import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranAir from "../../../../components/SidebarCourse/SidebarPencemaranAir";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranAir}
      title="Quiz: Penyebab Polusi Air & Dampaknya terhadap Kesehatan?"
      pollutionTypeId={1}
      subbab={2}
    />
  );
};

export default Kuis;
