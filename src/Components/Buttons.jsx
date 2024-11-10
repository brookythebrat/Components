import React from "react";
import "./Buttons.css"; // Import the CSS file

const Button = () => {
  return (
    <div className="button-container">
      {/* Normal Button */}
      <button className="btn normal">Normal Button</button>

      {/* Hover Button */}
      <button className="btn hover">Hover Button</button>

      {/* Icon Left Button */}
      <button className="btn icon-left">
        <span className="icon">🔍</span> Icon Left Button
      </button>

      {/* Icon Right Button */}
      <button className="btn icon-right">
        Icon Right Button <span className="icon">🔍</span>
      </button>

      {/* Pressed Button */}
      <button className="btn pressed">Pressed Button</button>

      {/* Outline Button */}
      <button className="btn outline">Outline Button</button>

      {/* Disabled Button */}
      <button className="btn disabled" disabled>
        Disabled Button
      </button>

      {/* Gradient Button */}
      <button className="btn gradient">Gradient Button</button>

      {/* Small Button */}
      <button className="btn small">Small Button</button>

      {/* Large Button */}
      <button className="btn large">Large Button</button>

      {/* Loading Button */}
      <button className="btn loading">
        <span className="loader"></span> Loading...
      </button>

      {/* Rounded Button */}
      <button className="btn rounded">Rounded Button</button>

      {/* Block Button */}
      <button className="btn block">Block Button</button>

      {/* With Icon Only Button */}
      <button className="btn icon-only">
        <span className="icon">🔍</span>
      </button>

      {/* Icon + Text Button */}
      <button className="btn icon-text">
        <span className="icon">🔍</span> Icon + Text Button
      </button>
    </div>
  );
};

export default Button;
