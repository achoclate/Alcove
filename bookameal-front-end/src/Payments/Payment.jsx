import React, { useState } from "react";
import "./Payment.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcAmex,
  faCcMastercard,
  faCcDiscover,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import mealImage from "../images/space.jpg";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case "creditCard":
        return (
          <>
            <div>
              <label htmlFor="credit-card-num">
                Card Number
                <span className="card-logos">
                  <FontAwesomeIcon icon={faCcVisa} className="card-logo" />
                  <FontAwesomeIcon icon={faCcAmex} className="card-logo" />
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="card-logo mastercard-colored"
                  />
                  <FontAwesomeIcon icon={faCcDiscover} className="card-logo" />
                </span>
              </label>
              <input
                id="credit-card-num"
                name="credit-card-num"
                placeholder="1111-2222-3333-4444"
                required
                type="text"
              />
            </div>

            <div>
              <p className="expires">Expires on:</p>
              <div className="card-experation">
                <label htmlFor="expiration-month">Month</label>
                <select id="expiration-month" name="expiration-month" required>
                  <option value="">Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <label className="expiration-year">Year</label>
                <select id="experation-year" name="experation-year" required>
                  <option value="">Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                name="cvv"
                placeholder="123"
                type="text"
                required
              />
              <a className="cvv-info" href="#">
                What is CVV?
              </a>
            </div>
          </>
        );

      case "paypal":
        return (
          <div>
            <label htmlFor="paypal-email">Email Address</label>
            <input
              id="paypal-email"
              name="paypal-email"
              placeholder="youremail@example.com"
              required
              type="email"
            />
          </div>
        );

      case "mpesa":
        return (
          <div>
            <label htmlFor="mpesa-phone">M-Pesa Phone Number</label>
            <input
              id="mpesa-phone"
              name="mpesa-phone"
              placeholder="0712 345 678"
              required
              type="text"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="checkout-container">
      <div className="left-side">
        <div className="text-box">
          <h1 className="home-heading">Delicious Meal</h1>
          <p className="home-price">
            <em>59.99 USD </em>/ 2 people
          </p>
          <hr className="left-hr" />
          <p className="home-desc">
            <em>3-course meal </em>for <em>2 guests</em>
          </p>
          <p className="home-desc">
            <em>Order placed for </em>Fri, August 13, 2024
          </p>
        </div>
        <img src={mealImage} alt="Meal" className="meal-image" />
      </div>

      <div className="right-side">
        <div className="receipt">
          <h2 className="receipt-heading">Receipt Summary</h2>
          <div>
            <table className="table">
              <tbody>
                <tr>
                  <td>Meal cost</td>
                  <td className="price">59.99 USD</td>
                </tr>
                <tr>
                  <td>Booking fee</td>
                  <td className="price">5.99 USD</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="price">4.80 USD</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td className="price">70.78 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="payment-info">
          <h3 className="payment-heading">Choose Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="payment-method-select"
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="mpesa">M-Pesa</option>
          </select>

          {paymentMethod && (
            <>
              <h3 className="payment-heading">Payment Information</h3>
              <form className="form-box" method="get" target="_blank">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    name="full-name"
                    placeholder="Alcove Culnary"
                    required
                    type="text"
                  />
                </div>

                {renderPaymentFields()}

                <button className="btn">
                  <FontAwesomeIcon icon={faLock} /> Complete Payment
                </button>
              </form>
            </>
          )}

          <div>
            <p className="footer-text">
              <FontAwesomeIcon icon={faLock} />
              Your payment information is encrypted.
            </p>
            <div className="footer-h2">
              <h2>Thank You for Choosing Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
