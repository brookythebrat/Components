import React from "react";
import "./Tooltip.css";

const Tooltip = () => {
  const tooltipExamples = [
    { text: "Hover over me (top)", position: "top" },
    { text: "Hover over me (right)", position: "right" },
    { text: "Hover over me (bottom)", position: "bottom" },
    { text: "Hover over me (left)", position: "left" },
  ];

  return (
    <div className="tooltip-container">
      {tooltipExamples.map((tooltip, index) => (
        <div key={index} className="tooltip-wrapper">
          <button className="tooltip-target">{tooltip.text}</button>
          <span className={`tooltip-box tooltip-${tooltip.position}`}>
            Tooltip {tooltip.position}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
