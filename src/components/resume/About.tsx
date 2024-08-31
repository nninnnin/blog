import Section from "@/components/resume/common/Section";
import React from "react";

const About = () => {
  return (
    <Section header="소개">
      <p>
        안녕하세요, 이동규입니다. 국제경영학을
        전공하였으나 어린 시절 무언가를
        만드는데에서 느꼈던 즐거움을 떠올리고
        개발을 배우기 시작해 2020년부터 웹
        개발자로 일해오고 있습니다.
        <br />
        저는 개발자의 입장에서 최종적으로
        프로덕트가 사용자와 어떤 감각으로 상호
        작용될 수 있을지, 프로덕트가 사용되는
        환경에서 최적의 효과를 보이는 기술은
        무엇인지에 대해 고민하고 동료 개발자,
        디자이너, 기획자들과 적극적으로 함께
        의논하여 더 좋은 방법을 찾으려고
        노력합니다.
        <br />
        또한 저는 프로덕트의 퀄리티를 중요하게
        생각합니다. 소프트웨어 엔지니어 마틴
        파울러는 프로덕트의 내적 퀄리티(=가독성과
        확장성, 재사용성이 높은 코드)와 외적
        퀄리티(=좋은 사용성, 낮은 버그)라는 개념을
        이야기하는데, 저는 내적 퀄리티를
        높임으로서 결과적으로 외적 퀄리티도 높일
        수 있다고 믿습니다. 작은 규모의 프로젝트라
        하더라도 프로젝트 내에서 가장 반복적으로
        활용될 수 있는 UI와 데이터 바인딩 로직을
        적절한 쓰임새로 모듈화하여 최대한 작업이
        점점 쉬워질 수 있도록 코드를 쓰고,
        다듬습니다.
      </p>
    </Section>
  );
};

export default About;
