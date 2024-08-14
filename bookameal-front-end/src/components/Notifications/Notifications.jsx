import React, { useState } from "react";
import "./Notifications.css";

const Notifications = () => {
  // Sample notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your meal booking for August 14th has been confirmed!",
      time: "Just now",
      type: "success",
    },
    {
      id: 2,
      message: "Payment for your order was successful!",
      time: "5 minutes ago",
      type: "info",
    },
    {
      id: 3,
      message: "Your booking has been canceled.",
      time: "10 minutes ago",
      type: "error",
    },
  ]);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const deleteNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>Notifications</h2>
        <button className="clear-all-btn" onClick={clearAllNotifications}>
          Clear All
        </button>
      </div>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.type}`}
            >
              <div className="notification-icon">
                <img
                  src={`${notification.type}-icon.png`}
                  alt={notification.type}
                />
              </div>
              <div className="notification-content">
                <p>{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteNotification(notification.id)}
              >
                ✕
              </button>
            </div>
          ))
        ) : (
          <p className="no-notifications">No notifications available</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
