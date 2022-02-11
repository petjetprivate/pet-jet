import { combineReducers } from 'redux';

const usersInfo = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CLEAR_USER_INFO':
      return {}
    default:
      return state;
  }
};


const petInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_PET':
      return action.payload;
    case 'CLEAR_PET_INFO':
      return {}
    default:
      return state;
  }
};





  export default combineReducers({
    usersInfo,
    petInfo
  });