
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
    yield put({
      type: 'SET_PET_INFO',
      payload: action.payload,
    })
   
  } catch(err) {
    console.error('ADD ERROR', err)
  }
};

function* fetchPets(action) {
  try {
    console.log('action',action)
    const response = yield axios({
      method: 'GET',
      url: '/api/newUser',
    })
    console.log(response.data)
    yield put({
      type: 'SET_PET_INFO',
      payload: response.data
    })
  } catch(err) {
    console.error('ADD error', err)
  }
};


function* userInfoSaga() {
  yield takeLatest('ADD_USER_INFO', AddUser);
  yield takeLatest('ADD_PET_INFO', AddPet);
  yield takeLatest('GET_PET_INFO', fetchPets);
}

export default userInfoSaga;