import About from "@/components/resume/About";
import Education from "@/components/resume/Education";
import Work from "@/components/resume/Work";
import React from "react";

const ResumePage = () => {
  return (
    <div className="p-10 break-keep leading-[2em]">
      <h1 className="heading mb-[1em]">이력서</h1>

      <About />
      <Education />
      <Work />
    </div>
  );
};

export default ResumePage;
