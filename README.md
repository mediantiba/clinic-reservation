# Summary

This project is a demo of a reservation system for a clinic.

The project consists of the following containers:

- database (port:27017)
- backend (port: 3000)
- frontend (port: 3001)

To start the app, navigate to the root folder and run `docker-compose up` from the command line.

# What's included?

- The ability to create simple accounts (no username or password)
- User data are automatically populated in the form
- Select list to populate the list of doctors
- Date and time selection
- List of user's reservations

# Todo

- Limit the user's ability to create appointments. Limit should be 1 time per week.

# Stack

mongo - express - angular - node - docker