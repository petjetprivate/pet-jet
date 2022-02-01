import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAllUser() {
console.log('getAllUser:');


  try {
    const response = yield axios({
      method: 'GET',
      url:'/api/getAllUser',
    })
    yield put({
      type: 'SET_ALL_USER',
      payload: response.data
    })
  } catch(error) {
    console.log('error getting ALL USER from server', error);
  }
}

function* getAllUserSaga() {
  yield takeLatest('GET_ALL_USER', getAllUser)
}
export default getAllUserSaga;