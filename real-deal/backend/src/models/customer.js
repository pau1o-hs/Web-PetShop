const mongoose = require('mongoose');

const schema = mongoose.Schema({
  CPF: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('Customer', schema);
