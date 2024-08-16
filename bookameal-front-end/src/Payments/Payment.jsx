import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPaypal, FaCcVisa } from 'react-icons/fa';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { totalPrice, orders } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = () => {
    if (paymentMethod === 'paypal') {
      // Redirect to PayPal's checkout page
      window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your-paypal-email@example.com&amount=${totalPrice}&currency_code=EUR&return=http://localhost:3000/success&cancel_return=http://localhost:3000/cancel`;
    } else if (paymentMethod === 'pesapal') {
      // Redirect to PesaPal's checkout page
      window.location.href = `https://www.pesapal.com/api/PostPesapal?amount=${totalPrice}&currency=EUR&return_url=http://localhost:3000/success`;
    }
  };

  if (!totalPrice || !orders) {
    return <div>No payment data available.</div>;
  }

  return (
    <div className="payment-page">
      <h1 className="payment-title">Payment Details</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-summary-items">
          {orders.map((order, index) => (
            <div key={index} className="order-summary-item">
              <div className="item-name">{order.name}</div>
              <div className="item-quantity">x{order.quantity || 1}</div>
              <div className="item-price">&euro; {parseFloat(order.price).toFixed(2) || '0.00'}</div>
            </div>
          ))}
        </div>
        <div className="order-summary-total">
          <div className="total-label">TOTAL</div>
          <div className="total-price">&euro; {parseFloat(totalPrice).toFixed(2)}</div>
        </div>
      </div>
      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        <div className="payment-option">
          <input
            type="radio"
            id="paypal"
            name="payment-method"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => handlePaymentMethodChange('paypal')}
          />
          <label htmlFor="paypal" className="payment-label">
            <FaPaypal size="2em" />
            <span>PayPal</span>
          </label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="pesapal"
            name="payment-method"
            value="pesapal"
            checked={paymentMethod === 'pesapal'}
            onChange={() => handlePaymentMethodChange('pesapal')}
          />
          <label htmlFor="pesapal" className="payment-label">
            <FaCcVisa size="2em" /> {/* Replace with PesaPal icon */}
            <span>PesaPal</span>
          </label>
        </div>
      </div>
      <button className="payment-btn" onClick={handlePayment}>
        PAY NOW
      </button>
    </div>
  );
};

export default Payment;