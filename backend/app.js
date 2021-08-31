const express = require("express");
const mongoose = require("mongoose");
const seed = require("./seed");

const app = express();

const doctorsRouter = require("./routers/doctors");
app.use("/doctors", doctorsRouter);

app.use(express.json());

mongoose.connect(
  "mongodb://database:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (error) => {
    if (error) {
      console.log("FAILED TO CONNECT TO DATABASE");
      console.error(error);
    } else {
      console.log("CONNECTED TO DATABASE");
      await seed();
      app.listen(3000);
    }
  }
);