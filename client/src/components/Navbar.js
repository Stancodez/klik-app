// src/components/Navbar.js
import '../styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>KLIK</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/feed">Feed</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
