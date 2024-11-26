import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import "./SearchBar.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className="searchbar-container">
      {/* SearchBar1: Simple Animated Search Bar */}
      <div className="searchbar1">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="searchbar-input"
          placeholder="Search..."
        />
      </div>

      {/* SearchBar2: Animated Icon to Input */}
      <div className="searchbar2">
        <div
          className={`searchbar2-icon ${
            isFocused || inputValue ? "focused" : ""
          }`}
        >
          <FaSearch />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="searchbar-input2"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
