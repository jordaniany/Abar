// Register.jsx
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css"; // ✅ styled form

export default function Register() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ إنشاء مستخدم جديد
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // ✅ إضافة بيانات المستخدم في Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: formData.email,
        role: "user", // افتراضي: مستخدم عادي
      });

      alert("🎉 مرحباً بك! تم إنشاء الحساب بنجاح");
      navigate("/dashboard"); // ✅ توجيه تلقائي للـ Dashboard
    } catch (error) {
      setError("❌ خطأ: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>إنشاء حساب جديد</h1>
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">📝 تسجيل</button>
      </form>
    </div>
  );
}