const setUser = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case "SET_ALL_USER":
      return action.payload;
    default:
      return state;
  }
};

export default setUser;
