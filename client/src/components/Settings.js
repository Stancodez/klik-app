// Settings.js
import React, { useState } from 'react';
import '../Settings.css'; // Create a separate CSS file for styling if needed

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleToggle = (e) => {
    const { name, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleToggle}
          />
          Enable Notifications
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleToggle}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
}

export default Settings;
