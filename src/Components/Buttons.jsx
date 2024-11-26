import React from "react";
import "./Buttons.css"; // Import the CSS file

const Button = () => {
  return (
    <div className="button-container">
      {/* Normal Button */}
      <a href="#" className="btn normal">
        Normal Button
      </a>

      {/* Hover Button */}
      <a href="#" className="btn hover">
        Hover Button
      </a>

      {/* Icon Left Button */}
      <a href="#" className="btn icon-left">
        <span className="icon">🔍</span> Icon Left Button
      </a>

      {/* Icon Right Button */}
      <a href="#" className="btn icon-right">
        Icon Right Button <span className="icon">🔍</span>
      </a>

      {/* Pressed Button */}
      <a href="#" className="btn pressed">
        Pressed Button
      </a>

      {/* Outline Button */}
      <a href="#" className="btn outline">
        Outline Button
      </a>

      {/* Disabled Button */}
      <a href="#" className="btn disabled" disabled>
        Disabled Button
      </a>

      {/* Gradient Button */}
      <a href="#" className="btn gradient">
        Gradient Button
      </a>

      {/* Small Button */}
      <a href="#" className="btn small">
        Small Button
      </a>

      {/* Large Button */}
      <a href="#" className="btn large">
        Large Button
      </a>

      {/* Loading Button */}
      <a href="#" className="btn loading">
        <span className="loader"></span> Loading...
      </a>

      {/* Rounded Button */}
      <a href="#" className="btn rounded">
        Rounded Button
      </a>

      {/* Block Button */}
      <a href="#" className="btn block">
        Block Button
      </a>

      {/* With Icon Only Button */}
      <a href="#" className="btn icon-only">
        <span className="icon">🔍</span>
      </a>

      {/* Icon + Text Button */}
      <a href="#" className="btn icon-text">
        <span className="icon">🔍</span> Icon + Text Button
      </a>
    </div>
  );
};

export default Button;
