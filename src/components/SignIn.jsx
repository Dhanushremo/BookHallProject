import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/user/login', {
        email,
        password
      });

      if (response.data.success) {
        const user = response.data.user;

        // 🔐 Store user and role in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', user.role);

        alert("Login successful ✅");

        // 🔁 Navigate based on role
        if (user.role === 'ADMIN') {
          navigate('/admin/add-book');
        } else {
          navigate('/Books');
        }
      } else {
        alert("Invalid credentials ❌");
      }

    } catch (error) {
      alert("Login failed ❌");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <p className="auth-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
