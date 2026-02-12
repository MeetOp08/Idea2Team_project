import React from "react";
import "./AdminDashboard.css";

const DASHBOARD_METRICS = [
  { id: "total-users", label: "Total Users", value: "2,540", icon: "👥", color: "primary" },
  { id: "projects", label: "Projects", value: "780", icon: "📁", color: "success" },
  { id: "workspaces", label: "Active Workspaces", value: "215", icon: "🏢", color: "info" },
  { id: "pending-reports", label: "Pending Reports", value: "14", icon: "📄", color: "warning" },
];

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Overview of your Idea2Team administration panel</p>
      </header>

      <div className="metrics-grid">
        {DASHBOARD_METRICS.map((metric) => (
          <div key={metric.id} className={`metric-card metric-card--${metric.color}`} role="article" aria-label={`${metric.label}: ${metric.value}`}>
            <div className="metric-icon" aria-hidden="true">{metric.icon}</div>
            <div className="metric-content">
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-value">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="quick-actions" aria-labelledby="quick-actions-title">
        <h2 id="quick-actions-title" className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-button" aria-label="Go to user management">
            <span className="action-icon">👥</span>
            <span className="action-text">Manage Users</span>
          </button>
          <button className="action-button" aria-label="Review pending requests">
            <span className="action-icon">✓</span>
            <span className="action-text">Verification Requests</span>
          </button>
          <button className="action-button" aria-label="View analytics">
            <span className="action-icon">📈</span>
            <span className="action-text">View Analytics</span>
          </button>
          <button className="action-button" aria-label="Check security logs">
            <span className="action-icon">🔒</span>
            <span className="action-text">Security Logs</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
