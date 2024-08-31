import React from "react";

import List from "@/components/resume/common/List";
import Subsection from "@/components/resume/common/Subsection";

const Carrontins = () => {
  return (
    <Subsection header="캐롯손해보험, 개발팀 인턴 (2020 - 2021)">
      <List>
        <List.Item>
          웹사이트 이용 시나리오와 보험가입
          플로우의 UX를 테스트하고{" "}
          <a href="https://pale-timimus-538.notion.site/UX-3e730a9426fe47f99212045f322c347f">
            개선점 관련 리포트
          </a>{" "}
          작성 및 팀내 공유
        </List.Item>

        <List.Item>
          제휴사 마케팅페이지 에디터 기능의{" "}
          <a href="https://www.figma.com/design/8D7M23QmYBm1CmXIpfXx8y/제휴-Admin?node-id=0-1">
            프로토타이핑
          </a>{" "}
          및 개발 담당
        </List.Item>
      </List>
    </Subsection>
  );
};

export default Carrontins;
