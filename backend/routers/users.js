const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Appointment = require("../models/appointment");
const Doctor = require("../models/doctor");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

router.get("/:personalCode", async (req, res) => {
  try {
    const user = await User.findOne({ personalCode: req.params.personalCode });
    if (!user) {
      return res.sendStatus(404);
    } else {
      return res.json(user);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

router.get("/:personalCode/appointments", async (req, res) => {
  try {
    const appointments = await Appointment
    .find({personalCode: req.params.personalCode})
    .populate("doctor");

    if (!appointments) {
      return res.sendStatus(404);
    } else {
      return res.json(appointments);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ personalCode: req.body.personalCode });

    if (user) {
      res.sendStatus(409);
    } else {
      const result = await User.create({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        personalCode: req.body.user.personalCode,
      });
      res.json(result);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
