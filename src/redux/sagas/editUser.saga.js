import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// function* fetchOneUser(action) {
//     try {
//         const response = yield axios({
//             method: 'GET',
//             url: `/user/${action.payload}`
//         })
//         const userToEdit = response.data;
//         yield put({
//             type: 'SET_USER_TO_EDIT',
//             payload: userToEdit
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }

function* editUser(action) {
    try {
      console.log('ACTION', action);
      
      const response = yield axios({
        method: 'PUT',
        url: `/api/user/${action.payload.id}`,
        data: action.payload
      })
      console.log(response.data)
      yield put({ 
        type: 'FETCH_USER', 
        // payload: response.data
      });
    } catch(err) {
      console.error('EDIT USER ERROR', err)
    }
};

function* updateSaga() {
    // yield takeLatest('FETCH_ONE_USER', fetchOneUser);
    yield takeLatest('EDIT_USER_INFO', editUser);
}

export default updateSaga;