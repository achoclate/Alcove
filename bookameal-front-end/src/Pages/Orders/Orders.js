import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedMeal = location.state?.selectedMeal;

  const calculateTotal = () => {
    return selectedMeal ? (selectedMeal.price * selectedMeal.quantity).toFixed(2) : '0.00';
  };

  const handleCheckout = () => {
    navigate('/payment', { state: { selectedMeal } }); // Pass selectedMeal state to Payment page
  };

  return (
    <div className="order-card">
      <div className="order-row">
        <div className="content">
          <div className="order-col-md-8 order-cart">
            <div className="order-title">
              <div className="order-row">
                <div className="order-col">
                  <h4><b>Your Orders</b></h4>
                </div>
                <div className="order-col align-self-center text-right text-muted">
                  {selectedMeal ? '1 item' : 'No items'}
                </div>
              </div>
            </div>
            {selectedMeal && (
              <div className="order-row border-top border-bottom">
                <div className="order-row order-main align-items-center">
                  <div className="order-col-2">
                    <img className="img-fluid" src={selectedMeal.img} alt={selectedMeal.name} />
                  </div>
                  <div className="order-col">
                    <div className="order-row text-muted">{selectedMeal.name}</div>
                    <div className="order-row">{selectedMeal.description}</div>
                  </div>
                  <div className="order-col">
                    <a href="#" onClick={() => {/* Handle quantity change */}}>
                      -
                    </a>
                    <a href="#" className="border">
                      {selectedMeal.quantity}
                    </a>
                    <a href="#" onClick={() => {/* Handle quantity change */}}>
                      +
                    </a>
                  </div>
                  <div className="order-col">
                    &euro; {selectedMeal.price.toFixed(2)}
                    <span
                      className="order-close"
                      onClick={() => {/* Handle removal */}}
                    >
                      &#10005;
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="order-back-to-shop">
              <a href="/menu">Back to menu</a>
            </div>
          </div>
          <div className="order-col-md-4 order-summary">
            <div>
              <h5><b>Order Summary</b></h5>
            </div>
            <hr />
            <div className="order-row">
              <div className="order-col" style={{ paddingLeft: 0 }}>
                ITEMS 1
              </div>
              <div className="order-col text-right">
                &euro; {calculateTotal()}
              </div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">Standard-Delivery - &euro;5.00</option>
              </select>
              <p>OFFER CODE</p>
              <input id="order-code" placeholder="Enter your code" />
            </form>
            <div
              className="order-row"
              style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
            >
              <div className="order-col">TOTAL PRICE</div>
              <div className="order-col text-right">
                &euro; {parseFloat(calculateTotal()) + 5.0}
              </div>
            </div>
            <button className="order-btn" onClick={handleCheckout}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
