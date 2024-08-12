import React, { useState, useEffect } from "react";
import Order from "./Order";
import "./Orders.css";

const Orders = ({ orders, resetNotification }) => {
  useEffect(() => {
    resetNotification();
  }, [resetNotification]);

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>
      <div className="orders-list">
        {orders.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;