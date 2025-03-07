import React from "react";
import "./css/style.css";

function Search(){
  return (
    <div className="dropdown-container">
      <div className="dropdown-select">
      <select>
        <option>Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <button className="dropdown-button">Search</button>
      </div>
    </div>
  );
};

export default Search;
