// ProfileDropdown.js
import React, { useEffect, useState } from 'react';

const ProfileDropdown = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace '/api/user/profile' with your actual API endpoint
    fetch('/api/user/profile')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error("Error fetching user data:", error));
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div style={{ position: 'absolute', top: '50px', left: '10px', backgroundColor: 'white', padding: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', width: '200px' }}>
      <img src={userData.profilePicture} alt="Profile" style={{ width: '100%', borderRadius: '50%' }} />
      <h3>{userData.name}</h3>
      <p>{userData.email}</p>
      <p>{userData.profession}</p>
      <p>{userData.industry}</p>
    </div>
  );
};

export default ProfileDropdown;
