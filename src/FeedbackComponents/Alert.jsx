import React, { useState } from "react";
import "./alert.css"; // Import the CSS file for styling

const Alert = ({ type, message, isInline }) => {
  const [show, setShow] = useState(true);

  // Do not render the alert if show is false
  if (!show) return null;

  return (
    <div className={`alert ${type} ${isInline ? "inline" : "block"}`}>
      <span className="alert-message">{message}</span>
      <button className="close-btn" onClick={() => setShow(false)}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
