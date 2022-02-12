import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* adminFlightView(action) {
  console.log("adminFlightViewSaga action.payload", action.payload);
  try {
    const response = yield axios({
      method: "GET",
      url: '/api/adminFlightViewPassengers',
    });
    yield put({
      type: "SET_ADMIN_FLIGHT_VIEW_PASSENGERS",
      payload: response.data
    });
  } catch (error) {
    console.log("error getting users from Client to Server", error);
  }
}

export default function* adminFlightViewSaga() {
  yield takeLatest("GET_ADMIN_FLIGHT_VIEW_PASSENGERS", adminFlightView);
}