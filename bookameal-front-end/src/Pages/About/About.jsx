// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import data from '../../utils/about.json';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { sliderSettings } from "../../utils/common";
import 'swiper/css';
import './About.css';

const AboutUs = () => {
  return (
    <div id="about" className="about-wrapper">
      <div className="paddings innerWidth about-container">
        <div className="flexColStart about-head">
          <span className="orangeText">What Our Guests Say</span>
          <span className="primaryText">Testimonials</span>
        </div>
        <Swiper {...sliderSettings}>
          {data.map((quote, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart about-card">
                <p className="about-quote">"{quote.quote}"</p>
                <p className="about-author">- {quote.author}</p>
              </div>
            </SwiperSlide>
          ))}
          <SlideNextButton />
        </Swiper>
      </div>
    </div>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter about-buttons">
      <button onClick={() => swiper.slidePrev()} className="about-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="about-nextButton">
        &gt;
      </button>
    </div>
  );
};

export default AboutUs;
