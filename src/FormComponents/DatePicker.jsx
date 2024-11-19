import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = ({ type = "default", label = "Select Date" }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className={`date-picker-container ${type}`}>
      <label className="date-picker-label">{label}</label>
      {type === "default" && (
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-picker-input"
        />
      )}
      {type === "range" && (
        <div className="date-picker-range">
          <input
            type="date"
            className="date-picker-input"
            placeholder="Start Date"
          />
          <span className="date-picker-to">to</span>
          <input
            type="date"
            className="date-picker-input"
            placeholder="End Date"
          />
        </div>
      )}
      {type === "time" && (
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={handleDateChange}
          className="date-picker-input"
        />
      )}
    </div>
  );
};

export const DatePickerExamples = () => {
  return (
    <div className="date-picker-examples">
      <h2>Date Pickers</h2>
      <div className="example">
        <h3>Default Date Picker</h3>
        <DatePicker label="Choose a date" />
      </div>
      <div className="example">
        <h3>Date Range Picker</h3>
        <DatePicker type="range" label="Select a date range" />
      </div>
      <div className="example">
        <h3>Date and Time Picker</h3>
        <DatePicker type="time" label="Pick date & time" />
      </div>
    </div>
  );
};

export default DatePicker;
