const Doctor = require('./models/doctor');

const doctors = [
  {
    name: 'John Smith',
    field: 'General Practitioner'
  },
  {
    name: 'Linda Smith',
    field: 'Ophthalmologist'
  }
];

async function seed() {
  await Doctor.deleteMany();
  await Doctor.insertMany(doctors);
}

module.exports = seed;