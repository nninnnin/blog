import PageContainer from "@/components/common/PageContainer";
import clsx from "clsx";
import React from "react";

const AboutPage = () => {
  return (
    <PageContainer>
      <img
        className={clsx(
          "mb-[1em] mx-auto",
          "h-[300px] w-full object-cover",
          "border-solid border-[2px] border-[blue]",
          "sepia-[70]"
        )}
        src="/main.jpeg"
      />
      2024년 도쿄의 호텔에서..
    </PageContainer>
  );
};

export default AboutPage;
