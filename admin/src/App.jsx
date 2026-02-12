import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import ProjectManagement from "./pages/ProjectManagement";
import ReportsManagement from "./pages/ReportsManagement";
import VerificationRequests from "./pages/VerificationRequests";
import FeedbackMonitor from "./pages/FeedbackMonitor";
import ChatMonitoring from "./pages/ChatMonitoring";
import SecurityLogs from "./pages/SecurityLogs";
import PlatformAnalytics from "./pages/PlatformAnalytics";
import Settings from "./pages/Settings";
import PracticeDataInsert from "./pages/PracticeDataInsert";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="projects" element={<ProjectManagement />} />
          <Route path="reports" element={<ReportsManagement />} />
          <Route path="verification-requests" element={<VerificationRequests />} />
          <Route path="feedback" element={<FeedbackMonitor />} />
          <Route path="chat-monitor" element={<ChatMonitoring />} />
          <Route path="security-logs" element={<SecurityLogs />} />
          <Route path="analytics" element={<PlatformAnalytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="practice-data-insert" element={<PracticeDataInsert />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
