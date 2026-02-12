import React from "react";
import "./PageHeader.css";

const PageHeader = ({ title, buttonLabel, onButtonClick }) => {
  return (
    <div className="page-header">
      <h2>{title}</h2>

      {buttonLabel && (
        <button className="page-action-btn" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default PageHeader;
