import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
   <div className="admin-sidebar">
  <h2 className="sidebar-logo">Admin</h2>

  <nav className="sidebar-menu">
    <NavLink to="/admin" end>Dashboard</NavLink>
    <NavLink to="/admin/users">Users</NavLink>
    <NavLink to="/admin/projects">Projects</NavLink>
    <NavLink to="/admin/reports">Reports</NavLink>
    <NavLink to="/admin/settings">Settings</NavLink>
  </nav>
</div>

  );
}

export default Sidebar;
