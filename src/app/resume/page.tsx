import About from "@/components/resume/About";
import Education from "@/components/resume/Education";
import Work from "@/components/resume/Work";
import React from "react";

const ResumePage = () => {
  return (
    <div className="p-10">
      <h1 className="heading">이력서</h1>

      <About />
      <Education />
      <Work />
    </div>
  );
};

export default ResumePage;
