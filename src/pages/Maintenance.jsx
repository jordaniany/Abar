// Maintenance.jsx
import React from "react";

export default function Maintenance() {
  // Static maintenance data (example)
  const maintenanceData = [
    { id: 1, task: "تبديل المضخة", date: "2026-02-01", status: "قيد التنفيذ" },
    { id: 2, task: "تنظيف الفلتر", date: "2026-02-05", status: "منجز" },
    { id: 3, task: "فحص الأنابيب", date: "2026-02-10", status: "مجدول" },
  ];

  return (
    <div className="page-container">
      <h1>🛠️ مهام الصيانة</h1>
      <p>هذه الصفحة تعرض بيانات ثابتة عن مهام الصيانة.</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>الرقم</th>
            <th>المهمة</th>
            <th>التاريخ</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceData.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
              <td>{task.date}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}