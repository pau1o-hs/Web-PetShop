const mongoose = require('mongoose');

const schema = mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  products: [
    {
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    },
  ],
  services: [
    {
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
      },
      pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
      },
      date: {
        type: Date,
        required: true,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('Order', schema);
