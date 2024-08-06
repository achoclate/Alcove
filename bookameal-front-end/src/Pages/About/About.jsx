import React from 'react';
import './About.css';
import aboutImage from '/home/achoclate/BookaMeal/bookameal-front-end/src/assets/about.jpeg'

const About = () => (
  <div className="about-container" id="about">
    <div className="about-overlay">
      {/* Overlay image can be added here if needed */}
    </div>

    <div className="about-content">
      <div className="about-content_about">
        <h1 className="heading">About Us</h1>
        <p className="paragraph">The Alcove is a charming, intimate nook within the restaurant that offers a secluded and cozy dining experience. It’s the perfect spot for diners seeking a touch of privacy while enjoying their meal, creating a serene ambiance that enhances the overall dining experience. This inviting space, often tucked away, allows guests to feel special and relaxed as they savor their food and company in a beautifully designed, peaceful restaurant.As we continue to evolve, The Alcove remains steadfast in its mission to provide a haven of comfort and exquisite taste. We invite you to join us and experience the unique charm of our restaurant—a place where every visit is more than just a meal; it’s an opportunity to escape, unwind, and savor the extraordinary.</p>
        <button type="button" className="button">Know More</button>
      </div>

      <div className="about-content_knife">
      <img src={aboutImage} alt="About Knife" />
        {/* Knife image can be added here if needed */}
      </div>

      <div className="about-content_history">
        <h1 className="heading">Our History</h1>
        <p className="paragraph">Nestled in the heart of our bustling city, The Alcove began as a dream to create a sanctuary of tranquility amid the lively rhythm of urban life. Established in 2024, The Alcove emerged from a passion for crafting not just meals, but moments of serene indulgence. From its humble beginnings as a modest dining space, it has grown into a beloved retreat known for its intimate and cozy atmosphere.

Inspired by the concept of a secluded hideaway, The Alcove was designed to offer diners a touch of privacy and a respite from the everyday hustle. Every corner of the restaurant reflects a commitment to creating a peaceful ambiance, where the art of dining is elevated by a beautifully designed, serene environment. Our dedication to excellence is evident in every detail.</p>
        <button type="button" className="button">Know More</button>
      </div>
    </div>
  </div>
);

export default About;
