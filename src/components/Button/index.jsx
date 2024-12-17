import React from "react";
import './Button.css';


const DropdownBtn = ({ isFilterVisible, toggleFilter }) => {
  return (
    <div className="dropdown-wrapper">
      <div className="filter-button-container">
        <h4>3425 ITEMS</h4>

        <button className="filter-toggle-button" onClick={toggleFilter}>
          {isFilterVisible ? "> HIDE FILTER" : "< SHOW FILTER"}
        </button>
      </div>
      <div className="dropdown-menu">
        <select>
          <option value="recommended">RECOMMENDED</option>
          <option value="most-sold">MOST SOLD ITEMS</option>
          <option value="new-collections">NEW COLLECTIONS</option>
          <option value="best-selling">BEST SELLING ITEMS</option>
          
        </select>
      </div>
    </div>
  );
};

export default DropdownBtn;


// This project is based on nextjs