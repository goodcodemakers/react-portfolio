import React from "react";
import "./Work.css";
import { useState } from "react";
// Import Swiper React components
import "./ImageHover.css";

function Work() {
  const [moveImg, SetMoveImg] = useState();
  let imgBox = [
    "./image/oddugimain_1.jpg",
    "./image/oddugimain_2.jpg",
    "./image/oddugimain_2.jpg",
  ];

  let time = 0;
  let imgSlide = time++;
  return (
    <section id="work">
      <div className="col">
        <figure className="imghvr-shutter-out-diag-2">
          <img src="./image/weather_1.jpg" alt="단기 일기 예보" />
          <figcaption>
            <h3 className="workTitle">react 기반 날씨 앱</h3>
            <p className="workText">
              <span className="textTitle">소개 </span> <br />
              유저가 직접 지역을 선택하여 그 지역에 해당 되는 현재부터 6시간
              뒤의 날씨를 직관적으로 알아보기 쉬운 어플을 만들었습니다.
              <br />
              <span className="textTitle">느낀 점 </span>
              <br /> 공공 AIP 말고 차라리 오픈웨더 API 였으면 엄청 쉽게 끝냈을
              것 같았으나 그래도 여러 API를 사용하면 조금 더 API 사용에 능숙하게
              대할 수 있을 것 같아 만들게 되었습니다.
            </p>
            <div className="btnBox">
              <a
                className="setBtn"
                href="https://weather-app-eta-rose.vercel.app/"
                target={"_blank"}
              >
                <button>작품 URL 바로가기</button>
              </a>
              <a
                className="setBtn"
                href="https://github.com/goodcodemakers/weather_app"
                target={"_blank"}
              >
                <button>깃허브 링크 바로가기</button>
              </a>
              <a
                className="setBtn"
                href="https://expo.dev/artifacts/eas/7zBD7DNLvkgay72GdA6iiB.apk"
                download
              >
                <button>APK 다운받기</button>
              </a>
            </div>
          </figcaption>
          <a href="https://weather-app-eta-rose.vercel.app/"></a>
        </figure>

        {/* 2번째 프로젝트 */}
        <figure className="imghvr-shutter-out-diag-2">
          <img src="./image/oddugimain_1.png" alt="오뚜기" />

          <figcaption>
            <h3 className="workTitle">오뚜기 리메이크</h3>
            <p className="workText">
              <span className="textTitle">소개 </span> <br />
              오뚜기 메인페이지를 경쟁사인 농심을 바탕으로 리메이크한
              홈페이지입니다.
              <br />
              <span className="textTitle">느낀 점 </span>
              <br /> 보여줄 상품이 많다보니 이미지슬라이드와 여러 기능을 넣어서
              최대한 많은 상품을 보여줘야했으며 그러면서 UI적으로 깔끔하게
              만들어야 했던 작품이였습니다.
            </p>
            <div className="btnBox">
              <a
                className="setBtn"
                href="https://goodcodemakers.github.io/oddugi/"
                target={"_blank"}
              >
                <button>작품 URL 바로가기</button>
              </a>
              <a
                className="setBtn"
                href="https://github.com/goodcodemakers/oddugi"
                target={"_blank"}
              >
                <button>깃허브 링크 바로가기</button>
              </a>
            </div>
          </figcaption>
          <a href="https://goodcodemakers.github.io/oddugi/"></a>
        </figure>
      </div>
      <div className="col">
        <figure className="imghvr-shutter-out-diag-2">
          <img src="./image/damdam_2.jpg" alt="금연어플 담담" />
          <figcaption>
            <h3 className="workTitle">금연어플 담담</h3>
            <p className="workText">
              <span className="textTitle">소개 </span> <br />
              팀프로젝트로써 금연을 하고자하는 유저에게 도움이 되고자 만든
              어플입니다.
              <br />
              <span className="textTitle">느낀 점 </span>
              팀 프로젝트를 하게 될 시에 개인의 역량보다는 소통과 앞으로 나아갈
              방향에 대하여 제시하며 그것에 다 같이 맞춰가는 것이 중요하다는
              것을 알게 되었습니다.
              <br />
            </p>
            <div className="btnBox">
              <a
                className="setBtn"
                href="https://port-0-project-damdam-3vw25lcej8l61.gksl2.cloudtype.app/main"
                target={"_blank"}
              >
                <button>작품 URL 바로가기</button>
              </a>
              <a
                className="setBtn"
                href="https://github.com/goodcodemakers/project-DAMDAMi"
                target={"_blank"}
              >
                <button>깃허브 링크 바로가기</button>
              </a>
              <a
                className="setBtn"
                href="https://drive.google.com/file/d/1wSF2BkkKtr0WL1SbEhpUg1jv5WF-THKi/view?usp=sharing"
                download
              >
                <button>APK 다운받기</button>
              </a>
            </div>
          </figcaption>
          <a href="https://goodcodemakers.github.io/oddugi/"></a>
        </figure>
        <figure className="imghvr-shutter-out-diag-2">
          <img src="./image/newyear.png" alt="신년맞이페이지" />
          <figcaption>
            <h3 className="workTitle">근하 신년페이지</h3>
            <p className="workText">
              <span className="textTitle">소개 </span> <br />
              html.css,script를 사용하여씅며 데이터를사용하여 게시판을
              이용하게한 페이지입니다.
              <br />
              <span className="textTitle">느낀 점 </span>
              로그인을 하여 게시판을 지정된 사람만 지우게 했으면 좀 더 나은
              환경이 됐을 것 같습니다.
              <br />
            </p>
            <div className="btnBox">
              <a
                className="setBtn"
                href="https://port-0-new-year-page-r8xoo2mlefbgk04.sel3.cloudtype.app/"
                target={"_blank"}
              >
                <button>작품 URL 바로가기</button>
              </a>
              <a
                className="setBtn"
                href="https://github.com/goodcodemakers/new-year-page"
                target={"_blank"}
              >
                <button>깃허브 링크 바로가기</button>
              </a>
            </div>
          </figcaption>
          <a href="https://port-0-new-year-page-r8xoo2mlefbgk04.sel3.cloudtype.app/"></a>
        </figure>
      </div>
    </section>
  );
}

export default Work;
