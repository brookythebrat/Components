import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage, color = "primary", label = false }) => {
  return (
    <div className="progress-bar-container">
      <div
        className={`progress-bar progress-bar-${color}`}
        style={{ width: `${percentage}%` }}
      >
        {label && <span className="progress-bar-label">{percentage}%</span>}
      </div>
    </div>
  );
};

const ProgressBarExamples = () => {
  return (
    <div className="progress-bar-examples">
      <h3>Progress Bar Examples</h3>
      <ProgressBar percentage={25} color="primary" label={true} />
      <ProgressBar percentage={50} color="success" label={true} />
      <ProgressBar percentage={75} color="warning" />
      <ProgressBar percentage={90} color="danger" label={true} />
    </div>
  );
};

export default ProgressBarExamples;
