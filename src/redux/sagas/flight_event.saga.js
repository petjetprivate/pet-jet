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

function* createFlightEvent(action) {
  console.log('createFlightEvent:');
  let actionPlusPostResponse = {action: action,}
  
    try {
      
      const postResponse = yield axios({
        method: 'POST',
        url:'/api/flight_event',
        data:action.payload
      })
      console.log('THIS IS THE RESPONSE FROM THE SERVER: ',postResponse.data)
      actionPlusPostResponse.postResponse = postResponse.data
      const putResponse = yield axios({
        method: "PUT",
        url: `/api/flight_event`,
        data: {
          actionPlusPostResponse: actionPlusPostResponse
        }
      })
      // dispatch({
      //   type: 'GET_FLIGHT_EVENTS',
      // }) 

    } catch(error) {
      console.log('error making a flight event', error);
    }
  }










function* flightEventSaga() {
  yield takeLatest('GET_FLIGHT_EVENTS', getFlightEvents)
  yield takeLatest('CREATE_FLIGHT_EVENT', createFlightEvent)
}
export default flightEventSaga;