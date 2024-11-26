import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
    { id: 3, label: "Services" },
    { id: 4, label: "Contact" },
  ];

  return (
    <div className="dropdown-menu-container">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu <span className={`arrow ${isOpen ? "rotate" : ""}`}>&#9660;</span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id} className="dropdown-item">
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
