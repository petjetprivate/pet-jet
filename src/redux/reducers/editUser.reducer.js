const editUser = (state = {}, action) => {
    console.log("editUser.reducer action.payload:", action.payload);
  
    switch (action.type) {
      case 'SET_USER':
        return action.payload;
      case 'EDIT_USER_INFO':
        return action.payload;
      case 'EDIT_FULL_NAME':
        return { ...state, full_name: action.payload };
      case 'EDIT_EMAIL':
        return { ...state, email: action.payload };
      case 'EDIT_PHONE':
        return { ...state, phone: action.payload };
      case 'EDIT_AVAIL_START':
        return { ...state, avail_start: action.payload };
      case 'EDIT_AVAIL_END':
        return { ...state, avail_end: action.payload };
      case 'EDIT_CONTINENT_ORIGIN':
        return { ...state, continent_origin: action.payload };
      default: 
        return state;
    }
  };
  export default editUser;
