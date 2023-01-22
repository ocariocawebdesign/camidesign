//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//videos
import CynthiaVideo1 from "../../assets/videos/linix.mp4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls style={{}}>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
