import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Work.css";

// import required modules
import { Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./image/oddugimain_1.png" alt="오뚜기메인화면" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/oddugimain_2.png" alt="서브화면" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/oddugimain_3.png" alt="서브페이지" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
