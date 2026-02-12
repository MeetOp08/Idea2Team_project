/**
 * AdminFooter Component
 * 
 * Application footer displaying copyright and version information.
 * Appears at the bottom of all admin pages.
 */

import React from "react";
import "./AdminFooter.css";

/**
 * AdminFooter Component
 * @returns {React.ReactElement} The application footer
 */
const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="admin-footer" role="contentinfo">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Idea2Team. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#privacy" title="Privacy Policy">
            Privacy Policy
          </a>
          <span className="divider">•</span>
          <a href="#terms" title="Terms of Service">
            Terms of Service
          </a>
          <span className="divider">•</span>
          <span className="version">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
