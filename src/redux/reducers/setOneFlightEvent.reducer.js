const setOneFlightEvent = (state = {}, action) => {
  // console.log("setOneFlightEvent.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_ONE_FLIGHT_EVENT":
      return action.payload;
    default:
      return state;
  }
};

export default setOneFlightEvent;