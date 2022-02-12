import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
// import newUser from './newUser.reducer';
import userInfo from './userInfo.reducer';
import editUser from './editUser.reducer';
import setFlightEvents from './flight_event.reducer';
import setOneFlightEvent from './setOneFlightEvent.reducer';
import editFlightEvent from './editFlightEvent.reducer';
import setUser from './getAllUser.reducer';
import selectedDate from './admin.selectedDate.reducer';
import setChart from './chart.reducers';
import petInfo from './userInfo.reducer';
import setAdminView from './setAdminViewPassengers.reducer';
import setTeamLead from './teamLead.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  // newUser,
  userInfo,
  editUser,
  setFlightEvents,
  setOneFlightEvent,
  editFlightEvent,
  setUser,
  selectedDate,
  petInfo,
  setAdminView,
  setChart,
  setTeamLead
});

export default rootReducer;
