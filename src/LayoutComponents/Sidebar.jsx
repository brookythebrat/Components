import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sidebar-container">
      {/* Example 1: Simple Accordion */}
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion(0)}>
          <h3>Simple Accordion - Item 1</h3>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-body">
            <p>This is the content for Simple Accordion Item 1.</p>
          </div>
        )}
      </div>
      <div className="accordion">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <h3>Simple Accordion - Item 2</h3>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-body">
            <p>This is the content for Simple Accordion Item 2.</p>
          </div>
        )}
      </div>

      {/* Example 2: Accordion with Colors */}
      <div className="accordion colored">
        <div
          className="accordion-header"
          style={{ backgroundColor: "#f7b731" }}
          onClick={() => toggleAccordion(2)}
        >
          <h3>Colored Accordion - Yellow</h3>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-body">
            <p>This accordion has a yellow background.</p>
          </div>
        )}
      </div>
      <div className="accordion colored">
        <div
          className="accordion-header"
          style={{ backgroundColor: "#ff6b6b" }}
          onClick={() => toggleAccordion(3)}
        >
          <h3>Colored Accordion - Red</h3>
        </div>
        {activeIndex === 3 && (
          <div className="accordion-body">
            <p>This accordion has a red background.</p>
          </div>
        )}
      </div>

      {/* Example 3: Accordion with Cards */}
      <div className="accordion card-style">
        <div className="accordion-header" onClick={() => toggleAccordion(4)}>
          <h3>Card Accordion - Item 1</h3>
        </div>
        {activeIndex === 4 && (
          <div className="accordion-body">
            <p>This accordion has a card-like design.</p>
          </div>
        )}
      </div>
      <div className="accordion card-style">
        <div className="accordion-header" onClick={() => toggleAccordion(5)}>
          <h3>Card Accordion - Item 2</h3>
        </div>
        {activeIndex === 5 && (
          <div className="accordion-body">
            <p>This accordion also has a card-like design.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
