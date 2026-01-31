// Profile.jsx
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function Profile() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>⏳ جاري تحميل البيانات...</p>;
  }

  if (!user) {
    return (
      <div className="page-container">
        <h1>🚫 غير مسجل دخول</h1>
        <p>الرجاء تسجيل الدخول لعرض صفحة البروفايل.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>الملف الشخصي</h1>
      <p>📧 البريد الإلكتروني: {user.email}</p>
      <p>🆔 رقم المستخدم (UID): {user.uid}</p>
    </div>
  );
}