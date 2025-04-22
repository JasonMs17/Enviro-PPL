import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranAir from "../../../../components/SidebarCourse/SidebarPencemaranAir";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranAir}
      title="Quiz: Solusi Menjaga Kualitas Air"
      pollutionTypeId={1}
      subbab={3}
    />
  );
};

export default Kuis;
