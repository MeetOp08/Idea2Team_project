import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

/**
 * Navigation menu items
 */
const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "📊", path: "/" },
  { id: "users", label: "User Management", icon: "👥", path: "/users" },
  { id: "projects", label: "Project Management", icon: "📁", path: "/projects" },
  { id: "reports", label: "Reports", icon: "📄", path: "/reports" },
  { id: "feedback", label: "Feedback", icon: "💬", path: "/feedback" },
  { id: "chat", label: "Chat Monitor", icon: "💭", path: "/chat-monitor" },
  { id: "security", label: "Security Logs", icon: "🔒", path: "/security-logs" },
  { id: "analytics", label: "Analytics", icon: "📈", path: "/analytics" },
  { id: "settings", label: "Settings", icon: "⚙️", path: "/settings" },
  { id: "practice", label: "Practice Data", icon: "✏️", path: "/practice-data-insert" },
];

/**
 * AdminSidebar Component
 * @param {Object} props - Component props
 * @param {boolean} props.collapsed - Whether sidebar is in collapsed state
 * @param {Function} props.onToggle - Callback to toggle sidebar state
 * @returns {React.ReactElement} The navigation sidebar
 */
const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar" role="navigation" aria-label="Main navigation">
      <div className="sidebar-header">
        <div className="sidebar-logo">Idea2Team Admin</div>
      </div>
      <nav className="sidebar-nav" role="menubar">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.id} to={item.path} className={({ isActive }) => `sidebar-nav-link ${isActive ? 'active' : ''}`} title={item.label}>
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;

