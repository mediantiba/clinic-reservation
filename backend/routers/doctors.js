const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor");

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
