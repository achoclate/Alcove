import React from 'react';

import SubHeading from '../../../components/SubHeading/SubHeading';
import images from '../../../constants/images';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant" style={{ color: 'white' }}>Our unwavering commitment</h1>`  `
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/* <img src={images.quote} alt="quote_image" /> */}
          <p className="p__opensans">Welcome to Alcove, where culinary excellence meets innovative artistry..</p>
        </div>
        <p className="p__opensans">Our passion lies in crafting unforgettable dining experiences that tantalize the senses and celebrate the richness of our local and global ingredients. Each dish on our menu is a testament to our commitment to quality, creativity, and sustainability. From farm-fresh produce to expertly curated spices, every element is thoughtfully selected to create a symphony of flavors. </p>
      </div>

      <div className="app__chef-sign">
        <p>Sam G</p>
        <p className="p__opensans">Executive Chef</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;