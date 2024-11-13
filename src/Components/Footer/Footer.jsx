import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>located in the margin area at the bottom of a page. Headers and footers generally contain document information.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" srcset="" />
            <img src={assets.twitter_icon} alt="" srcset="" />
            <img src={assets.linkedin_icon} alt="" srcset="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 771 203 1234</li>
            <li>contact121@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
