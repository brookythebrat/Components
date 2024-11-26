import React, { useState } from "react";
import "./Stepper.css";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="stepper-container">
      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index <= currentStep ? "active" : ""}`}
          >
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
      <div className="step-content">
        <h2>Step {currentStep + 1}</h2>
        <p>{steps[currentStep]}</p>
      </div>
      <div className="step-controls">
        <button
          className="btn"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          className="btn"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
