import React, { useState } from "react";
import "./SwitchToggle.css";

const SwitchToggle = ({ label, initialState = false, onChange }) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    onChange(newState);
  };

  return (
    <div className="switch-toggle">
      {label && <span className="switch-label">{label}</span>}
      <div
        className={`toggle-container ${isToggled ? "on" : "off"}`}
        onClick={handleToggle}
      >
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export const SwitchToggleExamples = () => {
  const handleChange = (state) => {
    alert(`Switch is now ${state ? "ON" : "OFF"}`);
  };

  return (
    <div className="switch-toggle-examples">
      <h2>SwitchToggle Examples</h2>
      <div className="example">
        <SwitchToggle
          label="Default Toggle"
          initialState={false}
          onChange={handleChange}
        />
      </div>
      <div className="example">
        <SwitchToggle
          label="Pre-Toggled"
          initialState={true}
          onChange={handleChange}
        />
      </div>
      <div className="example">
        <SwitchToggle label="Custom Labeled Toggle" onChange={handleChange} />
      </div>
    </div>
  );
};

export default SwitchToggle;
