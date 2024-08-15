import React, { useState, useEffect } from "react";
import BiryaniImg1 from "../../assets/biryani3.png";
import BiryaniImg2 from "../../assets/biryani5.png";
import BiryaniImg3 from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";
import "./Hero.css"; // Importing the CSS file

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(BiryaniImg1);

  useEffect(() => {
    const imageRotation = setInterval(() => {
      setImageId((prevImage) => {
        const currentIndex = ImageList.findIndex(
          (image) => image.img === prevImage
        );
        const nextIndex = (currentIndex + 1) % ImageList.length;
        return ImageList[nextIndex].img;
      });
    }, 6000); // 6 seconds for each cycle (rotation + pause)

    return () => clearInterval(imageRotation);
  }, []);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="hero-container" style={bgImage}>
      <div className="hero-content">
        <div className="hero-grid">
          {/* Text content section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="text-content"
          >
            <h1 className="hero-title">
              Welcome to <span className="highlight-text">Brunch</span> Palace
            </h1>
            <p className="hero-description">
              Indulge in the finest flavors with our exquisite range of biryani
              dishes. Each plate is a celebration of taste, crafted with passion
              and the freshest ingredients.
            </p>
            <div>
              <button className="order-button">Order Now</button>
            </div>
          </div>
          {/* Image section */}
          <div className="image-container">
            <div className="main-image-wrapper">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
                src={imageId}
                alt="biryani img"
                className="main-image"
              />
            </div>
            <div className="image-selector">
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setImageId(item.img);
                  }}
                  alt="biryani img"
                  className="thumbnail-image"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
