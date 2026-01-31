// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>⏳ جاري التحقق من بيانات الدخول...</p>;
  }

  if (!user) {
    alert("🚫 يجب تسجيل الدخول للوصول إلى هذه الصفحة");
    return <Navigate to="/login" replace />;
  }

  return children;
}