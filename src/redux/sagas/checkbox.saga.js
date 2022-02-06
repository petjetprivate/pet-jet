import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* checkContractBox(action) {
  console.log('checkContractBox action.payload.id:', action.payload.id);
  
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/checkbox/${action.payload.id}`,
      data: {
        signed_contract: false
      },
    });
    yield put({
      type: "GET_ALL_USER",
    });
  } catch (error) {
    window.alert("noooooooooooo");
  }
};

function* uncheckContractBox(action) {
  console.log('uncheckcontractbox:', action.payload.id);
  
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/checkbox/${action.payload.id}`,
      data: {
        signed_contract: true
      },
    });
    yield put({
      type: "GET_ALL_USER",
    });
  } catch (error) {
    window.alert("noooooooooooo");
  }
}

function* checkPaidBox(action) {
  console.log('checkPaidBox action.payload.id:', action.payload.id);
  
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/paid/${action.payload.id}`,
      data: {
        paid: false
      },
    });
    yield put({
      type: "GET_ALL_USER",
    });
  } catch (error) {
    window.alert("noooooooooooo");
  }
};

function* uncheckPaidBox(action) {
  console.log('uncheckPaidbox:', action.payload.id);
  
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/paid/${action.payload.id}`,
      data: {
        paid: true
      },
    });
    yield put({
      type: "GET_ALL_USER",
    });
  } catch (error) {
    window.alert("noooooooooooo");
  }
}

function* covidBox(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/covid/${action.payload.id}`,
      data: {
        covid_free: `${action.payload.covid_free}`
      }
    })
    yield put({
      type: "GET_ALL_USER",
    })
  } catch (error) {
    window.alert("nooo way")
  }
}

export default function* editContractBox() {
  yield takeLatest("CONTRACT_CHECK", checkContractBox);
  yield takeLatest("CONTRACT_UNCHECK", uncheckContractBox)
  yield takeLatest("PAID_CHECK", checkPaidBox);
  yield takeLatest("PAID_UNCHECK", uncheckPaidBox);
  yield takeLatest("COVID_CHECK", covidBox);
};