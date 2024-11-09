import '../Login.css';
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login-email">Email</label>
      <input
        type="text"
        id="login-email"            // Added unique id
        name="email"                // Added name attribute
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="login-password">Password</label>
      <input
        type="password"
        id="login-password"            // Added unique id
        name="password"                // Added name attribute
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
      <p>
        New user? <a href="/signup">Sign up here</a>
      </p>
    </form>
  );
}

export default Login;
