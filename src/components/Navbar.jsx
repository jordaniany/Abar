// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // optional styling file

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">مشروع أبار</h2>
      <ul className="nav-links">
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/about">عن المشروع</Link></li>
        <li><Link to="/contact">تواصل معنا</Link></li>
        <li><Link to="/login">تسجيل الدخول</Link></li>
        <li><Link to="/register">التسجيل</Link></li>
        <li><Link to="/dashboard">لوحة التحكم</Link></li>
        <li><Link to="/wells">الآبار</Link></li>
        <li><Link to="/maintenance">الصيانة</Link></li>
        <li><Link to="/profile">البروفايل</Link></li>
        <li><Link to="/settings">الإعدادات</Link></li>
      </ul>
    </nav>
  );
}