
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* AddUser(action) {
  try {
    console.log('action**************** ',action.payload)
    const response = yield axios({
      method: 'PUT',
      url: `/api/newUser/${action.payload.userId}`,
      data: action.payload
    })
    console.log("lets see",action.payload);
  } catch(err) {
    console.error('ADD ERROR', err)
  }
};


// function* fetchUsers(action) {
//   try {
//     console.log('action',action)
//     const response = yield axios({
//       method: 'GET',
//       url: '/api/userInfo',
//     })
//     console.log('*****************', response.data)
//   } catch(err) {
//     console.error('ADD error', err)
//   }
// };


function* userInfoSaga() {
  yield takeLatest('ADD_USER_INFO', AddUser);
  
}

export default userInfoSaga;