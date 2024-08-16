import React from "react";
import "./Order.css"; // Importing the CSS file

const Order = ({ orders, setOrders }) => {
  const completeOrder = () => {
    const orderList = orders
      .map((item) => `${item.name} - ${item.price}`)
      .join("%0A");
    const whatsappLink = `https://wa.me/0705248878?text=I%20would%20like%20to%20order%3A%0A${orderList}`;
    window.open(whatsappLink, "_blank");
  };

  const cancelOrder = (index) => {
    const newOrders = orders.filter((_, i) => i !== index);
    setOrders(newOrders);
  };

  return (
    <div className="orders-section">
      <h2>Your Order</h2>
      {orders.length > 0 ? (
        <>
          <div className="order-items">
            {orders.map((item, index) => (
              <div
                key={index}
                className={`order-card ${
                  index % 2 === 0 ? "card-left" : "card-right"
                }`}
              >
                <div className="order-card-content">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="order-card-image"
                  />
                  <div className="order-card-details">
                    <label>
                      <strong>Meal Name:</strong> {item.name}
                    </label>
                    <label>
                      <strong>Description:</strong> {item.description}
                    </label>
                    <label>
                      <strong>Price:</strong> {item.price}
                    </label>
                  </div>

                  <button
                    className="cancel-order-button"
                    onClick={() => cancelOrder(index)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="complete-order-button" onClick={completeOrder}>
            Checkout
          </button>
        </>
      ) : (
        <p>No items in your order yet.</p>
      )}
    </div>
  );
};

export default Order;
