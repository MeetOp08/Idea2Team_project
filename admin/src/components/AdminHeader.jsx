import React from "react";
import "./AdminHeader.css";

const AdminHeader = () => {
  return (
    <header className="admin-header" role="banner">
      <button className="menu-toggle" aria-label="Toggle navigation menu" title="Toggle Menu">
        ☰
      </button>
      <div className="header-right">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            aria-label="Search input"
          />
          <button type="submit" className="search-btn" aria-label="Submit search" title="Search">
            🔍
          </button>
        </form>
        <button className="logout-btn" aria-label="Logout from admin panel" title="Logout">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
