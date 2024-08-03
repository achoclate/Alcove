// src/components/Reservation.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Reservation.css'; // Custom CSS file for additional styling

const Reservation = () => {
  return (
    <div className="reservation-container">
      <div className="form-col">
        <Form>
          <h2>Make a Reservation</h2>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" required />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" required />
          </Form.Group>
          <Form.Group controlId="formGuests">
            <Form.Label>Number of Guests</Form.Label>
            <Form.Control type="number" min="1" max="20" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="other-half">
        <div className="other-content">
          <h2>Welcome to Our Restaurant</h2>
          <p>Enjoy a unique dining experience with us.</p>
          {/* Add any other content you want here */}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
