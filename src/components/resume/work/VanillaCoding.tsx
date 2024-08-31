import React from "react";

import List from "@/components/resume/common/List";
import Topic from "@/components/resume/common/Topic";
import Subsection from "@/components/resume/common/Subsection";

const VanillaCoding = () => {
  return (
    <Subsection header="바닐라코딩 (2021 - 2022)">
      <h2 className="border-b-[1px] text-[1.2em] font-semibold">
        멘토링
      </h2>

      <Topic header="주간 과제 리뷰세션 진행">
        <List>
          <List.Item>
            주 1회 주어지는 과제와 관련된 내용을
            설명하는 세션 진행
          </List.Item>

          <List.Item>
            각 주에 해당하는 주제에 대한 설명과
            과제물에 대한 방향성과 힌트 제공
          </List.Item>
        </List>
      </Topic>

      <div>
        <h3 className="mb-[0.5em] font-semibold">
          수강생 과제물 코드리뷰
        </h3>

        <List>
          <List.Item>
            주 1회 깃랩 PR을 통해 제출된 수강생
            과제물에 대한 코드 리뷰를 진행
          </List.Item>

          <List.Item>
            일관된 코드스타일, 적절한 네이밍,
            컴포넌트 구조 설계, 관심사의 분리 등
            기본적이지만 중요한 내용을 코멘트
          </List.Item>
        </List>
      </div>
      <h2 className="border-b-[1px] text-[1.2em] font-semibold">
        개발
      </h2>
      <div>
        <h3 className="mb-[0.5em] font-semibold">
          코드리뷰 페어 배정 자동화 툴 개발
        </h3>
        <List>
          <List.Item>
            수강생들의 코드리뷰 페어를 알고리즘에
            따라 생성하고 그 결과를 깃랩
            레포지토리와 노션에 반영하는 업무
            자동화 툴
          </List.Item>

          <List.Item>
            직접 페어를 시트에 기록하고 마우스로
            클릭해 깃랩에서 분배하던 업무를 코드로
            자동화시켜 날짜 입력과 클릭 한번으로
            동일한 업무를 진행할 수 있게 개선
          </List.Item>

          <List.Item>
            2시간을 5분으로 단축
          </List.Item>
        </List>
      </div>
      <div>
        <h3 className="mb-[0.5em] font-semibold">
          바닐라코딩 웹 포털 개발
        </h3>
        <List>
          <List.Item>
            코스 신청, 결제 및 코스 컨텐츠를
            조회할 수 있는 웹 포털
          </List.Item>

          <List.Item>
            내부적으로 관리되는 디렉터리 구조와
            동일한 구조로 컨텐츠를 네비게이팅 할
            수 있도록, 빌드타임에 파일시스템을
            읽고 재구조화하여 페이지 렌더링
          </List.Item>

          <List.Item>
            SSG, SSR 적용으로 사용자의 페이지 로딩
            속도 개선
          </List.Item>

          <List.Item>
            remark, rehype 사용으로 마크다운
            문법에 대한 스타일링 커스터마이즈
          </List.Item>

          <List.Item>
            Next.js, Express.js, MongoDB로 풀스택
            개발
          </List.Item>
        </List>
      </div>
      <div>
        <h3 className="mb-[0.5em] font-semibold">
          컴퓨팅 사고 게임 앱 Wordie 개발
        </h3>
        <List>
          <List.Item>
            큐, 스택, 트리등의 개념을 단어 퍼즐을
            풀며 익힐 수 있는 게임 어플리케이션
          </List.Item>

          <List.Item>
            React Native로 개발
          </List.Item>

          <List.Item>
            안드로이드 플레이스토어에 배포
          </List.Item>
        </List>
      </div>
      <hr />
    </Subsection>
  );
};

export default VanillaCoding;
