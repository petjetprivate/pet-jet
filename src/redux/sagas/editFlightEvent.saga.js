import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* editFlightEvent(action) {
  console.log('SUBMIT EDIT CLICK');
  console.log('editFlightEvent.saga action:', action);
  console.log('editFlightEvent.saga action.payload:', action.payload);

  
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/oneFlightEvent/${action.payload.id}`,
      data: {
        name: action.payload.name,
        dep_date: action.payload.dep_date,
        ret_date: action.payload.ret_date,
        USTeamLead: action.payload.USTeamLead,
        EUTeamLead: action.payload.EUTeamLead,
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
