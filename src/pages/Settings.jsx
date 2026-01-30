import React from "react";
import "../styles/PageLayout.css";

export default function Settings() {
  return (
    <div className="page-container">
      <h1>Settings</h1>
      <p>Manage your preferences here.</p>
      <ul>
        <li>Change password</li>
        <li>Update email</li>
        <li>Notification preferences</li>
      </ul>
      <button>Save Settings</button>
    </div>
  );
}