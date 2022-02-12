import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* teamLead() {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/teamLead`,
    })
    yield put({
      type: "SET_TEAM_LEAD",
      payload: response.data
    })
  } catch (error) {
    window.alert("nooo way")
  }
}

export default function* teamLeadCheckboxSaga() {
  yield takeLatest("GET_TEAM_LEAD", teamLead);
}