const editFlightEvent = (state = {}, action) => {
  // console.log("editFlightEvent.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_ONE_FLIGHT_EVENT":
      return action.payload;
    case "EDIT_FLIGHT_EVENT":
      return action.payload;
    case "EDIT_FLIGHT_EVENT_NAME":
      return { ...state, name: action.payload };
    case "EDIT_FLIGHT_EVENT_DEP_DATE":
      return { ...state, date: action.payload };
    case "EDIT_FLIGHT_EVENT_RET_DATE":
      return { ...state, date: action.payload };
    case "EDIT_FLIGHT_EVENT_USTEAMLEAD":
      return { ...state, USTeamLead: action.payload };
    case "EDIT_FLIGHT_EVENT_EUTEAMLEAD":
      return { ...state, EUTeamLead: action.payload };
    case "CLEAR_EDIT_FLIGHT_EVENT":
      return {};
    default:
      return state;
  }
};

export default editFlightEvent;
