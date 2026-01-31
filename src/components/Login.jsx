// Login.jsx
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/AuthForm.css"; // ✅ styled form

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate("/dashboard"); // ✅ redirect if already logged in
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("✅ تم تسجيل الدخول بنجاح");
    } catch (error) {
      alert("❌ خطأ: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>تسجيل الدخول</h1>

      {/* ✅ رسالة تنبيه إذا المستخدم وصل من ProtectedRoute */}
      {location.state?.fromProtected && (
        <p style={{ color: "red" }}>
          🚫 الرجاء تسجيل الدخول لمتابعة
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="📧 البريد الإلكتروني"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="🔑 كلمة المرور"
          onChange={handleChange}
          required
        />
        <button type="submit">🚀 دخول</button>
      </form>
    </div>
  );
}