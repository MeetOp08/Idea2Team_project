import React from "react";
import "./SecurityLogs.css";

const SecurityLogs = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Security Logs</h1>
        <p className="page-subtitle">
          Monitor system security and audit log events
        </p>
      </header>

      {/* Filter Section (Static UI Only) */}
      <div className="log-filters">
        <div className="filter-group">
          <label>Filter by Severity:</label>
          <select>
            <option>All</option>
            <option>Info</option>
            <option>Warning</option>
            <option>Critical</option>
          </select>
        </div>

        <button className="btn btn--primary">
          Export Logs
        </button>
      </div>

      {/* Logs Table */}
      <div className="table-wrapper">
        <table className="admin-table">
          <thead className="table-header">
            <tr>
              <th>Event Type</th>
              <th>Severity</th>
              <th>User</th>
              <th>IP Address</th>
              <th>Action</th>
              <th>Timestamp</th>
            </tr>
          </thead>

          <tbody className="table-body">

            {/* Row 1 */}
            <tr className="data-row">
              <td className="cell-event-type">Login</td>
              <td className="cell-severity">
                <span className="badge badge--info">Info</span>
              </td>
              <td className="cell-user">john.doe@example.com</td>
              <td className="cell-ip">
                <code className="ip-address">192.168.1.100</code>
              </td>
              <td className="cell-action">User login successful</td>
              <td className="cell-timestamp">Feb 11, 02:30:00 PM</td>
            </tr>

            {/* Row 2 */}
            <tr className="data-row">
              <td className="cell-event-type">Access</td>
              <td className="cell-severity">
                <span className="badge badge--warning">Warning</span>
              </td>
              <td className="cell-user">jane.smith@example.com</td>
              <td className="cell-ip">
                <code className="ip-address">203.45.67.89</code>
              </td>
              <td className="cell-action">
                Unauthorized access attempt blocked
              </td>
              <td className="cell-timestamp">Feb 11, 02:15:00 PM</td>
            </tr>

            {/* Row 3 */}
            <tr className="data-row">
              <td className="cell-event-type">Logout</td>
              <td className="cell-severity">
                <span className="badge badge--info">Info</span>
              </td>
              <td className="cell-user">bob.wilson@example.com</td>
              <td className="cell-ip">
                <code className="ip-address">192.168.1.101</code>
              </td>
              <td className="cell-action">User logout</td>
              <td className="cell-timestamp">Feb 11, 01:45:00 PM</td>
            </tr>

            {/* Row 4 */}
            <tr className="data-row">
              <td className="cell-event-type">Permission</td>
              <td className="cell-severity">
                <span className="badge badge--danger">Critical</span>
              </td>
              <td className="cell-user">admin@example.com</td>
              <td className="cell-ip">
                <code className="ip-address">192.168.0.1</code>
              </td>
              <td className="cell-action">Admin role upgraded</td>
              <td className="cell-timestamp">Feb 11, 01:20:00 PM</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecurityLogs;
