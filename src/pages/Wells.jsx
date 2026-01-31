// Wells.jsx
import React from "react";
import "../styles/Wells.css";

export default function Wells() {
  const wells = [
    { id: 1, name: "بئر الشمال", location: "إربد", status: "نشط" },
    { id: 2, name: "بئر الوسط", location: "عمان", status: "قيد الصيانة" },
    { id: 3, name: "بئر الجنوب", location: "الكرك", status: "متوقف" },
  ];

  return (
    <div className="page-container">
      <h1>🛢️ الآبار</h1>
      <p>هذه الصفحة تعرض قائمة بالآبار وحالتها التشغيلية.</p>

      <table className="wells-table">
        <thead>
          <tr>
            <th>رقم</th>
            <th>اسم البئر</th>
            <th>الموقع</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {wells.map((well) => (
            <tr key={well.id}>
              <td>{well.id}</td>
              <td>{well.name}</td>
              <td>{well.location}</td>
              <td>{well.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}