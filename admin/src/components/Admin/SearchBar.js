import React from "react";
import "./SearchBar.css";

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};


export default SearchBar;
