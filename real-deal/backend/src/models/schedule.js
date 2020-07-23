const mongoose = require('mongoose');

const schema = mongoose.Schema({
  // This will only store the OPEN or BOOKED slots. All other slots must default
  // to EMPTY in the frontend
  slots: [
    {
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      pet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
      },
      state: {
        type: String,
        required: true,
        enum: ['OPEN', 'BOOKED'],
        default: 'OPEN',
      },
    },
  ],
});

module.exports = mongoose.Model('Schedule', schema);
