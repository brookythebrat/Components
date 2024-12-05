import React from "react";
import "./AnimatedCardComponent.css";

const AnimatedCard = () => {
  return (
    <div className="card-container">
      {/* Card 1: Rounded Glow */}
      <div className="animated-card card1">
        <h3 className="card-title">Rounded Glow Card</h3>
        <p className="card-text">
          Soft gradient glow effect with rounded corners.
        </p>
      </div>

      {/* Card 2: Border Glow */}
      <div className="animated-card card2">
        <h3 className="card-title">Border Glow Card</h3>
        <p className="card-text">Glowing border with a sleek effect.</p>
      </div>

      {/* Card 3: Hexagonal Glow */}
      <div className="animated-card card3">
        <h3 className="card-title">Hexagonal Glow Card</h3>
        <p className="card-text">Unique hexagon shape with intense glow.</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
