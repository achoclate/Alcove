import React from 'react';
import './AboutUs.css';
import image from '../../../Smoke/assets/Restau.jpeg'

const About = () => {
    return (
        <div className="app__aboutus">
            <div className="about-image-section">
                <img 
                    src={image} 
                    alt="Dining setup" 
                    className="about-image"
                />
            </div>
            <div className="about-content-section">
                <h1 className="about-title">OUR CULINARY SYMPHONY</h1>
                <p className="about-description">
                    Steak&Smokehouse offers a friendly and warm atmosphere, with heavy emphasis on French and Afro-Asian dishes made by our cordon bleu chef. This unique blend allows one to experience a whole new genre of cuisines all at once.
                </p>
                <div className="about-buttons">
                <a href="#menu" className="about-button">→ VIEW MENU</a>
                <a
  href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Home of culinary excellence!')}`}
  className="about-button"
  target="_blank"
  rel="noopener noreferrer"
>
  → ORDER NOW
</a>
   
                </div>
            </div>
        </div>
    );
}

export default About;
