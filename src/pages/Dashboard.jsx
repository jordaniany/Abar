import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../styles/PageLayout.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}