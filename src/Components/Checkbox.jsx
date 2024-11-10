import React from "react";
import "./Checkbox.css";

const Checkbox = () => {
  return (
    <div className="checkbox-container">
      {/* Normal Checkbox */}
      <div className="checkbox-item">
        <input type="checkbox" className="checkbox normal" id="normal" />
        <label htmlFor="normal">Normal Checkbox</label>
      </div>

      {/* Checked Checkbox */}
      <div className="checkbox-item">
        <input
          type="checkbox"
          className="checkbox checked"
          id="checked"
          defaultChecked
        />
        <label htmlFor="checked">Checked Checkbox</label>
      </div>

      {/* Disabled Checkbox */}
      <div className="checkbox-item">
        <input
          type="checkbox"
          className="checkbox disabled"
          id="disabled"
          disabled
        />
        <label htmlFor="disabled">Disabled Checkbox</label>
      </div>

      {/* Checkbox with Icon */}
      <div className="checkbox-item">
        <input type="checkbox" className="checkbox icon" id="icon" />
        <label htmlFor="icon">
          <span className="checkbox-icon">✔️</span> Checkbox with Icon
        </label>
      </div>

      {/* Error Checkbox */}
      <div className="checkbox-item">
        <input type="checkbox" className="checkbox error" id="error" />
        <label htmlFor="error">Error Checkbox</label>
      </div>

      {/* Custom Styled Checkbox (Rounded, Outlined) */}
      <div className="checkbox-item">
        <input type="checkbox" className="checkbox outlined" id="outlined" />
        <label htmlFor="outlined">Outlined Checkbox</label>
      </div>
    </div>
  );
};

export default Checkbox;
