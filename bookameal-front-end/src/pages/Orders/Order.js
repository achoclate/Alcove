import React from "react";
import "./Order.css";

const Order = ({ order }) => {
  return (
    <div className="order">
      <div className="order-details">
        <h3>{order.mealName}</h3>
        <p>Price: ${order.price}</p>
        <p>Status: {order.status}</p>
      </div>
    </div>
  );
};

export default Order;