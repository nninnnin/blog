import ListView from "@/components/common/ListView";
import PageContainer from "@/components/common/PageContainer";
import React from "react";

const WorksPage = () => {
  return (
    <PageContainer>
      <ListView>
        <ListItem
          title="피트 아우돌프의 정원탐색기"
          year="2020"
        />
        <ListItem
          title="단어퍼즐 앱 WORDIE"
          year="2020"
        />
        <ListItem
          title="찹스틱스 커머스 플랫폼"
          year="2022-2023"
        />
        <ListItem
          title="옵티컬 미, 포텐셜 미"
          year="2023"
        />
        <ListItem
          title="이모션 디코더"
          year="2023"
        />
        <ListItem
          title="찾아봐요 마음조각"
          year="2024"
        />
        <ListItem
          title="YDP 문화라운지 따따따"
          year="2024"
        />
        <ListItem
          title="청주에 뜬 달"
          year="2024"
        />
        <ListItem
          title="안동선 블로그"
          year="2024"
        />
        <ListItem
          title="용담플레이"
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
