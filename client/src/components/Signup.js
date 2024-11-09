import '../Signup.css';
import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup({ firstname, lastname, email, password, profession, industry });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="signup-firstname">Firstname</label>
      <input
        type="text"
        id="signup-firstname"           // Added unique id
        name="firstname"                // Added name attribute
        autoComplete="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <label htmlFor="signup-lastname">Lastname</label>
      <input
        type="lastname"
        id="signup-lastname"              // Added unique id
        name="lastname"                   // Added name attribute
        autoComplete="lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />

      <label htmlFor="signup-email">Email</label>
      <input
        type="text"
        id="signup-email"           // Added unique id
        name="email"                // Added name attribute
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="signup-password">Password</label>
      <input
        type="password"
        id="signup-password"           // Added unique id
        name="password"                // Added name attribute
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="signup-profession">Profession</label>
      <input
        type="text"
        id="signup-profession"           // Added unique id
        name="profession"                // Added name attribute
        autoComplete="profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />

      <label htmlFor="signup-industry">Industry</label>
      <input
        type="text"
        id="signup-industry"           // Added unique id
        name="industry"                // Added name attribute
        autoComplete="industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;


