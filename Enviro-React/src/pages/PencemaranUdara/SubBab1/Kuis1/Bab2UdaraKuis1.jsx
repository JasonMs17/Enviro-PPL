import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranUdara}
      title="Quiz: Pengenalan dan Dampak Polusi Udara"
      pollutionTypeId={2}
      subbab={1}
    />
  );
};

export default Kuis;
