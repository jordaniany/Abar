// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App"; // ✅ تأكد من المسار الصحيح
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);