import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrders } from '../../OrderContext'; // Adjust the path if necessary
import './Orders.css';

const Orders = () => {
  const { orders } = useOrders();
  const navigate = useNavigate();

  // Calculate the total price of orders
  const calculateTotal = () => {
    return orders.reduce((total, order) => {
      const price = parseFloat(order.price) || 0; // Ensure price is a number
      return total + price * (order.quantity || 1); // Default quantity to 1 if not available
    }, 0).toFixed(2);
  };

  // Handle the checkout process
  const handleCheckout = () => {
    const totalPrice = (parseFloat(calculateTotal()) + 5.0).toFixed(2); // Add shipping cost and format to two decimal places
    navigate('/payment', { state: { totalPrice, orders } }); // Pass orders and totalPrice to the Payment page
  };

  return (
    <div className="order-card">
      <div className="order-cart">
        <div className="order-row">
          <div className="order-title">
            <h4><b>Your Orders</b></h4>
          </div>
          {orders.length === 0 && (
            <div className="order-row">No orders placed yet.</div>
          )}
          {orders.map((order, index) => (
            <div key={index} className="order-main border-top border-bottom">
              <div className="order-row order-main align-items-center">
                <div className="order-col">
                  <div className="order-row text-muted">{order.name}</div>
                </div>
                <div className="order-col">
                  <a href="#" onClick={() => {/* Handle quantity decrease */}}>
                    -
                  </a>
                  <a href="#" className="border">
                    {order.quantity || 1} {/* Default quantity to 1 if not available */}
                  </a>
                  <a href="#" onClick={() => {/* Handle quantity increase */}}>
                    +
                  </a>
                </div>
                <div className="order-col">
                  &euro; {parseFloat(order.price).toFixed(2) || '0.00'} {/* Ensure price is a number */}
                </div>
              </div>
            </div>
          ))}
          <div className="order-back-to-shop">
            <a href="/menu">Back to menu</a>
          </div>
        </div>
      </div>
      <div className="order-summary">
        <div>
          <h5><b>Order Summary</b></h5>
        </div>
        <hr />
        <div className="order-row">
          <div className="order-col" style={{ paddingLeft: 0 }}>
            ITEMS {orders.length}
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
          style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}
        >
          <div className="order-col">TOTAL PRICE</div>
          <div className="order-col text-right">
            &euro; {parseFloat(calculateTotal()) + 5.0} {/* Display total price including shipping */}
          </div>
        </div>
        <button className="order-btn" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Orders;