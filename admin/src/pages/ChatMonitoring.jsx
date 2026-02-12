import React from "react";
import "./ChatMonitoring.css";

const CHAT_SESSIONS_DATA = [
  { id: 1, userId: "U001", userName: "Alice Johnson", status: "Active", messageCount: 24, lastMessage: "Thanks for the help!", lastMessageTime: "2026-02-11T14:32:00", sessionDuration: "18m 30s" },
  { id: 2, userId: "U002", userName: "Bob Smith", status: "Active", messageCount: 8, lastMessage: "Can you explain this feature?", lastMessageTime: "2026-02-11T14:28:00", sessionDuration: "5m 15s" },
  { id: 3, userId: "U003", userName: "Carol White", status: "Inactive", messageCount: 15, lastMessage: "See you later!", lastMessageTime: "2026-02-11T13:45:00", sessionDuration: "45m" },
];

const ChatMonitoring = () => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  const truncateMessage = (message, length = 50) => {
    return message.length > length ? message.substring(0, length) + "..." : message;
  };

  const activeSessions = CHAT_SESSIONS_DATA.filter((s) => s.status === "Active").length;

  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Chat Monitoring</h1>
        <p className="page-subtitle">Monitor live chat sessions and user interactions</p>
      </header>

      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="status-filter" className="filter-label">Filter by Status:</label>
          <select id="status-filter" className="filter-select">
            <option value="All">All Sessions</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="stats">
          <span className="stat-item stat-active">Active: {activeSessions}</span>
          <span className="stat-item">Total: {CHAT_SESSIONS_DATA.length}</span>
        </div>
      </div>

      <div className="table-wrapper" role="region" aria-label="Chat sessions table">
        <table className="admin-table">
          <thead className="table-header">
            <tr>
              <th scope="col">User</th>
              <th scope="col">Status</th>
              <th scope="col">Messages</th>
              <th scope="col">Last Message</th>
              <th scope="col">Duration</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {CHAT_SESSIONS_DATA.map((session) => (
              <tr key={session.id} className="data-row">
                <td className="cell-user">
                  <span className="user-avatar" aria-hidden="true">{session.userName.charAt(0)}</span>
                  <div className="user-info">
                    <p className="user-name">{session.userName}</p>
                    <p className="user-id">{session.userId}</p>
                  </div>
                </td>
                <td className="cell-status">
                  <span className={`status-indicator status--${session.status.toLowerCase()}`} aria-label={`User status: ${session.status}`}>
                    <span className="status-dot"></span>
                    {session.status}
                  </span>
                </td>
                <td className="cell-messages">
                  <span className="message-count">{session.messageCount} msgs</span>
                </td>
                <td className="cell-last-message">
                  <div className="message-info">
                    <p className="message-text">{truncateMessage(session.lastMessage)}</p>
                    <p className="message-time">{formatTime(session.lastMessageTime)}</p>
                  </div>
                </td>
                <td className="cell-duration">
                  <span className="duration-text">{session.sessionDuration}</span>
                </td>
                <td className="cell-action">
                  <button className="btn btn--sm btn--danger" disabled={session.status === "Inactive"} aria-label={`End chat with ${session.userName}`}>End</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChatMonitoring;
