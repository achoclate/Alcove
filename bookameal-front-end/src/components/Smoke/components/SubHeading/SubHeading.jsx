import React from 'react';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p 
      className="p__cormorant" 
      style={{ 
        color: 'white', 
        fontFamily: 'Montserrat, sans-serif' // Apply Montserrat font
      }}
    >
      {title}
    </p>
  </div>
);

export default SubHeading;
