import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FlightEventPage.css";

function FlightEventPage() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const passengers = useSelector((store) => store.setUser);

  console.log("passengers:", passengers);
  console.log("flightEvents:", flightEvents);

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
    dispatch({ type: "CLEAR_EDIT_FLIGHT_EVENT" });
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
    // console.log('e.target.value:*********', e.target.value);
    // if (el.className === "hidden") {
    //   el.className = "block";
    // } else {
    //   el.className = "hidden";
    // }
  };

  return (
    <div className="fixTableHead">
      <div>
        <h1>Flight Event Page</h1>
        <div className="flexbox neighbors">
          {flightEvents.map((event) => {
            return (
              <div className="card" key={event.id}>
                <div className="flightEventContainer">
                  <p>
                    <img alt="pet jet lazer airliner" />
                  </p>
                  <p>Flight Name: {event.name}</p>
                  <p>Flight Departure Date: {event.dep_date}</p>
                  <p>Flight Return Date: {event.ret_date}</p>
                  <p>NA Team Lead ID: {event.USTeamLead}</p>
                  <p>EU Team Lead ID: {event.EUTeamLead}</p>
                  <button value={event.id} onClick={editBtn}>
                    EDIT
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id={flightEvents.id} className="">
        <form onSubmit={editFlightEvent}>
          <p>Edit Flight Event Form</p>
          <input
            className="input"
            onChange={editName}
            value={flightToEdit.name || ""}
          />
          <input
            className="input"
            onChange={editDepDate}
            value={flightToEdit.dep_date || ""}
          />
          <input
            className="input"
            onChange={editRetDate}
            value={flightToEdit.ret_date || ""}
          />
          <input
            className="input"
            onChange={editUSTeamLead}
            value={flightToEdit.USTeamLead || ""}
          />
          <input
            className="input"
            value={flightToEdit.EUTeamLead || ""}
            onChange={editEUTeamLead}
          />
          <button type="submit">Submit</button>
        </form>
        <p>Passengers:</p>
        <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Availability Start</th>
              <th>Availability End</th>
              <th>Flight Event</th>
              <th>Continent of Origin</th>
              <th>Contract Signed</th>
              <th>Paid</th>
              <th>COVID Ready</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger) => {
              return (
                <tr key={passenger.id}>
                  <td>{passenger.username}</td>
                  <td>{passenger.full_name}</td>
                  <td>{passenger.phone_num}</td>
                  <td>{passenger.email}</td>
                  <td>{passenger.avail_start}</td>
                  <td>{passenger.avail_end}</td>
                  <td>{passenger.flight_event_id}</td>
                  <td>
                    {passenger.continent_origin}
                  </td>
                  <td>
                    <label htmlFor="contract">
                      <input
                        type="checkbox"
                        name="contract"
                        value="signed_contract"
                      />
                    </label>
                  </td>
                  <td>
                    <input 
                      type="checkbox" 
                      name="paid" 
                      value="paid" 
                      />
                  </td>
                  <td>
                    <input 
                      type="checkbox"
                      name="covid_free"
                      value="covid_free"
                      />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default FlightEventPage;
