import React from "react";
import "./ReportsManagement.css";

const REPORTS_DATA = [
  { id: 1, title: "Server Performance Issues", type: "Technical", status: "Open", priority: "High", date: "2026-02-10T14:30:00", submittedBy: "John Doe" },
  { id: 2, title: "User Account Recovery Failed", type: "Bug", status: "In Progress", priority: "Medium", date: "2026-02-09T10:15:00", submittedBy: "Jane Smith" },
  { id: 3, title: "Database Query Optimization", type: "Performance", status: "Closed", priority: "Low", date: "2026-02-08T09:00:00", submittedBy: "Bob Wilson" },
];

const ReportsManagement = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const getStatusColor = (status) => {
    const statusColors = { Open: "danger", "In Progress": "warning", Closed: "success" };
    return statusColors[status] || "info";
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Reports Management</h1>
        <p className="page-subtitle">Monitor and manage system reports and issues</p>
      </header>

      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="status-filter" className="filter-label">Filter by Status:</label>
          <select id="status-filter" className="filter-select">
            <option value="All">All Reports</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className="stats">
          <span className="stat-item">Total: {REPORTS_DATA.length}</span>
          <span className="stat-item">Showing: {REPORTS_DATA.length}</span>
        </div>
      </div>

      <div className="table-wrapper" role="region" aria-label="Reports table">
        <table className="admin-table">
          <thead className="table-header">
            <tr>
              <th scope="col">Report Title</th>
              <th scope="col">Priority</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {REPORTS_DATA.map((report) => (
              <tr key={report.id} className="data-row">
                <td className="cell-title">
                  <p className="report-title">{report.title}</p>
                  <p className="report-type">{report.type}</p>
                </td>
                <td className="cell-priority">
                  <span className={`badge badge--${report.priority.toLowerCase()}`}>{report.priority}</span>
                </td>
                <td className="cell-status">
                  <span className={`badge badge--${getStatusColor(report.status)}`}>{report.status}</span>
                </td>
                <td className="cell-date">
                  <span className="date-text">{formatDate(report.date)}</span>
                </td>
                <td className="cell-action">
                  <button className="btn btn--sm btn--primary" disabled={report.status === "Closed"} aria-label={`Resolve report: ${report.title}`}>Resolve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsManagement;
