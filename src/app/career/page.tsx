import ListView from "@/components/common/ListView";
import PageContainer from "@/components/common/PageContainer";
import React from "react";

const ResumePage = () => {
  return (
    <PageContainer>
      <ListView>
        <li>캐롯 손해보험</li>
        <li>바닐라코딩</li>
        <li>찹스틱스</li>
        <li>레벨나인</li>
      </ListView>
    </PageContainer>
  );
};

export default ResumePage;
