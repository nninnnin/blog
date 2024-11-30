import PageContainer from "@/components/common/PageContainer";
import clsx from "clsx";
import React from "react";

const AboutPage = () => {
  return (
    <PageContainer>
      <img
        className={clsx(
          "mb-[1em] mx-auto",
          "h-[300px] w-full object-cover"
        )}
        src="/main.jpeg"
      />
      이것은 아마도 내가 일본의 호텔에서 커피를
      마시던 흔적이다.
    </PageContainer>
  );
};

export default AboutPage;
