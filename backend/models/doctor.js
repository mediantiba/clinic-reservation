const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
