import React from "react";
import "../styles/PageLayout.css";

export default function Profile() {
  return (
    <div className="page-container">
      <h1>User Profile</h1>
      <p>This is where user details will be displayed.</p>
      <ul>
        <li>Name: Admin</li>
        <li>Email: admin@example.com</li>
        <li>Role: Super User</li>
      </ul>
      <button>Edit Profile</button>
    </div>
  );
}