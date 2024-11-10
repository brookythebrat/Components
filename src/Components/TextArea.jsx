import React, { useState } from "react";
import "./TextArea.css";

const TextAreaRow = () => {
  // Individual states for each text area
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);

  // Handle text change for each textarea
  const handleChange = (e, setValue) => {
    const value = e.target.value;
    setValue(value);
    // Check for error (character limit exceeded)
    if (value.length > 100) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="text-area-row">
      {/* Normal Text Area */}
      <div className="text-area-container">
        <textarea
          className={`text-area ${focused ? "focused" : ""} ${
            error ? "error" : ""
          }`}
          value={value1}
          onChange={(e) => handleChange(e, setValue1)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Type something here"
          maxLength={200}
        />
        <div className="char-count">{value1.length}/200</div>
      </div>

      {/* Resizable Text Area */}
      <div className="text-area-container">
        <textarea
          className="text-area resizable"
          value={value2}
          onChange={(e) => handleChange(e, setValue2)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Resizable text area"
        />
        <div className="char-count">{value2.length}/200</div>
      </div>

      {/* Text Area with Error */}
      <div className="text-area-container">
        <textarea
          className={`text-area ${error ? "error" : ""}`}
          value={value3}
          onChange={(e) => handleChange(e, setValue3)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Text area with error"
          maxLength={200}
        />
        {error && (
          <div className="error-message">Character limit exceeded!</div>
        )}
        <div className="char-count">{value3.length}/200</div>
      </div>
    </div>
  );
};

export default TextAreaRow;
