import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className="footer" id="login" style={{ backgroundColor: 'black' }}>
    <div className="footer-links">
      <div className="footer-contact">
        <h1>Contact Us</h1>
        <p>Westlands, Nairobi, NBO 10019, Kenya</p>
        <p>+254 72-344-1230</p>
        <p>+254 72-555-1230</p>
      </div>

      <div className="footer-logo">
        <p>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="footer-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="footer-work">
        <h1>Working Hours</h1>
        <p>Monday-Friday:</p>
        <p>08:00 am - 12:00 am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>2024 Alcove. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
