import React, { useState } from 'react';
import '../Style/Login.css';
import HomePage from './HomePage';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'SirManagerSir' && password === 'password123') {
      console.log('Logged in!');
    } else {
      alert("Invalid credentials. Please try again.");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-page">
      <h1 className="app-name">Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
