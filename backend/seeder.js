const Doctor = require("./models/doctor");

const doctors = [
  {
    name: "John Smith",
    field: "General Practitioner",
  },
  {
    name: "Linda Smith",
    field: "Ophthalmologist",
  },
];

async function seed() {
  Doctor.countDocuments({}, async (err, count) => {
    if (!err & count === 0)
      await Doctor.insertMany(doctors);
  });
}

module.exports = seed;
