import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* adminFlightView(action) {
  console.log("adminFlightViewSaga action.payload", action.payload);
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/adminFlightViewPassengers`,
    });
    //action.payload will be req.params on the ^^ server side ^^
    // call the dispatch that GETs the shelf items
    yield put({
      type: "SET_ADMIN_FLIGHT_VIEW_PASSENGERS",
    });
  } catch (error) {
    console.log("error getting users from Client to Server", error);
  }
}

export default function* adminFlightViewSaga() {
  yield takeLatest("GET_ADMIN_FLIGHT_VIEW_PASSENGERS", adminFlightView);
}