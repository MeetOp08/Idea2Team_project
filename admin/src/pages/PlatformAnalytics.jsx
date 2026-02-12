import React from "react";
import "./PlatformAnalytics.css";

const PlatformAnalytics = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Platform Analytics</h1>
        <p className="page-subtitle">
          Track platform performance and user engagement metrics
        </p>
      </header>

      {/* Key Metrics */}
      <section>
        <h2 className="section-title">Key Metrics</h2>
        <div className="metrics-grid">

          <div className="analytics-card">
            <div className="card-header">
              <div className="metric-icon">📈</div>
              <div className="trend-indicator trend--up">↑</div>
            </div>
            <div className="card-content">
              <h3 className="metric-label">User Growth</h3>
              <p className="metric-value">24.5%</p>
              <p className="metric-description">vs last month</p>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-header">
              <div className="metric-icon">✓</div>
              <div className="trend-indicator trend--up">↑</div>
            </div>
            <div className="card-content">
              <h3 className="metric-label">Project Success Rate</h3>
              <p className="metric-value">87.3%</p>
              <p className="metric-description">Completed projects</p>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-header">
              <div className="metric-icon">💰</div>
              <div className="trend-indicator trend--up">↑</div>
            </div>
            <div className="card-content">
              <h3 className="metric-label">Monthly Revenue</h3>
              <p className="metric-value">$45,230</p>
              <p className="metric-description">vs last month</p>
            </div>
          </div>

          <div className="analytics-card">
            <div className="card-header">
              <div className="metric-icon">👥</div>
              <div className="trend-indicator trend--up">↑</div>
            </div>
            <div className="card-content">
              <h3 className="metric-label">Active Users</h3>
              <p className="metric-value">2,540</p>
              <p className="metric-description">This month</p>
            </div>
          </div>

        </div>
      </section>

      {/* Charts Section */}
      <section className="charts-section">
        <h2 className="section-title">Analytics Charts</h2>

        <div className="charts-grid">

          <div className="chart-card">
            <h3 className="chart-title">User Engagement</h3>

            <div className="chart-placeholder">
              <div className="chart-bar-container">

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "40%" }}></div>
                  <span className="chart-label">Mon</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "60%" }}></div>
                  <span className="chart-label">Tue</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "50%" }}></div>
                  <span className="chart-label">Wed</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "75%" }}></div>
                  <span className="chart-label">Thu</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "90%" }}></div>
                  <span className="chart-label">Fri</span>
                </div>

              </div>
            </div>

            <div className="chart-stats">
              <span className="stat-item">Avg: 16</span>
              <span className="stat-item">Max: 22</span>
            </div>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Revenue Trend</h3>

            <div className="chart-placeholder">
              <div className="chart-bar-container">

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "50%" }}></div>
                  <span className="chart-label">Week 1</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "70%" }}></div>
                  <span className="chart-label">Week 2</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "85%" }}></div>
                  <span className="chart-label">Week 3</span>
                </div>

                <div className="chart-bar-wrapper">
                  <div className="chart-bar" style={{ height: "100%" }}></div>
                  <span className="chart-label">Week 4</span>
                </div>

              </div>
            </div>

            <div className="chart-stats">
              <span className="stat-item">Avg: 6400</span>
              <span className="stat-item">Max: 7500</span>
            </div>
          </div>

        </div>
      </section>

      {/* Additional Statistics */}
      <section className="stats-section">
        <h2 className="section-title">Additional Statistics</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <p className="stat-label">Avg Session Duration</p>
            <p className="stat-value">8m 32s</p>
          </div>

          <div className="stat-box">
            <p className="stat-label">Bounce Rate</p>
            <p className="stat-value">23.5%</p>
          </div>

          <div className="stat-box">
            <p className="stat-label">Conversion Rate</p>
            <p className="stat-value">3.2%</p>
          </div>

          <div className="stat-box">
            <p className="stat-label">New Users</p>
            <p className="stat-value">123</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlatformAnalytics;
