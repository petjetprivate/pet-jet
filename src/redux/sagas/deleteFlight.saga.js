import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* deleteFlight(action) {
  console.log("deleteFlight action.payload", action.payload);
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/flight_event/${action.payload}`,
    });
    //action.payload will be req.params on the ^^ server side ^^
    // call the dispatch that GETs the shelf items
    yield put({
      type: "GET_FLIGHT_EVENTS",
    });
  } catch (error) {
    window.alert("You are not authorized to delete this image.");
    console.log("error deleting from Client to Server", error);
  }
}

export default function* deleteFlightSaga() {
  yield takeLatest("DELETE_FLIGHT_EVENT", deleteFlight);
}