const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  budget: {
    type: Number,
    required: false,
  },
  notes: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
