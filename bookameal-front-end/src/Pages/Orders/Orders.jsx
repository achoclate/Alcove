// Orders.js
import React, { useState } from "react";
import Order from "./Order";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, mealName: "Pizza Margherita", price: 12.99, status: "Pending" },
    {
      id: 2,
      mealName: "Spaghetti Carbonara",
      price: 14.99,
      status: "Confirmed",
    },
    { id: 3, mealName: "Caesar Salad", price: 9.99, status: "Delivered" },
  ]);

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
