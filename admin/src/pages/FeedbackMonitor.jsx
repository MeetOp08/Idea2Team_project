import React from "react";
import "./FeedbackMonitor.css";

const FeedbackMonitor = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Feedback Monitor</h1>
        <p className="page-subtitle">
          Review and manage user feedback
        </p>
      </header>

      <div className="feedback-list">

        {/* Feedback Card 1 */}
        <div className="feedback-card">
          <div className="feedback-header">
            <div className="feedback-user">
              <span className="user-avatar">J</span>
              <div className="user-details">
                <p className="user-name">John Doe</p>
                <p className="user-email">john@example.com</p>
              </div>
            </div>

            <div className="feedback-meta">
              <span className="badge badge--warning">Unreviewed</span>
              <span className="feedback-date">Feb 10, 06:30 PM</span>
            </div>
          </div>

          <div className="feedback-content">
            <div className="rating-section">
              <span className="rating-stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-value">5/5</span>
            </div>

            <div className="feedback-category">
              <span className="category-badge">Feature Request</span>
            </div>

            <p className="feedback-message">
              Love the new dashboard interface, very intuitive!
            </p>
          </div>

          <div className="feedback-actions">
            <button className="btn btn--sm btn--primary">
              Mark as Reviewed
            </button>
            <button className="btn btn--sm btn--secondary">
              Reply
            </button>
          </div>
        </div>

        {/* Feedback Card 2 */}
        <div className="feedback-card">
          <div className="feedback-header">
            <div className="feedback-user">
              <span className="user-avatar">J</span>
              <div className="user-details">
                <p className="user-name">Jane Smith</p>
                <p className="user-email">jane@example.com</p>
              </div>
            </div>

            <div className="feedback-meta">
              <span className="badge badge--success">Reviewed</span>
              <span className="feedback-date">Feb 10, 02:15 PM</span>
            </div>
          </div>

          <div className="feedback-content">
            <div className="rating-section">
              <span className="rating-stars">⭐⭐⭐☆☆</span>
              <span className="rating-value">3/5</span>
            </div>

            <div className="feedback-category">
              <span className="category-badge">Bug Report</span>
            </div>

            <p className="feedback-message">
              Sometimes the search function times out.
            </p>
          </div>

          <div className="feedback-actions">
            <button className="btn btn--sm btn--secondary">
              Reply
            </button>
          </div>
        </div>

        {/* Feedback Card 3 */}
        <div className="feedback-card">
          <div className="feedback-header">
            <div className="feedback-user">
              <span className="user-avatar">B</span>
              <div className="user-details">
                <p className="user-name">Bob Wilson</p>
                <p className="user-email">bob@example.com</p>
              </div>
            </div>

            <div className="feedback-meta">
              <span className="badge badge--warning">Unreviewed</span>
              <span className="feedback-date">Feb 9, 10:45 AM</span>
            </div>
          </div>

          <div className="feedback-content">
            <div className="rating-section">
              <span className="rating-stars">⭐⭐⭐⭐☆</span>
              <span className="rating-value">4/5</span>
            </div>

            <div className="feedback-category">
              <span className="category-badge">General Feedback</span>
            </div>

            <p className="feedback-message">
              Great app, could use better mobile support.
            </p>
          </div>

          <div className="feedback-actions">
            <button className="btn btn--sm btn--primary">
              Mark as Reviewed
            </button>
            <button className="btn btn--sm btn--secondary">
              Reply
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeedbackMonitor;
