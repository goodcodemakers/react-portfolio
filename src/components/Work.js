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
      <figure className="imghvr-shutter-out-diag-2">
        <img src="./image/weather_1.jpg" alt="단기 일기 예보" />
        <figcaption>
          <h3 className="workTitle">react 기반 날씨 앱</h3>
          <p className="workText">
            <span className="textTitle">소개 </span> <br />
            유저가 직접 지역을 선택하여 그 지역에 해당 되는 현재부터 6시간 뒤의
            날씨를 직관적으로 알아보기 쉬운 어플을 만들었습니다.
            <br />
            <span className="textTitle">느낀 점 </span>
            <br /> 공공 AIP 말고 차라리 오픈웨더 API 였으면 엄청 쉽게 끝냈을 것
            같았으나 그래도 여러 API를 사용하면 조금 더 API 사용에 능숙하게 대할
            수 있을 것 같아 만들게 되었습니다.
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
          <h3 className="workTitle">react 기반 날씨 앱</h3>
          <p className="workText">
            <span className="textTitle">소개 </span> <br />
            유저가 직접 지역을 선택하여 그 지역에 해당 되는 현재부터 6시간 뒤의
            날씨를 직관적으로 알아보기 쉬운 어플을 만들었습니다.
            <br />
            <span className="textTitle">느낀 점 </span>
            <br /> 공공 AIP 말고 차라리 오픈웨더 API 였으면 엄청 쉽게 끝냈을 것
            같았으나 그래도 여러 API를 사용하면 조금 더 API 사용에 능숙하게 대할
            수 있을 것 같아 만들게 되었습니다.
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
    </section>
  );
}

export default Work;
