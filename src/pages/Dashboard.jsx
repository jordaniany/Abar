// src/pages/Dashboard.jsx
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import "../styles/Dashboard.css"; // ✅ استدعاء صحيح من فولدر styles

export default function Dashboard() {
  const [user] = useAuthState(auth);

  const wellsCount = 4;
  const maintenanceCount = 3;

  return (
    <div className="page-container">
      <h1>📊 لوحة التحكم</h1>
      <p>هذه الصفحة تعرض ملخص سريع عن النظام.</p>

      <div className="cards-container">
        <div className="card wells-card">
          <h2>🛢️ الآبار</h2>
          <p>{wellsCount} بئر</p>
        </div>

        <div className="card maintenance-card">
          <h2>🛠️ الصيانة</h2>
          <p>{maintenanceCount} مهمة</p>
        </div>

        {user && (
          <div className="card user-card">
            <h2>👤 المستخدم الحالي</h2>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}