import List from "@/components/resume/common/List";
import Section from "@/components/resume/common/Section";
import React from "react";

const Work = () => {
  return (
    <Section header="경력">
      <div>
        <h3>
          캐롯손해보험, 개발팀 인턴 (2020 - 2021)
        </h3>

        <List>
          <li>
            웹사이트 이용 시나리오와 보험가입
            플로우의 UX를 테스트하고{" "}
            <a href="https://pale-timimus-538.notion.site/UX-3e730a9426fe47f99212045f322c347f">
              개선점 관련 리포트
            </a>{" "}
            작성 및 팀내 공유
          </li>
          <li>
            제휴사 마케팅페이지 에디터 기능의{" "}
            <a href="https://www.figma.com/design/8D7M23QmYBm1CmXIpfXx8y/제휴-Admin?node-id=0-1">
              프로토타이핑
            </a>{" "}
            및 개발 담당
          </li>
        </List>
      </div>

      <div>
        <h3>바닐라코딩 (2021 - 2022)</h3>

        <List>
          <li>멘토링 / 풀스택 웹 개발</li>
        </List>
      </div>

      <div>
        <h3>찹스틱스 (2022 - 2023)</h3>
        <List>
          <li>FE 개발 리드</li>
        </List>
      </div>

      <div>
        <h3>레벨나인 (2023 ~ 현재)</h3>
        <List>
          <li>FE 개발</li>
        </List>
      </div>
    </Section>
  );
};

export default Work;
