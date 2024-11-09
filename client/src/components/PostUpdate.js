import React, { useState } from 'react';
import '../PostUpdate.css'; // Custom styles for the form

const PostUpdate = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      // Replace with your backend API URL for posting updates
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        const newPost = await response.json();
        // Callback to update the feed after a new post is created
        onPostCreated(newPost);
        setContent('');
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-update-container">
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          className="post-textarea"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          required
        />
        <button type="submit" className="post-button" disabled={loading}>
          {loading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
};

export default PostUpdate;
