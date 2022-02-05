const checkbox = (state = {}, action) => {
  // console.log("editFlightEvent.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_CHECKBOXES":
      return action.payload;
    // case "EDIT_FLIGHT_EVENT":
    //   return action.payload;
    case "EDIT_SIGNED_CONTRACT":
      return { ...state, name: action.payload };
    case "EDIT_PAID":
      return { ...state, date: action.payload };
    case "EDIT_CONTINENT":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

export default checkbox;