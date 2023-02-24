import React from "react";
import "./Main.css";
function Main() {
  return (
    <section id="home">
      <div className="mainTitle">
        <div className="mainTitleText">
          <h1>안녕하세요</h1>
          <h1>최정호입니다.</h1>
          <h1>Web Purplisher&Front End</h1>
        </div>
        <div className="mainTitleimg">
          <div className="circle">
            <div></div>
          </div>
        </div>
      </div>
      <div className="subMain">
        <div className="textBox">
          <p>
            "항상 노력하며 나아가며
            <br />
            문제점을 찾아 해결하는 것에
            <br />
            대하여 즐거움을 느끼는 <br />
            신입 개발자
            <strong className="name">최정호</strong>입니다"
          </p>
        </div>
        <div className="userinfo">
          <h3>이메일</h3>
          <p>
            <a href="mailto:wjdgh1305@naver.com">wjdgh1305@naver.com</a>
          </p>
          <h3>전화번호</h3>
          <p>010-3853-4888</p>
          <h3>블로그</h3>
          <p>
            <a href="https://blog.naver.com/wjdgh1305">
              https://blog.naver.com/wjdgh1305
            </a>
          </p>
          <h3>깃허브</h3>
          <p>
            <a href="https://github.com/goodcodemakers">
              https://github.com/goodcodemakers
            </a>
          </p>

          <h3>수료한 과정</h3>

          <p>
            (스마트웹&콘텐츠개발)UI/UX웹디자인(웹퍼블리셔&프론트엔드개발)실무
          </p>
          <p>22.08~23.02</p>
        </div>
      </div>
    </section>
  );
}

export default Main;
