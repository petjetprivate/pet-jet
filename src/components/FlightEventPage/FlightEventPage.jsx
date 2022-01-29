import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FlightEventPage() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.setOneFlightEvent);

  useEffect(() => {
    dispatch({ type: "GET_FLIGHT_EVENTS" });
  }, []);

  const editNameChange = (e) => {
    console.log('edit flight event name:', e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_NAME",
      payload: e.target.value,
    });
  };

  const editDateChange = (e) => {
    console.log('edit flight event date:', e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_DATE",
      payload: e.target.value,
    });
  };

  const editUSTeamLead = (e) => {
    console.log('edit flight event usteamlead:', e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_USTEAMLEAD",
      payload: e.target.value,
    });
  };

  const editEUTeamLead = (e) => {
    console.log('edit flight event euteamlead:', e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_EUTEAMLEAD",
      payload: e.target.value,
    });
  };

  const editFlightEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_FLIGHT_EVENT",
      payload: {
        name:flightToEdit.name,
      },
    });
    dispatch({ type: "GET_FLIGHT_EVENTS" });
  };

  const editBtn = (e) => {
    console.log('e.target.value:', e.target.value);

    dispatch({
      type: "FETCH_ONE_FLIGHT_EVENT",
      payload: e.target.value,
    });

    // let el = document.getElementById(e.target.value);
    //   if (el.className === "hidden") {
    //     el.className = "block";
    //   } else {
    //     el.className = "hidden";
    //   }
  };

  return (
    <div>
      <div className="container">
        <p>Flight Event Page</p>
        <ul>
          {flightEvents.map((event) => {
            return (
              <li key={event.id}>
                <p>Flight Name: {event.name}</p>
                <p>Flight Date: {event.date}</p>
                <p>NA Team Lead ID: {event.USTeamLead}</p>
                <p>EU Team Lead ID: {event.EUTeamLead}</p>
                <button value={event.id} onClick={editBtn}>
                  EDIT
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={editFlightEvent}>
        <p>Edit Flight Event Form</p>
        <input 
          onChange={editNameChange}
          value={flightToEdit.name || ""}></input>
        <input 
          onChange={editDateChange}
          value={flightToEdit.date || ""}></input>
        <input 
          onChange={editUSTeamLead}
          value={flightToEdit.USTeamLead || ""}></input>
        <input 
          onChange={editEUTeamLead}
          value={flightToEdit.EUTeamLead || ""}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FlightEventPage;
