const express = require("express");
const mongoose = require("mongoose");

const app = express();

const doctorsRouter = require("./routers/doctors");
app.use("/doctors", doctorsRouter);

app.use(express.json());

mongoose.connect(
  "mongodb://host.docker.internal:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("FAILED TO CONNECT TO DATABASE");
      console.error(err);
    } else {
      app.listen(3000);
    }
  }
);

const connection = mongoose.connection;

connection.on("open", () => console.log("CONNECTED TO DATABASE"));
