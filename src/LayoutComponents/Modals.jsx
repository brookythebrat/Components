// Components/Modals/Modals.jsx
import React, { useState } from "react";
import "./Modals.css";

const Modals = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [fullScreenModal, setFullScreenModal] = useState(false);

  return (
    <div className="modals-container">
      {/* Buttons to trigger modals */}
      <button className="btn btn-primary" onClick={() => setBasicModal(true)}>
        Open Basic Modal
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setConfirmationModal(true)}
      >
        Open Confirmation Modal
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setFullScreenModal(true)}
      >
        Open Full-Screen Modal
      </button>

      {/* Basic Modal */}
      {basicModal && (
        <div className="modal-overlay" onClick={() => setBasicModal(false)}>
          <div
            className="modal floating-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">Basic Modal</h2>
            <p className="modal-content">
              This is a simple modal with some content.
            </p>
            <button
              className="btn btn-close"
              onClick={() => setBasicModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmationModal && (
        <div
          className="modal-overlay"
          onClick={() => setConfirmationModal(false)}
        >
          <div
            className="modal floating-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">Confirmation Modal</h2>
            <p className="modal-content">Are you sure you want to proceed?</p>
            <div className="modal-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  alert("Confirmed!");
                  setConfirmationModal(false);
                }}
              >
                Confirm
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setConfirmationModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Modal */}
      {fullScreenModal && (
        <div
          className="modal-overlay"
          onClick={() => setFullScreenModal(false)}
        >
          <div
            className="modal floating-modal fullscreen-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">Full-Screen Modal</h2>
            <p className="modal-content">
              This modal takes up the full screen. It can be useful for more
              immersive experiences.
            </p>
            <button
              className="btn btn-close"
              onClick={() => setFullScreenModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
