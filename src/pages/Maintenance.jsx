import React, { useState } from "react";

export default function Maintenance() {
  const [requests, setRequests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      well: e.target.well.value,
      issue: e.target.issue.value,
      date: new Date().toLocaleDateString()
    };
    setRequests([...requests, newRequest]);
  };

  return (
    <div className="page-container">
      <h1>طلبات الصيانة</h1>
      <form onSubmit={handleSubmit}>
        <input name="well" placeholder="اسم البئر" />
        <input name="issue" placeholder="نوع المشكلة" />
        <button type="submit">إضافة طلب</button>
      </form>

      <ul>
        {requests.map((req, i) => (
          <li key={i}>{req.well} - {req.issue} - {req.date}</li>
        ))}
      </ul>
    </div>
  );
}