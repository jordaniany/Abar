// Reports.jsx
import React from "react";
import "../styles/Reports.css";

export default function Reports() {
  const reports = [
    { id: 1, title: "تقرير فني", date: "2026-01-30", status: "مكتمل" },
    { id: 2, title: "تقرير ميداني", date: "2026-01-28", status: "قيد المراجعة" },
    { id: 3, title: "تقرير صيانة", date: "2026-01-25", status: "مرفوض" },
  ];

  return (
    <div className="page-container">
      <h1>📄 التقارير</h1>
      <p>هذه الصفحة تعرض قائمة بالتقارير الفنية والميدانية.</p>

      <table className="reports-table">
        <thead>
          <tr>
            <th>رقم</th>
            <th>عنوان التقرير</th>
            <th>التاريخ</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.date}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}