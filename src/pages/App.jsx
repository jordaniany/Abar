// App.jsx
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// ✅ Lazy imports للصفحات
const Navbar = lazy(() => import("./Navbar"));
const Dashboard = lazy(() => import("./Dashboard"));
const Reports = lazy(() => import("./Reports"));
const Wells = lazy(() => import("./Wells"));
const Maintenance = lazy(() => import("./Maintenance"));
const Login = lazy(() => import("./Login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>⏳ جاري التحميل...</div>}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* ✅ الصفحات المحمية */}
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
        </Routes>
      </Suspense>
    </Router>
  );
}