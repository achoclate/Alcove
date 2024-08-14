// import React from "react";
// import BiryaniImg from "../../assets/biryani5.png";
// import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";
// import "./About.css"; // Importing the CSS file

// const Banner = () => {
//   return (
//     <div className="banner-container">
//       <div className="banner-content">
//         {/* Image section */}
//         <div className="image-section">
//           <img
//             src={BiryaniImg}
//             alt="Delicious Biryani at Brunch Palace"
//             className="biryani-image"
//           />
//         </div>
//         {/* Text content section */}
//         <div className="text-content">
//           <h1 className="banner-title">Welcome to Brunch Palace</h1>
//           <p className="banner-description">
//             Discover the ultimate brunch experience at Brunch Palace, where we
//             serve a delightful fusion of flavors, crafted with the finest
//             ingredients. From classic favorites to exotic dishes, every meal is
//             prepared with love and passion. Join us for a meal that will
//             tantalize your taste buds and leave you craving for more.
//             <br />
//             <br />
//             At Brunch Palace, we believe that every meal should be a
//             celebration. Whether you're enjoying a quick bite or indulging in a
//             leisurely brunch, our diverse menu and cozy ambiance make it the
//             perfect spot for any occasion. Come and savor the taste of
//             happiness!
//           </p>
//           <div className="icon-container">
//             <div className="icon-box">
//               <GrSecure className="icon-style" />
//             </div>
//             <div className="icon-box">
//               <IoFastFood className="icon-style" />
//             </div>
//             <div className="icon-box">
//               <GiFoodTruck className="icon-style" />
//             </div>
//           </div>
//           <div>
//             <a
//               href="https://wa.me/yourwhatsappphonenumber"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button className="order-button">Order Now</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";
import BiryaniImg from "../../assets/biryani5.png";

import "./AboutUs.css"; // Importing the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Image section */}
        <div className="image-section">
          <img
            src={BiryaniImg}
            alt="Delicious Biryani at Brunch Palace"
            className="biryani-image"
          />
        </div>
        {/* Text content section */}
        <div className="text-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            Discover the ultimate brunch experience at Brunch Palace, where we
            serve a delightful fusion of flavors, crafted with the finest
            ingredients. From classic favorites to exotic dishes, every meal is
            prepared with love and passion. Join us for a meal that will
            tantalize your taste buds and leave you craving for more.
            <br />
            <br />
            At Brunch Palace, we believe that every meal should be a
            celebration. Whether you're enjoying a quick bite or indulging in a
            leisurely brunch, our diverse menu and cozy ambiance make it the
            perfect spot for any occasion. Come and savor the taste of
            happiness!
          </p>
          {/* <div className="icon-container">
            <div className="icon-box">
              <GrSecure className="icon-style" />
            </div>
            <div className="icon-box">
              <IoFastFood className="icon-style" />
            </div>
            <div className="icon-box">
              <GiFoodTruck className="icon-style" />
            </div>
          </div>
          <div>
            <a
              href="https://wa.me/yourwhatsappphonenumber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="order-button">Order Now</button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
