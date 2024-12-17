import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isFilterVisible }) => {
  const categories = [
    "IDEAL FOR",
    "OCCASSION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <div className="sidebar-container">
      {isFilterVisible && (
        <div className="filter-sidebar">
          <div className="filter-options">
            
            <div>
              <input type="checkbox" id="customizable" />
              <label htmlFor="customizable">Customizable</label>
            </div>

            
            {categories.map((category, index) => (
              <div key={index}>
                <h4>{category}</h4>
                <select>
                  <option value="all">All</option>
                  <option value="casual">Casual</option>
                  <option value="formal">Formal</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;