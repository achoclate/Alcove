// src/components/Hero/Hero.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroImage from '../../assets/hero.jpeg'; // Correct path to the image
import './Hero.css'; // Custom CSS file for additional styling

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroImage})` }}>
      <Container className="hero-content">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1>Experience culinary excellence in the heart of Nairobi</h1>
            <p>At Alcove, our culinary artisans embark on a journey, weaving a tapestry of exquisite tastes inspired by the world’s diverse cuisines. Each dish is a masterpiece, a brushstroke on the canvas of indulgence. Immerse yourself in a symphony of flavors that reflects our passion for culinary excellence.</p>
            <div className="hero-links">
              <a href="#reservation" className="hero-link">Reserve a Table</a>
              <span className="divider">|</span>
              <a href="#menu" className="hero-link">View the Menu</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
