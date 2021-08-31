const express = require("express");
const mongoose = require("mongoose");

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
  (error) => {
    if (error) {
      console.log("FAILED TO CONNECT TO DATABASE");
      console.error(error);
    } else {
      console.log("CONNECTED TO DATABASE");
      app.listen(3000);
    }
  }
);