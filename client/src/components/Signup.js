import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profession: '',
    industry: '',
    profilePicture: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      setMessage(response.data.msg);
    } catch (err) {
      console.error(err);
      setMessage('Error registering user');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Profession:</label>
        <input type="text" name="profession" value={formData.profession} onChange={handleChange} required />

        <label>Industry:</label>
        <input type="text" name="industry" value={formData.industry} onChange={handleChange} required />

        <label>Profile Picture URL:</label>
        <input type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
