// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? '' : 'closed'}`} style={{ backgroundColor: '#007bff', color: 'white', height: '100vh' }}>
      <button onClick={toggleSidebar} style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#0056b3', color: 'white', border: 'none' }}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/jobs" style={{ color: 'white', textDecoration: 'none' }}>Jobs</Link></li>
          <li><Link to="/network" style={{ color: 'white', textDecoration: 'none' }}>Network</Link></li>
          <li><Link to="/notifications" style={{ color: 'white', textDecoration: 'none' }}>Notifications</Link></li>
          <li><Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
          <li><Link to="/messages" style={{ color: 'white', textDecoration: 'none' }}>Messages</Link></li>
          <li><Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link></li>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
