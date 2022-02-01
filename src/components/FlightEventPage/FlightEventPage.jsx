import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FlightEventPage() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const passengers = useSelector((store) => store.setUser)

  console.log('passengers:', passengers);

  useEffect(() => {
    dispatch({ type: "GET_FLIGHT_EVENTS" });
    dispatch({ type: "GET_ALL_USER" });
  }, []);

  const editName = (e) => {
    console.log("edit flight event name:", e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_NAME",
      payload: e.target.value,
    });
  };

  const editDepDate = (e) => {
    console.log("edit flight event departure date:", e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_DEP_DATE",
      payload: e.target.value,
    });
  };

  const editRetDate = (e) => {
    console.log("edit flight event return date:", e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_RET_DATE",
      payload: e.target.value,
    });
  };

  const editUSTeamLead = (e) => {
    console.log("edit flight event usteamlead:", e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_USTEAMLEAD",
      payload: e.target.value,
    });
  };

  const editEUTeamLead = (e) => {
    console.log("edit flight event euteamlead:", e.target.value);

    dispatch({
      type: "EDIT_FLIGHT_EVENT_EUTEAMLEAD",
      payload: e.target.value,
    });
  };

  const editFlightEvent = (e) => {
    console.log("SUBMIT CLICK");
    e.preventDefault();
    dispatch({
      type: "EDIT_FLIGHT_EVENT",
      payload: {
        name: flightToEdit.name,
        dep_date: flightToEdit.dep_date,
        ret_date: flightToEdit.ret_date,
        USTeamLead: flightToEdit.USTeamLead,
        EUTeamLead: flightToEdit.EUTeamLead,
        id: flightToEdit.id,
      },
    });
    dispatch({ type: "GET_FLIGHT_EVENTS" });
  };

  const editBtn = (e) => {
    console.log("e.target.value:", e.target.value);

    dispatch({
      type: "FETCH_ONE_FLIGHT_EVENT",
      payload: e.target.value,
    });

    // dispatch({ type: "GET_ALL_USER" });

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
                <p>Flight Departure Date: {event.dep_date}</p>
                <p>Flight Return Date: {event.ret_date}</p>
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
        <input onChange={editName} value={flightToEdit.name || ""} />
        <input onChange={editDepDate} value={flightToEdit.dep_date || ""} />
        <input onChange={editRetDate} value={flightToEdit.ret_date || ""} />
        <input
          onChange={editUSTeamLead}
          value={flightToEdit.USTeamLead || ""}
        />
        <input
          value={flightToEdit.EUTeamLead || ""}
          onChange={editEUTeamLead}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Passengers go here:</p>
      {passengers.map((passenger) => {
        return (
          <div key={passenger.id}>
          <ul>
            <li>{passenger.username}</li>
          </ul>
          </div>
        )
      })}
    </div>
  );
}

export default FlightEventPage;
