import React from "react";

import About from "@/components/resume/About";
import Education from "@/components/resume/Education";
import Work from "@/components/resume/Work";

const ResumePage = () => {
  return (
    <div className="p-10 pt-5 break-keep leading-[2em] bg-white w-[100vw] mx-auto">
      {/* <h1 className="heading mb-[1em]">이력서</h1> */}

      <About />
      <Work />
      <Education />
    </div>
  );
};

export default ResumePage;
