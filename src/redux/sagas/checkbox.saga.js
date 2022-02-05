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

export default function* editContractBox() {
  yield takeLatest("CONTRACT_CHECK", checkContractBox);
  yield takeLatest("CONTRACT_UNCHECK", uncheckContractBox)
};