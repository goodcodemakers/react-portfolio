import React from "react";
import "./Work.css";
import WorkSwiper from "./WorkSwiper";

function Work() {
  return (
    <section id="work">
      <h3>포트폴리오</h3>
      <div className="workbox">
        <div className="workOne">
          <div className="workImg weatherimg">
            <img src="./image/weather_1.jpg" alt="날씨앱 미리보기" />
          </div>
          <div className="workExplanation">
            <h3>react 기반 날씨 앱</h3>
            <h4>활용능력</h4>
            <ul>
              <li>react</li>
              <li>javascript</li>
              <li>css</li>
              <li>html</li>
            </ul>
            <hr />

            <p className="text-line">
              느낌점 : 공공 API말고 차라리 오픈웨더 api였으면 엄청 쉽게
              끝냇을것같은 느낌이 들었으나 여러 API를 사용해 보는것이 좋을 것
              같아 만들게 되었습니다.
            </p>
            <div className="btnBox">
              <button>
                <a href="https://weather-app-eta-rose.vercel.app/">
                  작품 URL 바로 가기
                </a>
              </button>
              <button>
                <a href="https://github.com/goodcodemakers/weather_app">
                  깃허브 URL 바로 가기
                </a>
              </button>
              <button>
                <a
                  href="https://expo.dev/artifacts/eas/7zBD7DNLvkgay72GdA6iiB.apk"
                  download
                >
                  APK 다운로드
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="workOne">
          <div className="workImg">
            <img src="./image/damdam_2.jpg" alt="금연메인화면" />
          </div>
          <div className="workExplanation">
            <h3>금연도움 어플</h3>
            <h4>활용 능력</h4>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>jquery</li>
              <li>javascript</li>
              <li>node</li>
            </ul>
            <hr />
            <p className="text-line">
              Node.js(express, ejs)를 이용해서 구현함
              <br />
              클라우드 타입을 통해 배포함
              <br />
              팀 프로젝트로써 많은 회의와 고민을 하며 만든 금연 도움 어플입니다.
              <br />
              어플 이름으로는 담담이며 실력 상향에 도움이 많이 되었습니다.
            </p>
            <div className="btnBox">
              <button>
                <a href="https://weather-app-eta-rose.vercel.app/">
                  작품 URL 바로 가기
                </a>
              </button>
              <button>
                <a href="https://github.com/goodcodemakers/weather_app">
                  깃허브 URL 바로 가기
                </a>
              </button>
              <button>
                <a
                  href="https://drive.google.com/file/d/1wSF2BkkKtr0WL1SbEhpUg1jv5WF-THKi/view?usp=sharing"
                  download
                >
                  APK 다운로드
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="workOne">
          <div className="workImg">
            <div className="oddugi">
              <WorkSwiper />
            </div>
          </div>
          <div className="workExplanation">
            <h3>오뚜기 메인화면 리뉴얼</h3>
            <h4>포트폴리오 활용 한것</h4>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </ul>
            <hr />
            <p className="text-line">
              오뚜기 메인 사이트를 경쟁브랜드 농심과 삼양 사이트를 참고하여
              리뉴얼 한 페이지입니다.
              <br />
              상품을 조금이라도 더 눈에 띄이게 해야하는 식품브랜드 상<br />
              음식 사진이 많이 들어가야 했으며 그러기 위해서는
              <br />
              슬라이드와 페이드 아웃이 반드시 필요하다고 생각 되어 둘 다
              작업하게 되었습니다.
            </p>
            <div className="btnBox">
              <button>
                <a href="https://goodcodemakers.github.io/oddugi/">
                  작품 URL 바로 가기
                </a>
              </button>
              <button>
                <a href="https://github.com/goodcodemakers/oddugi">
                  깃허브 URL 바로 가기
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
