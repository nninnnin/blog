import ListView from "@/components/common/ListView";
import PageContainer from "@/components/common/PageContainer";
import React from "react";

const ResumePage = () => {
  return (
    <PageContainer>
      <ListView>
        <Item
          name="캐롯손해보험"
          span="2020-2021"
        />
        <Item
          name="바닐라코딩"
          span="2021-2022"
        />
        <Item name="찹스틱스" span="2022-2023" />
        <Item name="레벨나인" span="2023~" />
      </ListView>
    </PageContainer>
  );
};

const Item = ({
  name,
  span,
}: {
  name: string;
  span: string;
}) => {
  return (
    <li className="flex justify-between items-center">
      <span>{name}</span>
      <span className="min-w-[110px] flex justify-start">
        {span}
      </span>
    </li>
  );
};

export default ResumePage;
