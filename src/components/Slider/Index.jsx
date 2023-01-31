//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//videos
import CynthiaVideo1 from "../../assets/videos/linix.mp4";
import CynthiaVideo2 from "../../assets/videos/salesforce.mp4";
import CynthiaVideo3 from "../../assets/videos/sequoia.mp4";
import CynthiaVideo4 from "../../assets/videos/swissport.mp4";




// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 ">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 ">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo2} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo3} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo4} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
