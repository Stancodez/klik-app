import '../styles.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api'; // Import the fetchData function

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Fetch user profile data
    fetchData('/api/profile')
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.error('Error fetching profile data:', err);
      });
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* Display the user's image if available */}
        {profile.imageUrl ? (
          <img src={profile.imageUrl} alt="User" className="profile-image" />
        ) : (
          <div className="profile-placeholder">No Image</div>
        )}
        <h2>{profile.username}</h2>
        <p>{profile.profession}</p>
        <p>{profile.industry}</p>
      </div>
      <div className="profile-details">
        <p>Email: {profile.email}</p>
        {/* Add more user details if needed */}
      </div>
    </div>
  );
};

export default Profile;
