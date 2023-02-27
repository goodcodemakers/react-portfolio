import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/Loading";

//리엑트로 swiper를 쓰기위해 임포트함 하기전에는 npm i swiper를 쳐서 깔고 들고오기
import "swiper/css";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="container">
      <LoadingScreen />
    </div>
  );
}

export default App;
