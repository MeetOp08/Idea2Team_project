import React from "react";
import "./ProjectManagement.css";

const ProjectManagement = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Project Management</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Stage</th>
            <th>Collaboration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Idea2Team MVP</td>
            <td>Prototype</td>
            <td>Equity</td>
            <td>
              <button className="btn danger">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectManagement;
