import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Admin/Header";
import Sidebar from "./components/Admin/Sidebar";
import Footer from "./components/Admin/Footer";

import Dashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/Users";
import Projects from "./pages/Admin/Projects";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";
import AdminLogin from "./components/Admin/AdminLogin.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 Admin Login Page */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* 🛡️ Admin Panel Layout */}
        <Route
          path="/admin/*"
          element={
            <div className="app-container">
              <Header />
              <div className="main-layout">
                <Sidebar />
                <div className="page-content">
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          }
        />

        {/* Redirect root to admin login */}
        <Route path="/" element={<Navigate to="/admin/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
