import React from "react";

export default function Profile() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Profile</h1>
      <p>This is where user details will be displayed.</p>
      <ul>
        <li>Name: Admin</li>
        <li>Email: admin@example.com</li>
        <li>Role: Super User</li>
      </ul>
    </div>
  );
}