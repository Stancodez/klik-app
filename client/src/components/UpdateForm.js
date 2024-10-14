import React, { useState } from 'react';
import axios from 'axios';

const UpdateForm = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    profession: user.profession,
    industry: user.industry,
    profilePicture: user.profilePicture,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/users/update', {
        userId: user._id,
        ...formData,
      });
      console.log('Profile updated successfully:', response.data);
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Profession:
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
        />
      </label>
      <label>
        Industry:
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        />
      </label>
      <label>
        Profile Picture URL:
        <input
          type="text"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UpdateForm;
