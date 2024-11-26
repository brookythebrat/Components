import React, { useState } from "react";
import "./Accordion2.css";

const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Section 1: Overview",
      content:
        "This is the content for section 1. You can include any type of dynamic data here, even images or videos!",
    },
    {
      title: "Section 2: Features",
      content:
        "Explore the advanced features of this accordion. Add text, links, or multimedia as needed.",
    },
    {
      title: "Section 3: FAQs",
      content:
        "Frequently asked questions can go here. Make it dynamic and customizable to fit your content needs.",
    },
  ];

  return (
    <div className="accordion2-container">
      {sections.map((section, index) => (
        <div key={index} className="accordion2-item">
          <div
            className={`accordion2-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion2-title">{section.title}</span>
            <span className="accordion2-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`accordion2-content ${
              activeIndex === index ? "open" : ""
            }`}
          >
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion2;
