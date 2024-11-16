import React from "react";
import "./Alert.css";

const Alert = () => {
  const handleClose = (alertType) => {
    alert(`${alertType} alert dismissed.`);
  };

  return (
    <div className="alert-container">
      {/* Info Alert */}
      <div className="alert alert-info">
        <span>Informational alert: This is an informational message.</span>
      </div>

      {/* Success Alert */}
      <div className="alert alert-success">
        <span>Success alert: Your operation was successful!</span>
        <button className="alert-close" onClick={() => handleClose("Success")}>
          &times;
        </button>
      </div>

      {/* Warning Alert */}
      <div className="alert alert-warning">
        <span>Warning alert: Something might go wrong!</span>
        <button className="alert-close" onClick={() => handleClose("Warning")}>
          &times;
        </button>
      </div>

      {/* Error Alert */}
      <div className="alert alert-error">
        <span>Error alert: Something went wrong!</span>
        <button className="alert-close" onClick={() => handleClose("Error")}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;
