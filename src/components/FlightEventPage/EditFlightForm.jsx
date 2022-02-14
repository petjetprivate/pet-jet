import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EditFlightForm.css";

function EditForm({ flipToggle }) {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const passengers = useSelector((store) => store.setUser);

  // const [depDate, setDeptDate] = useState(flightToEdit.dep_date);
  // console.log('depDate:', depDate);

  const editName = (e) => {
    dispatch({
      type: "EDIT_FLIGHT_EVENT_NAME",
      payload: e.target.value,
    });
  };

  // const changeDepDate = (e) => {
  //   setDeptDate(e.target.value)
  // }

  const editDepDate = (e) => {
    console.log("e.target.value:", e.target.value);
    dispatch({
      type: "EDIT_FLIGHT_EVENT_DEP_DATE",
      payload: e.target.value,
    });
  };

  const editRetDate = (e) => {
    dispatch({
      type: "EDIT_FLIGHT_EVENT_RET_DATE",
      payload: e.target.value,
    });
  };

  const editUSTeamLead = (e) => {
    dispatch({
      type: "EDIT_FLIGHT_EVENT_USTEAMLEAD",
      payload: e.target.value,
    });
  };

  const editEUTeamLead = (e) => {
    dispatch({
      type: "EDIT_FLIGHT_EVENT_EUTEAMLEAD",
      payload: e.target.value,
    });
  };

  const editFlightEvent = (e) => {
    console.log("EDIT FLIGHT SUBMIT CLICK");
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
    flipToggle();
    dispatch({ type: "CLEAR_EDIT_FLIGHT_EVENT" });
    dispatch({ type: "GET_FLIGHT_EVENTS" });
  };

  return (
    <div>
      <div className="onThisFlight">
        <h1>Passengers On This Flight</h1>
        <ul className="flightList">
          {passengers.map((flyer) => {
            if (flyer.flight_event_id === flightToEdit.id)
              return <li key={flyer.id}>{flyer.full_name}</li>;
          })}
        </ul>
      </div>
      <form className="editFlightForm" onSubmit={editFlightEvent}>
        <h1>Edit Flight Event Form</h1>
        <label htmlFor="name">
          Name
          <input
            name="name"
            className="input"
            onChange={editName}
            value={flightToEdit.name || ""}
          />
        </label>
        <label htmlFor="departure">
          Departure
          <input
            name="departure"
            type="date"
            className="input"
            onChange={editDepDate}
            value={flightToEdit.dep_date || ""}
          />
        </label>
        <label htmlFor="return">
          Return
          <input
            name="return"
            type="date"
            className="input"
            onChange={editRetDate}
            value={flightToEdit.ret_date || ""}
          />
        </label>
        <div className="dropdown">
          <select onChange={editUSTeamLead} value={flightToEdit.USTeamLead}>
            {passengers.map((flyer) => {
              if (
                flyer.flight_event_id === flightToEdit.id &&
                flyer.continent_origin === "US"
              ) {
                return (
                  <option key={flyer.id} value={flyer.id}>
                    {flyer.full_name}
                  </option>
                );
              }
            })}
          </select>
          <label htmlFor="naLead">NA Team Lead</label>
        </div>
        <div className="dropdown">
          <select onChange={editEUTeamLead} value={flightToEdit.EUTeamLead}>
            {passengers.map((flyer) => {
              if (
                flyer.flight_event_id === flightToEdit.id &&
                flyer.continent_origin === "EU"
              ) {
                return (
                  <option key={flyer.id} value={flyer.id}>
                    {flyer.full_name}
                  </option>
                );
              }
            })}
          </select>
          <label htmlFor="euLead">EU Team Lead</label>
        </div>
        <button className="btn btn_sizeSm" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditForm;
