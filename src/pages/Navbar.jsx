// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/dashboard">لوحة التحكم</NavLink></li>
        <li><NavLink to="/reports">التقارير</NavLink></li>
        <li><NavLink to="/wells">الآبار</NavLink></li>
        <li><NavLink to="/maintenance">الصيانة</NavLink></li>
        <li><NavLink to="/profile">البروفايل</NavLink></li>
        <li><NavLink to="/settings">الإعدادات</NavLink></li>
        <li><NavLink to="/login">تسجيل الدخول</NavLink></li>
        <li><NavLink to="/register">إنشاء حساب</NavLink></li>
      </ul>
    </nav>
  );
}