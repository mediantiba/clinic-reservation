const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");
const User = require("../models/user");

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment
      .find()
      .populate("doctor");

    return res.json(appointments);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

// Create a new appointment
router.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      date: req.body.date,
      time: req.body.time,
      doctor: req.body.doctor_id
    });
    if (appointment) {
      res.sendStatus(409);
    } else {
      const newAppointment = await Appointment.create({
        user: req.body.user_id,
        doctor: req.body.doctor_id,
        date: req.body.date,
        time: req.body.time
      });

      const updatedUser = await User.updateOne({ _id: req.body.user_id }, {
        $addToSet: {
          appointments: newAppointment
        }
      });

      res.json(newAppointment);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
