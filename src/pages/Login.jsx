// Login.jsx
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("تم تسجيل الدخول بنجاح");
    } catch (error) {
      console.error("خطأ أثناء تسجيل الدخول:", error);
    }
  };

  return (
    <div className="page-container">
      <h1>🔑 تسجيل الدخول</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  );
}