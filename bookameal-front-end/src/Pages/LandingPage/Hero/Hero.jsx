import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../../../../src/assets/heroi.jpeg';

const Hero = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroImage})` }}>
      <Container className="hero-content">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1>Experience culinary excellence in the heart of Nairobi</h1>
            <p style={{ fontSize: '1.25rem', fontWeight: '300' }}>
              At Alcove, our culinary artisans embark on a journey, weaving a tapestry of exquisite tastes inspired by the world’s diverse cuisines. Each dish is a masterpiece, a brushstroke on the canvas of indulgence.
            </p>

            <div className="hero-links">
              <Link to="/reservation" className="hero-link">Reserve a Table</Link>
              <span className="divider">|</span>
              <Link to="/meal-of-the-day" className="hero-link">Menu of the day</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
