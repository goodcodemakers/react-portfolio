import React from 'react'

function Main() {
  return (
    <section id="home">
          <div class="mainTitle">
            <div class="mainTitleText">
              <h1>안녕하세요</h1>
              <h1>최정호입니다.</h1>
              <h1>Web Purplisher&Front End</h1>
            </div>
            <div class="mainTitleimg">
              <div class="circle">
                <img src="" alt="메인프로필사진" />
              </div>
            </div>
          </div>
          <div class="subMain">
            <div class="textBox">
              <p>
                "항상 노력하며 나아가며<br />
                문제점을 찾아 해결하는 것에<br />
                대하여 즐거움을 느끼는 <br />신입 개발자
                <strong class="name">최정호</strong>입니다"
              </p>
            </div>
            <div class="userinfo">
              <h3>이메일</h3>
              <p>
                <a href="mailto:wjdgh1305@naver.com">wjdgh1305@naver.com</a>
              </p>
              <h3>전화번호</h3>
              <p>010-3853-4888</p>
              <h3>블로그</h3>
              <p>
                <a href="https://blog.naver.com/wjdgh1305"
                  >https://blog.naver.com/wjdgh1305</a
                >
              </p>
              <h3>깃허브</h3>
              <p>
                <a href="https://github.com/goodcodemakers"
                  >https://github.com/goodcodemakers</a
                >
              </p>
            </div>
          </div>
        </section>
  )
}

export default Main
