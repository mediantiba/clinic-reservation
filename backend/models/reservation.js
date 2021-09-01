const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
