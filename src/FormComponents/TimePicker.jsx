import React, { useState } from "react";
import "./TimePicker.css";

const TimePicker = ({ label, onTimeChange }) => {
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setTime(selectedTime);
    onTimeChange(selectedTime);
  };

  return (
    <div className="time-picker">
      {label && <label className="time-picker-label">{label}</label>}
      <input
        type="time"
        className="time-picker-input"
        value={time}
        onChange={handleTimeChange}
      />
    </div>
  );
};

export const TimePickerExamples = () => {
  const handleTimeSelection = (selectedTime) => {
    alert(`You selected: ${selectedTime}`);
  };

  return (
    <div className="time-picker-examples">
      <h2>TimePicker Examples</h2>
      <div className="example">
        <TimePicker
          label="Default Time Picker"
          onTimeChange={handleTimeSelection}
        />
      </div>
      <div className="example">
        <TimePicker
          label="24-Hour Format Picker"
          onTimeChange={handleTimeSelection}
        />
      </div>
      <div className="example">
        <TimePicker
          label="Custom Labeled Time Picker"
          onTimeChange={handleTimeSelection}
        />
      </div>
    </div>
  );
};

export default TimePicker;
