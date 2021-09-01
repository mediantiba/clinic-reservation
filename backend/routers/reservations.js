const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

router.get('/:personalCode', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;