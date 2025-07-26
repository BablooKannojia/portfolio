import React from "react";
import "./Footer.css";
import { BrowserRouter, Link} from 'react-router-dom'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />

      <div className="f-content gap-0">
        <span>Email: bablookmr143@gmail.com</span>
        <span>Mob: +91 8115353051</span>
        <div className="f-icons">
          <BrowserRouter>
            <Link to="www.instagram.com/bablookannojia"><Insta color="white" size={"3rem"} /></Link>
            <Link to="www.facebook.com/bablookannojia"><Facebook color="white" size={"3rem"} /></Link>
            <Link to="www.github.com/bablookannojia"><Gitub color="white" size={"3rem"} /></Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Footer;
