
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* AddUser(action) {
  try {
    const response = yield axios({
      method: 'PUT',
      url: `/api/newUser/${action.payload.userId}`,
      data: action.payload
    })
  } catch(err) {
    console.error('ADD ERROR', err)
  }
};

function* AddPet(action) {
  try {
    console.log('action**************** ',action.payload)
    const response = yield axios({
      method: 'POST',
      url: '/api/newUser',
      data: action.payload
    })
    console.log("lets see",action.payload);
  } catch(err) {
    console.error('ADD ERROR', err)
  }
};


function* userInfoSaga() {
  yield takeLatest('ADD_USER_INFO', AddUser);
  yield takeLatest('ADD_PET_INFO', AddPet);
}

export default userInfoSaga;