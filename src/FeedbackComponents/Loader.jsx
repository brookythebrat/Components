import React from "react";
import "./Loader.css";

const Loader = ({ type = "spinner", message = "" }) => {
    
  return (
    <div className={`loader-container ${type}`}>
      {type === "spinner" && <div className="spinner"></div>}
      {type === "dots" && (
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {type === "bar" && <div className="bar"></div>}
      {message && <p className="loader-message">{message}</p>}
    </div>
  );
};

export default Loader;
