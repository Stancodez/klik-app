const express = require('express');
const router = express.Router();

// Controller functions (you can import them if split into separate files)
router.post('/register', (req, res) => {
  // Registration logic here
  res.send('User registered successfully');
});

router.post('/login', (req, res) => {
  // Login logic here
  res.send('User logged in successfully');
});

module.exports = router;
