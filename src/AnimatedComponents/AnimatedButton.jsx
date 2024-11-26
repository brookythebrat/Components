import React from "react";
import "./AnimatedButton.css";

const AnimatedButton = ({ children }) => {
  return (
    <button className="animated-btn">
      {children}
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </button>
  );
};

export default AnimatedButton;
