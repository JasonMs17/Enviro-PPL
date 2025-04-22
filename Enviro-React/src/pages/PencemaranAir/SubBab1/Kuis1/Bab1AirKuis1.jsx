import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranAir from "../../../../components/SidebarCourse/SidebarPencemaranAir";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranAir}
      title="Quiz: Apa Itu Polusi Air?"
      pollutionTypeId={1}
      subbab={1}
    />
  );
};

export default Kuis;
