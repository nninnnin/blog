import PageContainer from "@/components/common/PageContainer";
import React from "react";

const PostsPage = () => {
  return (
    <PageContainer className="bg-green-50">
      <ul className="w-full h-full">
        <li>생각하며 코딩하자</li>
        <li>debounce 구현해서 사용하기</li>
        <li>함수형 라이브러리 알아보기</li>
        <li>threejs에서 레이캐스터의 사용</li>
        <li>
          깃허브 액션으로 Amazon S3에 자동
          배포하기
        </li>
        <li>웹팩 알아보기</li>
        <li>SEO는 어떻게 이루어질까?</li>
        <li>SOP와 CORS</li>
      </ul>
    </PageContainer>
  );
};

export default PostsPage;
