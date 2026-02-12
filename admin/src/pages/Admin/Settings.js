import React, { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import "./Setting.css";   // see filename note below


const Settings = () => {
  const [platformName, setPlatformName] = useState("Idea2Team");
  const [supportEmail, setSupportEmail] = useState("support@idea2team.com");

  const handleSave = () => {
    alert("Settings saved successfully!");
    console.log({ platformName, supportEmail });
  };

  return (
    <div>
      <PageHeader title="Platform Settings" />

      <div className="settings-card">
        <h4>General Settings</h4>

        <label>Platform Name</label>
        <input
          type="text"
          value={platformName}
          onChange={(e) => setPlatformName(e.target.value)}
        />

        <label>Support Email</label>
        <input
          type="email"
          value={supportEmail}
          onChange={(e) => setSupportEmail(e.target.value)}
        />

        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
