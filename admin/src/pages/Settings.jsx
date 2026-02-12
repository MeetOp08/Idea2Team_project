import React from "react";
import "./Settings.css";

const DEFAULT_SETTINGS = {
  platformName: "Idea2Team",
  maxUploadSize: "50",
  sessionTimeout: "30",
  enableNotifications: true,
  enableEmailReports: true,
  maintenanceMode: false,
  enableAPIAccess: true,
  apiRateLimit: "1000",
  theme: "light",
  language: "en",
};

const Settings = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure platform settings and preferences</p>
      </header>

      <div className="settings-form">
        <section className="settings-section">
          <h2 className="section-title">Platform Configuration</h2>
          
          <div className="form-group">
            <label htmlFor="platformName">Platform Name</label>
            <input type="text" id="platformName" defaultValue={DEFAULT_SETTINGS.platformName} />
          </div>

          <div className="form-group">
            <label htmlFor="maxUploadSize">Max Upload Size (MB)</label>
            <input type="number" id="maxUploadSize" defaultValue={DEFAULT_SETTINGS.maxUploadSize} />
          </div>

          <div className="form-group">
            <label htmlFor="sessionTimeout">Session Timeout (minutes)</label>
            <input type="number" id="sessionTimeout" defaultValue={DEFAULT_SETTINGS.sessionTimeout} />
          </div>
        </section>

        <section className="settings-section">
          <h2 className="section-title">Notifications & Email</h2>
          
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" defaultChecked={DEFAULT_SETTINGS.enableNotifications} />
              <span>Enable Notifications</span>
            </label>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" defaultChecked={DEFAULT_SETTINGS.enableEmailReports} />
              <span>Enable Email Reports</span>
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h2 className="section-title">API Configuration</h2>
          
          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" defaultChecked={DEFAULT_SETTINGS.enableAPIAccess} />
              <span>Enable API Access</span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="apiRateLimit">API Rate Limit (requests/hour)</label>
            <input type="number" id="apiRateLimit" defaultValue={DEFAULT_SETTINGS.apiRateLimit} />
          </div>
        </section>

        <section className="settings-section">
          <h2 className="section-title">System Preferences</h2>
          
          <div className="form-group">
            <label htmlFor="theme">Theme</label>
            <select id="theme" defaultValue={DEFAULT_SETTINGS.theme}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select id="language" defaultValue={DEFAULT_SETTINGS.language}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input type="checkbox" defaultChecked={DEFAULT_SETTINGS.maintenanceMode} />
              <span>Maintenance Mode</span>
            </label>
          </div>
        </section>

        <div className="form-actions">
          <button className="btn btn--primary">Save Settings</button>
          <button className="btn btn--secondary">Reset to Default</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
