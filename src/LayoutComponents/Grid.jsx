import React, { useState } from "react";
import "./Grid.css";

const Grid = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  return (
    <div className="grid-container">
      {/* Grid Item 1: With Links */}
      <div className="grid-item">
        <h3>Links Section</h3>
        <ul>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Example Link 1
            </a>
          </li>
          <li>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Example Link 2
            </a>
          </li>
        </ul>
      </div>

      {/* Grid Item 2: With Icons */}
      <div className="grid-item">
        <h3>Icons Section</h3>
        <div className="icon-grid">
          <div className="icon-item">🏠</div>
          <div className="icon-item">📧</div>
          <div className="icon-item">📞</div>
          <div className="icon-item">🌐</div>
        </div>
      </div>

      {/* Grid Item 3: Collapsible Section */}
      <div className="grid-item">
        <h3 onClick={() => toggleSection(1)} className="collapsible-header">
          Collapsible Section {expandedSections.includes(1) ? "▼" : "▶"}
        </h3>
        {expandedSections.includes(1) && (
          <div className="collapsible-content">
            <p>
              This is a collapsible section. Click on the title to expand or
              collapse.
            </p>
          </div>
        )}
      </div>

      {/* Responsive Extra Grid Items */}
      <div className="grid-item">
        <h3>Responsive Item 1</h3>
        <p>This item will adjust based on the screen size.</p>
      </div>
      <div className="grid-item">
        <h3>Responsive Item 2</h3>
        <p>This item will also adjust based on the screen size.</p>
      </div>
    </div>
  );
};

export default Grid;
