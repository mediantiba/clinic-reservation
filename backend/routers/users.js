const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
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
        personalCode: req.body.user.personalCode
      });
      res.json(result);
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
});

module.exports = router;
