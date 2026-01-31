// Settings.jsx
import React, { useState } from "react";

export default function Settings() {
  const [language, setLanguage] = useState("العربية");
  const [password, setPassword] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = () => {
    alert("✅ تم حفظ الإعدادات بنجاح");
  };

  return (
    <div className="page-container">
      <h1>الإعدادات</h1>
      <p>يمكنك تعديل إعدادات حسابك من هنا.</p>

      <div className="settings-section">
        <label>🌐 اللغة:</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="العربية">العربية</option>
          <option value="English">الإنجليزية</option>
        </select>
      </div>

      <div className="settings-section">
        <label>🔑 تغيير كلمة المرور:</label>
        <input
          type="password"
          placeholder="أدخل كلمة مرور جديدة"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button onClick={handleSave}>💾 حفظ الإعدادات</button>
    </div>
  );
}