import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getFlightEvents() {
console.log('getFlightEvents:');


  try {
    const response = yield axios({
      method: 'GET',
      url:'/api/flight_event',
    })
    yield put({
      type: 'SET_FLIGHT_EVENTS',
      payload: response.data
    })
  } catch(error) {
    console.log('error getting flight events from server', error);
  }
}

function* flightEventSaga() {
  yield takeLatest('GET_FLIGHT_EVENTS', getFlightEvents)
}
export default flightEventSaga;