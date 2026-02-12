import React from "react";
import "./UserManagement.css";

const USERS_DATA = [
  { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Founder", status: "Active", joinDate: "2025-01-15" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Team Lead", status: "Active", joinDate: "2025-02-01" },
  { id: 3, name: "Bob Wilson", email: "bob.wilson@example.com", role: "Developer", status: "Inactive", joinDate: "2025-01-20" },
];

const UserManagement = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">User Management</h1>
        <p className="page-subtitle">Manage system users and their permissions</p>
      </header>

      <div className="table-wrapper" role="region" aria-label="Users table">
        <table className="admin-table">
          <thead className="table-header">
            <tr>
              <th scope="col">User</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {USERS_DATA.map((user) => (
              <tr key={user.id} className="data-row">
                <td className="cell-name">
                  <span className="user-avatar" aria-hidden="true">{user.name.charAt(0)}</span>
                  <div className="user-info">
                    <p className="user-name">{user.name}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
                </td>
                <td className="cell-role">
                  <span className="badge badge--info">{user.role}</span>
                </td>
                <td className="cell-status">
                  <span className={`badge badge--${user.status === "Active" ? "success" : "danger"}`}>{user.status}</span>
                </td>
                <td className="cell-action">
                  <button className={`btn btn--sm ${user.status === "Active" ? "btn--danger" : "btn--success"}`} aria-label={`${user.status === "Active" ? "Block" : "Unblock"} user ${user.name}`}>
                    {user.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
