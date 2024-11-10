import React from "react";
import  "./Inputs.css";

const Input = () => {
  return (
    <div className="input-container">
        
      {/* Input with icon */}
      <div className="input-icon">
        <span className="icon">🔍</span>
        <input
          type="text"
          className="input icon"
          placeholder="Search with Icon"
        />
      </div>

      {/* Input with label */}
      <div className="input-with-label">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="input"
          placeholder="Your Name"
        />
      </div>

      {/* Normal Input */}
      <input type="text" className="input normal" placeholder="Normal Input" />

      {/* Focused Input */}
      <input
        type="text"
        className="input focused"
        placeholder="Focused Input"
      />

      {/* Disabled Input */}
      <input
        type="text"
        className="input disabled"
        placeholder="Disabled Input"
        disabled
      />

      {/* Error Input */}
      <input type="text" className="input error" placeholder="Error Input" />

      {/* Text Area */}
      <textarea
        className="input text-area"
        placeholder="Type your message here..."
      ></textarea>

      {/* Outlined Input */}
      <input
        type="text"
        className="input outlined"
        placeholder="Outlined Input"
      />

      {/* Password Input */}
      <input
        type="password"
        className="input password"
        placeholder="Password"
      />

      {/* Small Input */}
      <input type="text" className="input small" placeholder="Small Input" />

      {/* Large Input */}
      <input type="text" className="input large" placeholder="Large Input" />
    </div>
  );
};

export default Input;
