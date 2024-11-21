import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = ({
  targetDate,
  label = "Countdown",
  color = "primary",
}) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className={`countdown-timer countdown-timer-${color}`}>
      <h3>{label}</h3>
      <div className="countdown-timer-display">
        <div className="time-part">
          <span className="time">{formatTime(timeLeft.days)}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-part">
          <span className="time">{formatTime(timeLeft.hours)}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-part">
          <span className="time">{formatTime(timeLeft.minutes)}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-part">
          <span className="time">{formatTime(timeLeft.seconds)}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

const CountdownTimerExamples = () => {
  return (
    <div className="countdown-timer-examples">
      <h2>Countdown Timer Examples</h2>
      <CountdownTimer
        targetDate="2024-12-31T23:59:59"
        label="New Year Countdown"
        color="success"
      />
      <CountdownTimer
        targetDate="2024-11-25T00:00:00"
        label="Event Countdown"
        color="warning"
      />
    </div>
  );
};

export default CountdownTimerExamples;
