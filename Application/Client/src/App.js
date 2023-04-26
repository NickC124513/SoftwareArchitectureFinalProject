import React, { useState, useEffect } from "react";
import LoginPage from "./components/Login";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data from API
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Inventory Management</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <LoginPage />
    </div>
  );
}

export default App;
