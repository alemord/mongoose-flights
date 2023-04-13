const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    required: true,
    default: () => new Date().setFullYear(new Date().getFullYear() + 1),
  },
});

module.exports = mongoose.model('Flight', flightSchema);
