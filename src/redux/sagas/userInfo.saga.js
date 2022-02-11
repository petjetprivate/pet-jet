
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';




function* AddUser(action) {
  try {
    const response = yield axios({
      method: 'PUT',
      url: `/api/newUser/${action.payload.userId}`,
      data: action.payload
    })
    yield put({
      type: 'FETCH_USER'
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

function* fetchPet (action){
  
  try{
    const response = yield axios({
      method: 'GET',
      url:`/api/newUser/${action.payload}`
    })
    yield put({
      type: 'SET_PET',
      payload: response.data
    })
  }catch(err) {
    console.error('FETCH PET ERROR', err)
  }
}


function* userInfoSaga() {
  yield takeLatest('ADD_USER_INFO', AddUser);
  yield takeLatest('ADD_PET_INFO', AddPet);
  yield takeLatest('FETCH_PET_DATA', fetchPet);
}

export default userInfoSaga;