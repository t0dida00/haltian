const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  CO2: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date
  }
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
