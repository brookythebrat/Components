// Tabs.jsx
import React, { useState } from "react";
import "./Tabs.css"; // Importing CSS for styles

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      {/* Vertical Tab Titles */}
      <div className="tabs-header">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === 0 && (
          <div className="tab-content">
            <h3>Tab 1 Content</h3>
            <p>This is the content for Tab 1.</p>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <h3>Tab 2 Content</h3>
            <p>This is the content for Tab 2.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <h3>Tab 3 Content</h3>
            <p>This is the content for Tab 3.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
