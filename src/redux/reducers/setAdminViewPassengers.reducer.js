const setAdminView = (state = [], action) => {
  console.log("setAdminViewPassengers.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_ADMIN_FLIGHT_VIEW_PASSENGERS":
      return action.payload;
    default:
      return state;
  }
};

export default setAdminView;