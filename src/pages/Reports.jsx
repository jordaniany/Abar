// Reports.jsx
import React from "react";
import "./Reports.css"; // ✅ ملف تنسيق خاص بالتقارير

export default function Reports() {
  // بيانات تجريبية للتقارير
  const reportsData = [
    { month: "يناير", wells: 4, maintenance: 3 },
    { month: "فبراير", wells: 5, maintenance: 2 },
    { month: "مارس", wells: 6, maintenance: 4 },
  ];

  return (
    <div className="page-container">
      <h1>📑 التقارير</h1>
      <p>هذه الصفحة تعرض ملخص شهري لعدد الآبار ومهام الصيانة.</p>

      <table className="reports-table">
        <thead>
          <tr>
            <th>📅 الشهر</th>
            <th>🛢️ عدد الآبار</th>
            <th>🛠️ مهام الصيانة</th>
          </tr>
        </thead>
        <tbody>
          {reportsData.map((report, index) => (
            <tr key={index}>
              <td>{report.month}</td>
              <td>{report.wells}</td>
              <td>{report.maintenance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}