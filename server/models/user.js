let mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    minlength: 1
  }
});

module.exports = {User};
