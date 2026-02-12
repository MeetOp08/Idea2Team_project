import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h2>Admin Panel</h2>
      </div>

      <div className="header-right">
        <span className="admin-name">Welcome, Admin</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;
