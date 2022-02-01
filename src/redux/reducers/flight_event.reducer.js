const setFlightEvents = (state = [], action) => {
  console.log(action)
        switch (action.type) {
            case 'SET_FLIGHT_EVENTS':
              return action.payload;
            default:
              return state;

    }
}

export default setFlightEvents;