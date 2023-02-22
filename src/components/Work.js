import React from "react";
import "./Work.css";
import WorkSwiper from "./WorkSwiper";
import "./ImageHover.css";
function Work() {
  return (
    <section id="work">
      <figure class="imghvr-flip-diag-1">
        <img src="./image/weather_1.jpg" alt="단기 일기 예보" />
        <figcaption>
          <h3 class="">react 기반 날씨 앱</h3>
          <p class="">
            <i>
              소개 : 유저가 직접 지역을 선택하여 그 지역에 해당 되는 현재부터
              6시간 뒤의 날씨를 직관적으로 알아보기 쉬운 어플을 만들었습니다.
              <br />
              느낀 점 : 공공 AIP 말고 차라리 오픈웨더 API 였으면 엄청 쉽게
              끝냈을 것 같았으나 그래도 여러 API를 사용하면 조금 더 API 사용에
              능숙하게 대할 수 있을 것 같아 만들게 되었습니다.
            </i>
          </p>
          <a class="" href="https://weather-app-eta-rose.vercel.app/">
            <button>작품 URL 바로가기</button>
          </a>
          <a class="" href="https://github.com/goodcodemakers/weather_app">
            <button>깃허브 링크 바로가기</button>
          </a>
        </figcaption>
        <a href="https://weather-app-eta-rose.vercel.app/"></a>
      </figure>
    </section>
  );
}

export default Work;
