import React, { useState } from "react";
import Login from "./components/Login.jsx";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user}!</h2>
      <p>You are now logged in.</p>
    </div>
  );
}

export default App;