// routes/updates.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Update = require('../models/Update');
const router = express.Router();

// Create a new update
router.post('/', authMiddleware, async (req, res) => {
  const { content } = req.body;
  try {
    const update = new Update({
      userId: req.user._id,
      content
    });
    await update.save();
    res.json(update);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get recent updates
router.get('/', authMiddleware, async (req, res) => {
  try {
    const updates = await Update.find().sort({ createdAt: -1 });
    res.json(updates);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
