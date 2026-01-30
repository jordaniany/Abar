import React, { useState } from "react";
import Dashboard from "../pages/Dashboard"; // ✅ correct path

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check: username === "admin"
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <form onSubmit={handleLogin} style={{ padding: "2rem" }}>
      <input type="text" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}