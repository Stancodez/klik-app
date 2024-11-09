import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/api'; // Assume this function fetches API data

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData('/api/notifications').then(data => setNotifications(data)); // Replace with actual API
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
