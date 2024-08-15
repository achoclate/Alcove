import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import "./Footer.css"; // Importing the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-content">
        <div className="footer-grid">
          <div className="footer-about">
            <h1 className="footer-logo">BRUNCH</h1>
            <p>Welcome to Brunch, home of satisfaction!!!</p>
            <div className="footer-contact">
              <FaLocationArrow />
              <p>Nairobi, Kenya.</p>
            </div>
            <div className="footer-contact">
              <FaMobileAlt />
              <p>0722000999</p>
            </div>
            {/* Social Handle */}
            <div className="footer-social">
              <a href="#">
                <FaInstagram className="social-icon" />
              </a>
              <a href="#">
                <FaFacebook className="social-icon" />
              </a>
              <a href="#">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h1 className="footer-title">Quick Links</h1>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 All rights reserved || Brunch Palace
        </div>
      </section>
    </div>
  );
};

export default Footer;
