import React from "react";
import Subsection from "@/components/resume/common/Subsection";
import Topic from "@/components/resume/common/Topic";
import List from "@/components/resume/common/List";

const Rebel9 = () => {
  return (
    <Subsection header="레벨나인 (2023 - 현재)">
      <Topic header="프론트엔드 개발">
        모바일, 태블릿, 데스크탑 등 다양한
        디바이스를 넘나드는 웹 애플리케이션들을
        개발하고 있습니다. 주로
        <List>
          <List.Item>
            기관의 아카이브를 탐색하는 데스크탑 웹
            애플리케이션,
          </List.Item>
          <List.Item>
            전시나 행사에서 사용자들의 호기심을
            자극하고 접근성을 높이는 인터랙티브
            모바일 웹 애플리케이션,
          </List.Item>
          <List.Item>
            태블릿을 활용한 미디어 컨텐츠 탐색용
            웹 애플리케이션
          </List.Item>
        </List>
        등을 만듭니다.
        <br />
        <br />
        사내에서 개발되어 사용되고 있는 CMS
        프로덕트{" "}
        <a href="https://memexdata.io">미믹스</a>
        와의 연동에서 빈번하게 발생하는 데이터
        읽기, 쓰기 및 변형 로직을{" "}
        <a href="https://www.npmjs.com/package/@rebel9/memex-fetcher">
          라이브러리
        </a>
        로 분리하여 재사용성을 높이는 등 개발의
        효율성을 높이는 일에도 힘쓰고 있습니다.
      </Topic>

      <Topic header="프로젝트: 옵티컬미 포텐셜미">
        <List>
          <List.Item>
            레벨나인이 작가로서 참여한 피크닉의
            전시 ‘회사만들기’ 에 전시된
            &lt;옵티컬미 포텐셜미&gt;의{" "}
            <a href="https://www.opticalmepotentialme.com">
              모바일 웹 애플리케이션
            </a>{" "}
            개발
          </List.Item>

          <List.Item>
            8개 질문에 대한 답변의 내용을 담은
            바코드를 생성하여 스크린 미디어로
            결과를 전송
          </List.Item>
        </List>
      </Topic>

      <Topic header="프로젝트: 이모션 디코더">
        <List>
          <List.Item>
            부모와 아이의 감정을 선택하여 그에
            걸맞는 감정을 이미지와 수치로 나타내는{" "}
            이모션 디코더 <a>웹 애플리케이션</a>{" "}
            개발
          </List.Item>

          <List.Item>
            각 슬라이드의 장면 전환 트랜지션
            연출을 위해 기본 스크롤 기능을
            제거하고 throttle/debounce를 활용해
            스크롤 이벤트를 적절한 간격으로
            필터링하여 애니메이션을 트리거
          </List.Item>

          <List.Item>
            마지막 결과 카드를 이미지 파일로
            저장하는 기능에 사용된
            `dom-to-image`가 DOM에 외부
            리소스(이미지)가 포함된 경우 cors
            에러를 발생시키는 문제 해결을 위해
            프록시 사용
          </List.Item>
        </List>
      </Topic>

      <Topic header="프로젝트: 우당탕탕 인턴십">
        <List>
          <List.Item>
            국립아시아문화전당(ACC)의 &lt;우당탕탕
            인턴십&gt; 체험 프로그램의 진행에
            사용되는 태블릿 전용 웹 및
            프레젠테이션 미디어 개발
          </List.Item>

          <List.Item>
            각기 다른 15개 직업의 미션기능에서
            사용되는 컴포넌트의 공통부분을 최대한
            재사용하기 위해 의존성역전 패턴 사용
          </List.Item>

          <List.Item>
            15개의 미션과 관련된 상태 조회 및 수정
            로직을 여러 위계의 hook으로 분리하고
            조합하여 재사용성 최대화
            <List>
              <List.Item>
                <a href="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/acc-hook-assemble.png">
                  커스텀 훅 조직도
                </a>
              </List.Item>
            </List>
          </List.Item>

          <List.Item>
            서버에 3개 모델로 나뉘어진 각 5개의
            직업 정보들을 요청하고 JSON으로 재구성
            및 저장하는 로직을 여러 단계의 작은
            함수들로 작성하고 함수형 프로그래밍
            라이브러리 `fxjs` 의 파이핑 및 커링을
            사용해 조립하여 높은 수준의 재사용성과
            가독성의 코드 작성
          </List.Item>

          <List.Item>
            장소를 돌아다니며 진행되며 네트워크
            통신이 불가능한 체험 환경의 특성으로
            오프라인 환경에서도 정상적인
            애플리케이션 내 미션 진행이 가능하도록
            대응
            <List>
              <List.Item>
                사운드의 경우 AudioContext API를
                사용해 미리 로딩해 브라우저 캐시에
                저장한 후 추후 오프라인 환경에서
                사용
              </List.Item>
              <List.Item>
                이미지의 경우 Image 객체 생성을
                통해 브라우저 캐시에 저장한 후
                추후 오프라인 환경에서 사용
              </List.Item>
              <List.Item>
                이외의 미션 진행상황 등 클라이언트
                상태의 경우 recoil의 atom
                effects를 이용해 상태를
                로컬스토리지에 영속화
              </List.Item>
            </List>
          </List.Item>
        </List>
      </Topic>

      <Topic header="YDP 문화라운지 DADADA (영등포구청)">
        <List>
          <List.Item>
            영등포구청 타임스퀘어 앞에 설치된
            &lt;문화라운지 DADADA&gt;에 설치된{" "}
            <a href="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/ydp-media-in-place.jpg">
              미디어 3종
            </a>
            과 AR 컨텐츠를 담은{" "}
            <a href="https://justin-cms-images.s3.ap-northeast-2.amazonaws.com/ydp-ar.mp4">
              모바일 웹 애플리케이션
            </a>{" "}
            개발
          </List.Item>

          <List.Item>
            하드웨어 조이스틱에서 프레임단위로
            발생하는 신호를 적절한 간격으로
            제어하여 화면을 조작하기 위해
            throttle/debounce 사용
          </List.Item>

          <List.Item>
            공간 미디어 3종 중 게임의 경우, HTML
            Canvas로 구현된 2D 슈팅 형태의
            게임으로서 간단한 충돌 알고리즘을 직접
            구현하여 사용
          </List.Item>

          <List.Item>
            ModelViewer 사용으로 iOS/Android
            각각의 네이티브 ARKit을 활용한 높은
            퀄리티의 AR 컨텐츠 제공
          </List.Item>
        </List>
      </Topic>

      <Topic header="AR Heritage (광주 대동문화재단)">
        <List>
          <List.Item>
            위치기반 AR과 페이스필터로 구성된 AR
            컨텐츠를 담은{" "}
            <a href="https://arheritage.inmun-story.com/">
              모바일 웹 애플리케이션
            </a>{" "}
            개발
            <List>
              <List.Item>
                (뷰포트를 인식하여 리다이렉션
                하므로, 모바일에서 접속하세요)
              </List.Item>
            </List>
          </List.Item>

          <List.Item>
            위치기반 증강에는 AR.js, 얼굴인식
            증강에는 Mind.AR, 손 움직임 인식에는
            handtrack.js 사용으로 다양한 형태의
            인터랙티브 컨텐츠 개발
          </List.Item>

          <List.Item>
            AR 인터랙티브 컨텐츠는 Vanilla
            JavaScript로 개발하여 별도로 빌드하고
            정적으로 배포하여 NextJS 프로젝트에서
            iframe으로 렌더링하고, postMessage를
            사용하여 통신하는 일종의 마이크로
            프론트엔드 아키텍처 활용 - AR 관련
            라이브러리들이 Vanilla 친화적이라는
            특성 고려 및 개발 환경의 분리로 빌드
            속도 개선 효과
          </List.Item>
        </List>
      </Topic>

      <Topic header="Korea Memorial (보훈부)">
        <List>
          <List.Item>
            얼굴인식 증강(페이스필터) 위주의 AR
            컨텐츠를 담은{" "}
            <a href="https://www.memorial-timecube.com/">
              모바일 웹 애플리케이션
            </a>
          </List.Item>

          <List.Item>
            Mind.AR과 handtrack.js를 사용
          </List.Item>

          <List.Item>
            인터랙티브 컨텐츠 개발에 사용된 위의
            두 가지 라이브러리가 VanillaJS
            친화적임을 고려하여 UI 구성에 리액트를
            사용하지 않고 Web Component와
            Webpack을 사용하여 간소화 된 UI
            빌드환경 구성
          </List.Item>

          <List.Item>
            인터랙션에 따라 일시정지/재생이 가능한
            marquee 컴포넌트를 직접 구현
          </List.Item>
        </List>
      </Topic>

      <Topic header="청주에 뜬 달 (청주시립미술관)">
        <List>
          <List.Item>
            p5.js의 WebGL 렌더링 모드를 사용하여
            인터랙티브한 3D 타일 요소가 가미된{" "}
            <a href="https://www.wishfullmoon.kr/">
              모바일 웹 애플리케이션
            </a>{" "}
            개발
          </List.Item>
        </List>
      </Topic>
    </Subsection>
  );
};

export default Rebel9;
