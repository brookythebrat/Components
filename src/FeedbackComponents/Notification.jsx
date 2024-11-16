import React, { useState } from "react";
import "./Notification.css";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type, message, autoDismiss = true) => {
    const id = Date.now();
    const newNotification = { id, type, message };
    setNotifications([...notifications, newNotification]);

    if (autoDismiss) {
      setTimeout(() => removeNotification(id), 3000);
    }
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div>
      <div className="notification-buttons">
        <button
          onClick={() =>
            addNotification("success", "Success! Operation completed.")
          }
        >
          Success
        </button>
        <button
          onClick={() =>
            addNotification("error", "Error! Something went wrong.")
          }
        >
          Error
        </button>
        <button
          onClick={() =>
            addNotification("info", "Info! This is an information message.")
          }
        >
          Info
        </button>
        <button
          onClick={() => addNotification("warning", "Warning! Check this out.")}
        >
          Warning
        </button>
      </div>

      <div className="notifications-container">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${notification.type}`}
            onClick={() => removeNotification(notification.id)}
          >
            <span className="notification-message">{notification.message}</span>
            <button className="close-btn" title="Dismiss">
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
