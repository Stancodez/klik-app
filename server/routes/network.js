// routes/network.js

const express = require('express');
const router = express.Router();

// Example: Mock data for network connections (replace with database interaction)
let networkConnections = [
  { id: 1, username: 'john_doe', profession: 'Software Engineer' },
  { id: 2, username: 'jane_smith', profession: 'Product Manager' },
];

// @route   GET /api/network
// @desc    Get all network connections
// @access  Public
router.get('/', (req, res) => {
  res.json(networkConnections);
});

// @route   POST /api/network
// @desc    Add a new network connection
// @access  Public
router.post('/', (req, res) => {
  const { username, profession } = req.body;
  const newConnection = {
    id: networkConnections.length + 1,
    username,
    profession,
  };
  networkConnections.push(newConnection);
  res.json(newConnection);
});

// @route   DELETE /api/network/:id
// @desc    Delete a network connection
// @access  Public
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  networkConnections = networkConnections.filter(conn => conn.id !== id);
  res.json({ message: 'Connection deleted' });
});

module.exports = router;
