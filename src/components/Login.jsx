import React, { useState } from "react";
import Dashboard from "../pages/Dashboard";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" />
      <button type="submit">Login</button>
    </form>
  );
}