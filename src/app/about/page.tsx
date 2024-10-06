import PageContainer from "@/components/common/PageContainer";
import clsx from "clsx";
import React from "react";

const AboutPage = () => {
  return (
    <PageContainer className="bg-amber-50 py-[2em]">
      <img
        className={clsx(
          "mb-[1em] mx-auto",
          "h-[30vh] w-full object-cover"
        )}
        src="/main.jpeg"
      />
      Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aliquid, accusamus.
    </PageContainer>
  );
};

export default AboutPage;
