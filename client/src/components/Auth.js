import '../styles.css';
import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', profession: '', industry: ''
  });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={onChange} required />
      <input type="email" name="email" placeholder="Email" onChange={onChange} required />
      <input type="password" name="password" placeholder="Password" onChange={onChange} required />
      <input type="text" name="profession" placeholder="Profession" onChange={onChange} required />
      <input type="text" name="industry" placeholder="Industry" onChange={onChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Auth;
