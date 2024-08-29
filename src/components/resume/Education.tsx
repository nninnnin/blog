import List from "@/components/resume/common/List";
import Section from "@/components/resume/common/Section";
import React from "react";

const Education = () => {
  return (
    <Section header="학력">
      <div>
        <h3>
          단국대학교 국제경영학과 (2013 - 2020)
        </h3>

        <List>
          <li>
            멋쟁이 사자처럼: 웹 개발 동아리,{" "}
            <a href="https://dkufest2019.herokuapp.com/">
              교내 축제 웹사이트
            </a>{" "}
            개발
          </li>
        </List>
      </div>

      <div>
        <h3>
          바닐라코딩 소프트웨어 엔지니어링
          부트캠프 8기 (2020)
        </h3>

        <List>
          <li>
            바닐라 자바스크립트 기초 및 BE/FE
            프레임워크 학습을 위한 과제 기반의
            학습
          </li>
        </List>
      </div>
    </Section>
  );
};

export default Education;
