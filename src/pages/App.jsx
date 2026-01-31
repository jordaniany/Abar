// App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Dynamic imports باستخدام React.lazy
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Login = React.lazy(() => import("./Login"));
const Register = React.lazy(() => import("./Register"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const Reports = React.lazy(() => import("./Reports"));
const Wells = React.lazy(() => import("./Wells"));
const Maintenance = React.lazy(() => import("./Maintenance"));
const Profile = React.lazy(() => import("./Profile"));
const Settings = React.lazy(() => import("./Settings"));
const Navbar = React.lazy(() => import("./Navbar"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));

import "../styles/App.css"; // ✅ ملف التنسيق العام

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>⏳ جاري التحميل...</div>}>
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* صفحات محمية */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wells"
              element={
                <ProtectedRoute>
                  <Wells />
                </ProtectedRoute>
              }
            />
            <Route
              path="/maintenance"
              element={
                <ProtectedRoute>
                  <Maintenance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}