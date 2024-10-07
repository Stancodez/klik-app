const express = require('express');
const router = express.Router();

// Create a post
router.post('/create', (req, res) => {
  // Add post creation logic here
  res.send('Post created successfully');
});

// Get all posts
router.get('/', (req, res) => {
  // Logic to fetch posts
  res.send('Fetching all posts');
});

module.exports = router;
