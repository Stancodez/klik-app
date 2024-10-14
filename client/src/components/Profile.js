import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the current user’s profile information from the backend
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/users/profile');
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}'s Profile</h2>
          <p>Profession: {user.profession}</p>
          <p>Industry: {user.industry}</p>
          <img src={user.profilePicture} alt="Profile" />
          <UpdateForm user={user} />
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
