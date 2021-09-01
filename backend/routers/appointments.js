const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointment");

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
      const result = await Appointment.create({
        user: req.body.user_id,
        doctor: req.body.doctor_id,
        date: req.body.date,
        time: req.body.time,
        personalCode: req.body.personalCode
      });
      res.json(result);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
