const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
  appointments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Appointment",
    },
  ],
});

module.exports = mongoose.model("Doctor", doctorSchema);
