// routes/profile.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

// Get user profile
router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
