import '../styles.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard'); // Use navigate instead of history.push
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Go to Dashboard</button>
    </div>
  );
};

export default Home;
