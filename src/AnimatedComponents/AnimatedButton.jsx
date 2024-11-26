import React from "react";
import "./AnimatedButton.css";

const AnimatedButton = ({ children }) => {
  return (
    <a href="#" className="btn">
      {children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  );
};

export default AnimatedButton;
