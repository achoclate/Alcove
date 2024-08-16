// Pages/Payment/Payment.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const selectedMeal = location.state?.selectedMeal;

  const [paymentStatus, setPaymentStatus] = useState(null);

  const calculateTotal = () => {
    if (selectedMeal) {
      return (selectedMeal.price * selectedMeal.quantity + 5.0).toFixed(2);
    }
    return '0.00';
  };

  const handlePayment = async () => {
    try {
      // Example request to Pesa Pal API to initiate payment
      const response = await fetch('https://api.pesapal.com/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`
        },
        body: JSON.stringify({
          amount: calculateTotal(),
          currency: 'EUR',
          // Include other required fields for Pesa Pal
        })
      });

      const result = await response.json();

      if (response.ok) {
        // Handle the Pesa Pal redirect URL or payment confirmation
        setPaymentStatus('Payment processed successfully!');
        window.location.href = result.paymentRedirectUrl; // Redirect to Pesa Pal payment page
      } else {
        setPaymentStatus('Payment failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentStatus('An error occurred while processing your payment.');
    }
  };

  return (
    <div className="payment-card">
      <h2>Payment Details</h2>
      <div className="payment-summary">
        <h3>Order Summary</h3>
        <div className="payment-row">
          <div className="payment-col">
            <p><b>Item:</b> {selectedMeal?.name || 'No item selected'}</p>
            <p><b>Quantity:</b> {selectedMeal?.quantity || 'N/A'}</p>
            <p><b>Total Price:</b> &euro; {calculateTotal()}</p>
          </div>
        </div>
      </div>
      <button onClick={handlePayment} className="payment-btn">
        Pay with Pesa Pal
      </button>
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </div>
  );
};

export default Payment;
