import React from "react";
import "./VerificationRequests.css";

const VerificationRequests = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Verification Requests</h1>
        <p className="page-subtitle">
          Review and manage user verification requests
        </p>
      </header>

      <div className="table-wrapper">
        <table className="admin-table">
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Documents</th>
              <th>Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {/* Row 1 */}
            <tr className="data-row">
              <td className="cell-name">
                <span className="user-avatar">A</span>
                <div className="user-info">
                  <p className="user-name">Alice Johnson</p>
                  <p className="user-email">alice@example.com</p>
                </div>
              </td>
              <td className="cell-type">Document</td>
              <td className="cell-status">
                <span className="badge badge--warning">Pending</span>
              </td>
              <td className="cell-documents">
                <span className="doc-count">3 files</span>
              </td>
              <td className="cell-date">Feb 9, 2026</td>
              <td className="cell-actions">
                <button className="btn btn--sm btn--success">Approve</button>
                <button className="btn btn--sm btn--danger">Reject</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="data-row">
              <td className="cell-name">
                <span className="user-avatar">C</span>
                <div className="user-info">
                  <p className="user-name">Charlie Brown</p>
                  <p className="user-email">charlie@example.com</p>
                </div>
              </td>
              <td className="cell-type">Email</td>
              <td className="cell-status">
                <span className="badge badge--warning">Pending</span>
              </td>
              <td className="cell-documents">
                <span className="doc-count">1 file</span>
              </td>
              <td className="cell-date">Feb 8, 2026</td>
              <td className="cell-actions">
                <button className="btn btn--sm btn--success">Approve</button>
                <button className="btn btn--sm btn--danger">Reject</button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="data-row">
              <td className="cell-name">
                <span className="user-avatar">D</span>
                <div className="user-info">
                  <p className="user-name">Diana Prince</p>
                  <p className="user-email">diana@example.com</p>
                </div>
              </td>
              <td className="cell-type">Identity</td>
              <td className="cell-status">
                <span className="badge badge--success">Approved</span>
              </td>
              <td className="cell-documents">
                <span className="doc-count">5 files</span>
              </td>
              <td className="cell-date">Feb 7, 2026</td>
              <td className="cell-actions">
                <span className="badge badge--success">Verified</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerificationRequests;
