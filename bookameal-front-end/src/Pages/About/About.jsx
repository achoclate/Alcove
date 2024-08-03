// src/components/AboutUs/AboutUs.js
import React from "react";
import quotes from "../../utils/quotes.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./AboutUs.css";
import { sliderSettings } from "../../utils/common";

const AboutUs = () => {
  return (
    <div id="about-us" className="about-wrapper">
      <div className="paddings innerWidth about-container">
        <div className="flexColStart about-head">
          <span className="orangeText">Our Beliefs</span>
          <span className="primaryText">Inspiring Quotes</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {quotes.map((quote, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart about-card">
                <p className="secondaryText about-quote">"{quote.quote}"</p>
                <span className="primaryText about-author">- {quote.author}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUs;

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
