import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* teamLeadCovidBox(action) {
  // console.log('covidbox.saga action.payload.covid_free:', action.payload.covid_free);

  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/covid/${action.payload.id}`,
      data: {
        covid_free: action.payload.covid_free
      }
    })
    yield put({
      type: "GET_ADMIN_FLIGHT_VIEW_PASSENGERS",
    })
  } catch (error) {
    window.alert("nooo way")
  }
}

function* teamLeadPaidBox(action) {
  console.log('paidbox.saga action.payload.paid:', action.payload.paid);

  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/paid/${action.payload.id}`,
      data: {
        covid_free: action.payload.paid
      }
    })
    yield put({
      type: "GET_ADMIN_FLIGHT_VIEW_PASSENGERS",
    })
  } catch (error) {
    window.alert("nooo way")
  }
}

export default function* teamLeadCheckboxSaga() {
  yield takeLatest("LEAD_COVID_CHECK", teamLeadCovidBox);
  yield takeLatest("LEAD_PAID_CHECK", teamLeadPaidBox);
}