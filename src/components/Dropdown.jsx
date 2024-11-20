// components/Dropdown.js
import React from "react";

const Dropdown = ({ title, label, options, selectedValue, onChange }) => {
  return (
    <div className="dropdown">
      <label className="dropdown-label">{title}</label>
      <select className="dropdown-select" value={selectedValue} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
