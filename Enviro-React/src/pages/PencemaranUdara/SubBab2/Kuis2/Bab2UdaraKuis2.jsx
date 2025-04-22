import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranUdara}
      title="Quiz: Dampak Polusi Udara terhadap Kesehatan"
      pollutionTypeId={2}
      subbab={2}
    />
  );
};

export default Kuis;
