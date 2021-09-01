const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User"
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Doctor"
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

appointmentSchema.index({ doctor: 1, date: 1, time: 1 }, { unique: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
