// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

// Call connectDB function to establish the database connection
connectDB();

// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file handling for serving images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Dummy data for network posts (replace with a database model in a real-world scenario)
let networkPosts = [
  {
    id: 1,
    title: 'First Network Post',
    description: 'This is the first post in the network.',
    imageUrl: '',
  },
];

// Route to get network data
app.get('/api/network', (req, res) => {
  res.json(networkPosts);
});

// Route to create a new network post
app.post('/api/network', (req, res) => {
  const { title, description, imageUrl } = req.body;
  const newPost = {
    id: networkPosts.length + 1,
    title,
    description,
    imageUrl,
  };
  networkPosts.push(newPost);
  res.status(201).json(newPost);
});

// Route to handle image uploads
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const filePath = `/uploads/${req.file.filename}`;
  res.status(200).json({ filePath });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'An error occurred' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
