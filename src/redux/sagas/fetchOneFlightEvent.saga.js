import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchOneFlightEvent(action) {
  console.log('****************************');
  
  console.log('fetchOneFlightEvent.saga action.payload:', action.payload);

  try {
    const response = yield axios({
      method: "GET",
      url: `/api/flight_event/${action.payload}`,
    });
    yield put({
      type: "SET_ONE_FLIGHT_EVENT",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error in GET from server:", error);
  }
}

export default function* fetchOneFlightSaga() {
  yield takeLatest("FETCH_ONE_FLIGHT_EVENT", fetchOneFlightEvent);
}