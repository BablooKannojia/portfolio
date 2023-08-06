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
import { NavLink } from "react-router-dom";
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
          <NavLink to="vnfashions.com">
           <img src={Project1} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="alankarandesigns.com">
           <img src={Project2} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="bednsheet.com">
           <img src={Project3} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="dhanukhabioplantation.com">
           <img src={Project4} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="mbizspare.com">
           <img src={Project5} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="https://gamehuntt.vercel.app/">
           <img src={Project6} alt="" />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="">
           <img src={Project7} alt="" />
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
