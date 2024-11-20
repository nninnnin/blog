import ListView from "@/components/common/ListView";
import PageContainer from "@/components/common/PageContainer";
import React from "react";

const WorksPage = () => {
  return (
    <PageContainer>
      <ListView>
        <ListItem
          title="피트 아우돌프 정원 탐색기"
          year="2020"
        />
        <ListItem
          title="찾아봐요 마음조각"
          year="2024"
        />
      </ListView>
    </PageContainer>
  );
};

const ListItem = ({
  title,
  year,
}: {
  title: string;
  year: string;
}) => {
  return (
    <li className="flex justify-between">
      <div>{title}</div>
      <div>{year}</div>
    </li>
  );
};

export default WorksPage;
