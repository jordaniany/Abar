// Wells.jsx
import React from "react";

export default function Wells() {
  // Static wells data (example)
  const wellsData = [
    { id: 1, name: "البئر A", status: "نشط", location: "المنطقة الشمالية" },
    { id: 2, name: "البئر B", status: "صيانة", location: "المنطقة الشرقية" },
    { id: 3, name: "البئر C", status: "متوقف", location: "المنطقة الجنوبية" },
    { id: 4, name: "البئر D", status: "نشط", location: "المنطقة الغربية" },
  ];

  return (
    <div className="page-container">
      <h1>🛢️ قائمة الآبار</h1>
      <p>هذه الصفحة تعرض بيانات ثابتة عن الآبار.</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>الرقم</th>
            <th>الاسم</th>
            <th>الحالة</th>
            <th>الموقع</th>
          </tr>
        </thead>
        <tbody>
          {wellsData.map((well) => (
            <tr key={well.id}>
              <td>{well.id}</td>
              <td>{well.name}</td>
              <td>{well.status}</td>
              <td>{well.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}