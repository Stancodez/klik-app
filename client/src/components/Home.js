import React, { useState, useEffect } from 'react';
import '../Home.css'; // Make sure you create and style a Home.css file

const Home = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch posts from an API
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/utils/api.js'); // Replace with your actual API endpoint
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
    }
  };

  // Use useEffect to fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="home-container">
      <h1>Recent Updates and Feeds</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <span className="post-author">By {post.author}</span>
              <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
