import React from "react";
import "./Footer.css";
import logo from "../Nav/img/evangadi-logo-home.png";
import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="Foter">
      <div className="logo__social">
        <ul className="logos">
          <li>
            <img src={logo} alt="" />
          </li>
        </ul>
        <ul className="social">
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <FacebookRoundedIcon />
            </a>
          </li>

          <li>
            <a href="#">
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="links">
        <h5>Usefull Link</h5>
        <ul>
          <li>
            <a href="#">How it Works</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="contacts">
        <h5>Contact Info</h5>
        <ul>
          <li>Evangadi Networks</li>
          <li>Support@evangadi.com</li>
          <li>Group 2</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
