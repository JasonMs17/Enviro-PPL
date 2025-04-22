import React from "react";
import QuizComponent from "../../../../components/Kuis/Kuis";
import SidebarPencemaranUdara from "../../../../components/SidebarCourse/SidebarPencemaranUdara";

const Kuis = () => {
  return (
    <QuizComponent
      SidebarCourse={SidebarPencemaranUdara}
      title="Quiz: Solusi dan Upaya Penanggulangan"
      pollutionTypeId={2}
      subbab={3}
    />
  );
};

export default Kuis;
