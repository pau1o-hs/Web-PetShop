const mongoose = require('mongoose');

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsible: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalBooked: {
    type: Number,
    required: true,
    default: 0,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.Model('Service', schema);
