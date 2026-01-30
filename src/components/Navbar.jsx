import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css"; // ✅ import the CSS we created

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);   // clears Firebase session
      navigate("/login");    // redirect to login page
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {user && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}

      <Link to="/contact">Contact</Link>
    </nav>
  );
}