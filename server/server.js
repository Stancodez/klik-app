const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // Allows server to parse JSON request bodies
app.use(cors());          // Enables Cross-Origin Resource Sharing

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Import routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

// Route middlewares
app.use('/api/auth', authRoutes);  // Handles authentication-related requests
app.use('/api/posts', postRoutes); // Handles post-related requests

// Serving static files for profile uploads
app.use('/uploads', express.static('uploads')); // Serves uploaded files from "uploads" folder

// Handle root requests
app.get('/', (req, res) => {
  res.send('Welcome to the KLIK API');
});

// Define server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
