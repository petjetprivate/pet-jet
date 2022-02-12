const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const newUserRouter = require('./routes/newUser.router');
const flightEventRouter = require('./routes/flight_event.router');
const getAllUserRouter = require('./routes/getAllUser.router');
const checkboxRouter = require('./routes/checkbox.router');
const paidRouter = require('./routes/paid.router');
const covidRouter = require('./routes/covid.router');
const adminFlightViewRouter = require('./routes/adminFlightViewPassengers.router');
const chartRouter = require('./routes/chart.router');
const teamLeadRouter = require('./routes/teamLead.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/newUser', newUserRouter);
app.use('/api/flight_event', flightEventRouter);
app.use('/api/getAllUser', getAllUserRouter);
app.use('/api/checkbox', checkboxRouter);
app.use('/api/paid', paidRouter);
app.use('/api/covid', covidRouter);
app.use('/api/adminFlightViewPassengers', adminFlightViewRouter);
app.use('/api/chart', chartRouter);
app.use('/api/teamLead', teamLeadRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
