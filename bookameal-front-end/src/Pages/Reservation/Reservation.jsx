import React, { useState, useEffect } from 'react';
import './Reservation.css';

function Reservation() {
  const [guestCount, setGuestCount] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations from the backend
    fetch('https://alcove.onrender.com/reservations')
      .then(response => response.json())
      .then(data => setReservations(data))
      .catch(error => console.error('Error fetching reservations:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = { guest_count: guestCount, date, time };

    fetch('https://alcove.onrender.com/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Reservation created successfully') {
          // Update the list of reservations after successful creation
          setReservations([...reservations, reservation]);
        }
        alert(data.message);
      })
      .catch(error => console.error('Error creating reservation:', error));
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Make a reservation
              <input
                type="number"
                placeholder="1 guest"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Date
              <input
                type="date"
                placeholder="Aug 12, 2024"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Time
              <input
                type="time"
                placeholder="2:00 PM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">RESERVE</button>
        </form>
        <div className="reservations-list">
          <h2>Current Reservations</h2>
          <ul>
            {reservations.map((reservation, index) => (
              <li key={index}>
                {reservation.guest_count} guest(s) on {reservation.date} at {reservation.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reservation;