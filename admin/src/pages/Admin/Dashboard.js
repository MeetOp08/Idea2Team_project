import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="admin-cards">
        <div className="admin-card users">
          <h3>120</h3>
          <p>👥 Total Users</p>
        </div>

        <div className="admin-card projects">
          <h3>45</h3>
          <p>💼 Total Projects</p>
        </div>

        <div className="admin-card reports">
          <h3>3</h3>
          <p>🚩 Reports</p>
        </div>
      </div>

      <section className="admin-section">
        <h3>Recent Activity</h3>
        <ul>
          <li>New user registered</li>
          <li>Project "AI Chatbot" posted</li>
          <li>User reported inappropriate content</li>
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
