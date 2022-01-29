const editFlightEvent = (state = {}, action) => {
  console.log("editFlightEvent.reducer action:", action);

  switch (action.type) {
    case "SET_ONE_FLIGHT_EVENT":
      return action.payload;
    case "EDIT_FLIGHT_EVENT":
      return action.payload;
    // case "EDIT_DESCRIPTION":
    //   console.log(action.payload)
    //   return {...state, description: action.payload};
    // case "EDIT_PHOTO_URl":
    //   return {...state, photo_url: action.payload};
    // case "EDIT_HAT_COLOR":
    //   return {...state, hat_color: action.payload};
    // case "EDIT_HAT_STYLE":
    //   return {...state, hat_style: action.payload};
    // case "EDIT_HAT_FABRIC":
    //   return {...state, hat_fabric: action.payload};
    // case "EDIT_HAT_VIBE":
    //   return {...state, hat_vibe: action.payload};
    default:
      return state;
  }
};

export default editFlightEvent;