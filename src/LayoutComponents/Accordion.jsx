// Accordion.jsx
import React, { useState } from "react";
import "./Accordion.css"; // Importing CSS for styles

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(0)}>
          <h3 className="accordion-title">Accordion Item 1</h3>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-body">
            <p>This is the content for Accordion Item 1.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <h3 className="accordion-title">Accordion Item 2</h3>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-body">
            <p>This is the content for Accordion Item 2.</p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <h3 className="accordion-title">Accordion Item 3</h3>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-body">
            <p>This is the content for Accordion Item 3.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
