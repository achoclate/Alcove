import React from 'react';


const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="subheading-text">
      {title}
    </p>
    {/* <img src={images.spoon} alt="spoon_image" className="spoon__img" /> */}
  </div>
);

export default SubHeading;
