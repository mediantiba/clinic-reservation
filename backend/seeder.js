const Doctor = require("./models/doctor");

const doctors = [
  {
    field: "Šeimos gydytojas",
  },
  {
    field: "Oftamologas",
  },
  {
    field: "Stomatologas",
  },
  {
    field: "Kardiologas",
  },
];

async function seed() {
  Doctor.countDocuments({}, async (err, count) => {
    if (!err & (count === 0)) await Doctor.insertMany(doctors);
  });
}

module.exports = seed;
