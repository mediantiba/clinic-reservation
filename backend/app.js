const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const seed = require("./seed");

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:3001']
}));

const doctorsRouter = require("./routers/doctors");
app.use("/doctors", doctorsRouter);

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