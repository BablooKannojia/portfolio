import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/p1.png";
import Project4 from "../../img/p4.png";
import Project5 from "../../img/p5.png";
import Project6 from "../../img/p6.png";
import Project7 from "../../img/p7.png";
import CakeAnyTime from "../../img/cakeanytime.png";
import Loksatya from "../../img/loksatya.png"
import Vendor from "../../img/vendor.png"

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
           <a href="https://loksatya.com">
            <img src={Loksatya} alt="Loksatya.com" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
           <a href="https://vendorbrowser.com">
            <img src={Vendor} alt="vendorbrowser.com" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
           <a href="https://cakeanytime.in">
            <img src={CakeAnyTime} alt="CakeAnyTime.in" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://vnfashions.com">
           <img src={Project1} alt="" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
           <img src={Project4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://mbizspare.com">
           <img src={Project5} alt="" />
           </a>
        </SwiperSlide>
        <SwiperSlide>
           <img src={Project6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={Project7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
