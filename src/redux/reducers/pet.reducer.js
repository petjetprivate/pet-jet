const petInfo = (state = [], action) => {
  switch (action.type) {
    case 'SET_PET_INFO':
      {
        console.log('action',action)
        let prevState =[...state];
        prevState = [...prevState, action.payload];
        return prevState;
        }
    case 'CLEAR_PET_INFO':
      return {}
    default:
      return state;
  }
};

export default petInfo;