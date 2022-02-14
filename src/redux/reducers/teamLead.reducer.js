const setTeamLead = (state = [], action) => {
  console.log("setTeamLead.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_TEAM_LEAD":
      return action.payload;
    default:
      return state;
  }
};

export default setTeamLead;