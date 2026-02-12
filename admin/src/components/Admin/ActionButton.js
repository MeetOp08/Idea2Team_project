import React from "react";
import "./ActionButton.css";

const ActionButton = ({ label, type, onClick }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};


export default ActionButton;
