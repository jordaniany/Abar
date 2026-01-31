// Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../styles/Navbar.css";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("✅ تم تسجيل الخروج بنجاح");
      navigate("/"); // ✅ توجيه تلقائي للصفحة الرئيسية
    } catch (error) {
      alert("❌ خطأ أثناء تسجيل الخروج: " + error.message);
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">مشروع أبار</h2>
      <ul className="nav-links">
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/about">عن المشروع</Link></li>
        <li><Link to="/contact">تواصل معنا</Link></li>
        {!user && (
          <>
            <li><Link to="/login">تسجيل الدخول</Link></li>
            <li><Link to="/register">التسجيل</Link></li>
          </>
        )}
        {user && (
          <>
            <li><Link to="/dashboard">لوحة التحكم</Link></li>
            <li><Link to="/wells">الآبار</Link></li>
            <li><Link to="/maintenance">الصيانة</Link></li>
            <li><Link to="/profile">البروفايل</Link></li>
            <li><Link to="/settings">الإعدادات</Link></li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                🚪 تسجيل الخروج
              </button>
            </li>
          </>
        )}
      </ul>
      {user && (
        <div className="welcome-message">
          👋 مرحباً، {user.email}
        </div>
      )}
    </nav>
  );
}