import React, { useState } from "react";
import Select from "react-select"; // To handle searchable dropdown
import './Dropdown.css'

const DropdownRow = () => {
  const [singleSelect, setSingleSelect] = useState(null);
  const [multiSelect, setMultiSelect] = useState([]);
  const [searchableSelect, setSearchableSelect] = useState(null);
  const [clearableSelect, setClearableSelect] = useState(null);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];

  return (
    <div className="dropdown-row">
      {/* Single Select Dropdown */}
      <div className="dropdown-container">
        <select
          className="dropdown normal"
          value={singleSelect}
          onChange={(e) => setSingleSelect(e.target.value)}
        >
          <option value="">Select Fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </div>

      {/* Multiple Select Dropdown */}
      <div className="dropdown-container">
        <select
          className="dropdown normal"
          multiple
          value={multiSelect}
          onChange={(e) =>
            setMultiSelect(
              [...e.target.selectedOptions].map((option) => option.value)
            )
          }
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="cherry">Cherry</option>
        </select>
      </div>

      {/* Searchable Dropdown (using react-select) */}
      <div className="dropdown-container">
        <Select
          className="dropdown normal"
          options={options}
          value={searchableSelect}
          onChange={setSearchableSelect}
          placeholder="Search fruit"
        />
      </div>

      {/* Clearable Dropdown */}
      <div className="dropdown-container">
        <Select
          className="dropdown normal"
          options={options}
          value={clearableSelect}
          onChange={setClearableSelect}
          isClearable={true}
          placeholder="Select or clear"
        />
      </div>
    </div>
  );
};

export default DropdownRow;
