import React from "react";

import List from "@/components/resume/common/List";
import Subsection from "@/components/resume/common/Subsection";
import Topic from "@/components/resume/common/Topic";

const Chopticks = () => {
  return (
    <Subsection header="찹스틱스 (2022 - 2023)">
      <Topic header="프론트엔드 리드">
        <List>
          <List.Item>
            커머스 플랫폼 개발 초기에 합류하여
            프론트엔드 리드로서 클라이머스에서
            사용되는 3가지 프로덕트의 클라이언트
            사이드 개발 환경 세팅, 기술 스택 선정,
            데이터 구조화 및 기능 개발과
            코드리뷰를 담당하였습니다.
          </List.Item>
          <List.Item>
            프로덕트 팀의 개발자 3명(백엔드 1,
            프론트엔드 2) 중 백엔드/프론트엔드를
            아우를 수 있는 유일한 인력으로서
            에러핸들링 방식이나 배포방식, 브랜치
            병합방식 설정, 백엔드 코드 리뷰 및
            디버깅등에 적극적으로 참여하고
            기여했습니다. 팀 내 이슈 트래킹
            방식이나 데일리 스크럼 등의 소통 /
            협업방식 또한 제안하고 주도하여
            개발팀의 문화를 만들어나가려고
            적극적으로 참여하였고 팀원들과 좋은
            결과를 만들어나가기 위해 노력했습니다.
          </List.Item>
          <List.Item>
            각 프로덕트에서 가장 자주 사용되는
            시스템 모달 UI를 커스텀 훅으로
            구현하였고 버튼이나 모달,
            타이포그래피를 프로덕트 오너와 함께
            디자인시스템을 정리하고
            styled-component theme으로 코드화하여
            UI 구현 시간을 크게 단축할 수
            있었습니다.
          </List.Item>
          <List.Item>
            판매자 어드민과 공통적으로 사용되는
            타이머와 관련된 코드를 커스텀 훅으로
            분리하여 npm 패키지로 배포하였습니다.
          </List.Item>
        </List>
      </Topic>

      <Topic header="찹스틱스 메인 플랫폼의 쇼핑 기능 개발">
        <List>
          <List.Item>
            카트, 주문, 결제 기능 및 교환/반품
            요청과 조회기능 구현
          </List.Item>
          <List.Item>
            업데이트 빈도가 낮은 상품 카테고리,
            브랜드 리스트 페이지에 SSG 적용
          </List.Item>
          <List.Item>
            복수의 상품 필수옵션 선택 시 ‘선택
            중인 옵션’ 을 표현할 수 있는 추가적인
            데이터구조 설계 및 구현
          </List.Item>
          <List.Item>
            서버상태로 관리되는 카트 아이템에
            optimistic update 적용
          </List.Item>
          <List.Item>
            다양한 상황을 고려한 상품 할인가 및
            배송비 계산을 위해 가독성과
            유지보수성을 고려하여 유틸리티 함수
            분리 및 재사용
          </List.Item>
          <List.Item>
            포트원과 Toss Payments로 PG 결제 연동
          </List.Item>
          <List.Item>
            주문 및 배송상태 표현에 필요한 일방향
            참조관계의 데이터 구조 설계 및 적용
          </List.Item>
        </List>
      </Topic>

      <Topic header="찹스틱스 작가님들의 상품 등록과 샵 관리를 위한 파트너 어드민 개발">
        <List>
          <List.Item>
            샵 설정, 상품 등록 및 관리기능 구현
          </List.Item>
          <List.Item>
            상품/샵의 생성과 업데이트에 관련된
            복잡한 객체의 중복 타이핑을 줄이기
            위해 Partial / Omit type등 유틸리티
            타입 사용
          </List.Item>
          <List.Item>
            React-Hook-Form으로 관리되는 인풋값을
            편리하게 사용하기 위해 인풋 키를 상수
            객체로 관리하는 패턴을 고안하여 적용
          </List.Item>
          <List.Item>
            옵션, 카트, 주문정보 등 복잡한
            서버상태들을 렌더링에 적합한 형태로
            정규화 진행
          </List.Item>
          <List.Item>
            상품 옵션 설정과 저장에 필요한 데이터
            구조 설계 및 구현
          </List.Item>
          <List.Item>
            상품 카테고리 데이터의 복잡도를 낮추기
            위해 양방향 참조 가능한 트리구조의
            데이터 설계 및 구현
          </List.Item>
          <List.Item>
            3가지의 공공 API 를 이용하여 사업자를
            3단계로 구분하는 로직 구현 (일반,
            통신사업자, 간이사업자)
          </List.Item>
          <List.Item>
            전화번호 및 계좌정보 인증 기능 구현
          </List.Item>
        </List>
      </Topic>
    </Subsection>
  );
};

export default Chopticks;
