import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* editFlightEvent() {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/hat/${action.payload.id}`,
      data: {
        name: action.payload.name,
      },
    });
    yield put({
      type: "GET_FLIGHT_EVENTS",
    });
  } catch (error) {
    window.alert("noooooooooooo");
  }
}

export default function* editFlightEventSaga() {
  yield takeLatest("EDIT_FLIGHT_EVENT", editFlightEvent);
}
