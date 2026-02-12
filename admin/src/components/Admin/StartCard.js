import React from "react";
import "./StatCard.css";

const StatCard = ({ title, value, color }) => {
  return (
    <div className="stat-card" style={{ borderTop: `4px solid ${color}` }}>
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};

export default StatCard;

