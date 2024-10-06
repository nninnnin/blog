import React from "react";

import Section from "@/components/resume/common/Section";
import Carrontins from "@/components/resume/work/Carrontins";
import Chopticks from "@/components/resume/work/Chopticks";
import Rebel9 from "@/components/resume/work/Rebel9";
import VanillaCoding from "@/components/resume/work/VanillaCoding";

const Work = () => {
  return (
    <Section header="경력">
      <Rebel9 />
      <Chopticks />
      <VanillaCoding />
      <Carrontins />
    </Section>
  );
};

export default Work;
