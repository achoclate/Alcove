import React from 'react';
import './Reservation.css';

function Reservation() {
  return (
    <div className="reservation-container">
      <div className="dress-code-section">
        <h2>Dress Code</h2>
        <p>Smart Casual (Vest, Shorts, Flip Flops, Sandals, Sportswear & Caps are NOT permitted)</p>
        <p>Right of admission reserved</p>
        <p>Monday - Sunday: 12:00 PM - 10:00 PM</p>
        <p>Sundowners: 4:30 PM - 6:30 PM</p>
      </div>
      <div className="reservation-form-section">
        <h2>Reservation</h2>
        <form>
          <div className="form-group">
            <label>
              Make a reservation
              <input type="number" placeholder="1 guest" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Date
              <input type="date" placeholder="Aug 12, 2024" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Time
              <input type="time" placeholder="2:00 PM" required />
            </label>
          </div>
          <button type="submit">RESERVE</button>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
