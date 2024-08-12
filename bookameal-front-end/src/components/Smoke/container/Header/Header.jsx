import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import menuqr from '../../assets/menuqr.svg'; // Import the image
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Essence of Exquisite Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Exploring the realm of fine dining unveils a symphony of flavors, a meticulous presentation, and an ambiance that elevates the entire experience. The essence of fine dining is not just in the food but in the artistry and attention to detail that transform a meal into a memorable event.
      </p>
      <img src={menuqr} alt="menu QR code" className="menuqr__image" /> {/* Replace the button with the image */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
