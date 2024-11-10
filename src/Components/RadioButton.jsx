import React from "react";
import "./RadioButton.css";

const RadioButton = () => {
  return (
    <div className="radio-container">
      {/* Normal Radio Button with Icon */}
      <div className="radio-item">
        <input type="radio" className="radio normal" name="group" id="normal" />
        <label htmlFor="normal">
          <i className="icon fas fa-check-circle"></i>
          Normal Radio
        </label>
      </div>

      {/* Checked Radio Button with Icon */}
      <div className="radio-item">
        <input
          type="radio"
          className="radio checked"
          name="group"
          id="checked"
          defaultChecked
        />
        <label htmlFor="checked">
          <i className="icon fas fa-check"></i>
          Checked Radio
        </label>
      </div>

      {/* Disabled Radio Button with Icon */}
      <div className="radio-item">
        <input
          type="radio"
          className="radio disabled"
          name="group"
          id="disabled"
          disabled
        />
        <label htmlFor="disabled">
          <i className="icon fas fa-ban"></i>
          Disabled Radio
        </label>
      </div>

      {/* Error Radio Button with Icon */}
      <div className="radio-item">
        <input type="radio" className="radio error" name="group" id="error" />
        <label htmlFor="error">
          <i className="icon fas fa-exclamation-circle"></i>
          Error Radio
        </label>
      </div>

      {/* Outlined Radio Button with Icon */}
      <div className="radio-item">
        <input
          type="radio"
          className="radio outlined"
          name="group"
          id="outlined"
        />
        <label htmlFor="outlined">
          <i className="icon fas fa-circle"></i>
          Outlined Radio
        </label>
      </div>
    </div>
  );
};

export default RadioButton;
