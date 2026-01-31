// Maintenance.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/Maintenance.css";

export default function Maintenance() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ task: "", date: "", status: "" });

  // جلب بيانات المهام من Firestore
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "maintenance"));
        const tasksData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
      } catch (error) {
        console.error("خطأ أثناء جلب بيانات الصيانة:", error);
      }
    };

    fetchTasks();
  }, []);

  // إضافة مهمة جديدة
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "maintenance"), newTask);
      setTasks([...tasks, { id: Date.now().toString(), ...newTask }]);
      setNewTask({ task: "", date: "", status: "" });
    } catch (error) {
      console.error("خطأ أثناء إضافة المهمة:", error);
    }
  };

  return (
    <div className="page-container">
      <h1>🛠️ الصيانة</h1>
      <p>هذه الصفحة تعرض قائمة بمهام الصيانة المجدولة.</p>

      {/* ✅ فورم إضافة مهمة جديدة */}
      <form onSubmit={handleAddTask} className="maintenance-form">
        <input
          type="text"
          placeholder="المهمة"
          value={newTask.task}
          onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
          required
        />
        <input
          type="date"
          value={newTask.date}
          onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          required
        />
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          required
        >
          <option value="">اختر الحالة</option>
          <option value="مكتمل">مكتمل</option>
          <option value="قيد التنفيذ">قيد التنفيذ</option>
          <option value="مؤجل">مؤجل</option>
        </select>
        <button type="submit">➕ إضافة مهمة</button>
      </form>

      {/* ✅ جدول عرض المهام */}
      <table className="maintenance-table">
        <thead>
          <tr>
            <th>رقم</th>
            <th>المهمة</th>
            <th>التاريخ</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
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