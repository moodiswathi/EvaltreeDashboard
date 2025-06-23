import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  if (email === 'user@example.com' && password === 'password') {
    onLogin();
    navigate('/dashboard');
  } else {
    alert('Invalid credentials');
  }
};


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
          Demo Login:<br />
          <strong>Email:</strong> user@example.com<br />
          <strong>Password:</strong> password
        </p>
      </form>
    </div>
  );
}

export default Login;
