import React, { useState, useEffect } from "react";
import LoginPage from "./components/Login";
import HomePage from "./components/HomePage";

function App() {
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
