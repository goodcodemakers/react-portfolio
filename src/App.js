import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//리엑트로 swiper를 쓰기위해 임포트함 하기전에는 npm i swiper를 쳐서 깔고 들고오기
import "swiper/css";
function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <h1>d</h1>
      <p>ㅇ</p>
    </>
  );
}

export default App;
