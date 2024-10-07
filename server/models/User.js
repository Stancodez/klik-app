const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String, // URL of the uploaded profile picture
    default: 'default.jpg' // Default picture if none is uploaded
  },
  profession: {
    type: String, // User's profession
    required: true
  },
  industry: {
    type: String, // Industry the user belongs to
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
