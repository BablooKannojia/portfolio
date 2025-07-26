import React, { useContext } from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import Resume from "./resume.pdf";
import "./Services.css";

const transition = {
  duration: 1,
  type: "spring",
};

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          My Skills – React JS, React Native, Angular, JavaScript, TypeScript,
          <br />
          Node.js, Express, API Development, Docker, AWS, VPS, Git, MongoDB
        </span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        {/* Card 1 - Frontend */}
        <motion.div
          className="card-motion"
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading="Frontend Development"
            detail="React JS, React Native, Angular, JavaScript, TypeScript"
          />
        </motion.div>

        {/* Card 2 - Backend & APIs */}
        <motion.div
          className="card-motion"
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Backend & APIs"
            detail="Node.js, Express, REST APIs, MongoDB, MySQL"
          />
        </motion.div>

        {/* Card 3 - Tools */}
        <motion.div
          className="card-motion"
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading="Tools & DevOps"
            detail="Git, GitHub, Docker, VPS, AWS"
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
