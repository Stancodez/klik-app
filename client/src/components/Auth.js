import '../styles.css';
// components/Auth.js
import React, { useState } from 'react';
import { postData } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Auth({ isLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/api/login' : '/api/register';
      await postData(endpoint, formData);
      navigate('/home');
    } catch (err) {
      console.error('Authentication failed:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
}

export default Auth;

