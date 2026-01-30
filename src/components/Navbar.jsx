import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/login" style={{ marginRight: "1rem" }}>Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}