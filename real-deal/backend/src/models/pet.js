const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  photo: {
    type: String,
  },
  race: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.Model('Pet', schema);
