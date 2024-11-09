// Header.js
import React, { useState } from 'react';
import { FaUserCircle, FaSearch, FaCog, FaEnvelope, FaPlusCircle } from 'react-icons/fa';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#333' }}>
      <FaUserCircle size={30} onClick={toggleProfile} style={{ cursor: 'pointer', color: 'white' }} />

      <FaSearch size={30} style={{ color: 'white' }} />

      <div style={{ display: 'flex', gap: '15px' }}>
        <FaEnvelope size={30} style={{ cursor: 'pointer', color: 'white' }} />
        <FaCog size={30} style={{ cursor: 'pointer', color: 'white' }} />
        <FaPlusCircle size={30} style={{ cursor: 'pointer', color: 'white' }} />
      </div>

      {showProfile && <ProfileDropdown />}
    </header>
  );
};

export default Header;
