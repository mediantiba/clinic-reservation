const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  personalCode: {
    type: String,
    required: true,
    unique: true,
  },
  appointments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Appointment",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
