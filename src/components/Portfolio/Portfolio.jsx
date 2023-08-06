import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/p1.png";
import Project2 from "../../img/p2.png";
import Project3 from "../../img/p3.png";
import Project4 from "../../img/p4.png";
import Project5 from "../../img/p5.png";
import Project6 from "../../img/p6.png";
import Project7 from "../../img/p7.png";

import { themeContext } from "../../Context";
import { Link } from "react-scroll";
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
          <Link to="vnfashions.com">
           <img src={Project1} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
           <img src={Project2} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
           <img src={Project3} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
           <img src={Project4} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
