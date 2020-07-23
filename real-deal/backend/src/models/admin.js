const mongoose = require('mongoose');

const schema = mongoose.Schema({
  CPF: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  adminName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  childAdmins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
    },
  ],
});

module.exports = mongoose.model('Admin', schema);
