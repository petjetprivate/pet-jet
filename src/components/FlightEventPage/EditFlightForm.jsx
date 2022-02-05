import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditForm() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const checkboxes = useSelector((store) => store.checkboxes)

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

return (
<div id={flightEvents.id} className="">
        <form onSubmit={editFlightEvent}>
          <p>Edit Flight Event Form</p>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className="input"
            onChange={editName}
            value={flightToEdit.name || ""}
          />
          <label htmlFor="departure">Departure</label>
          <input
            name="departure"
            className="input"
            onChange={editDepDate}
            value={flightToEdit.dep_date || ""}
          />
          <label htmlFor="return">Return</label>
          <input
            name="return"
            className="input"
            onChange={editRetDate}
            value={flightToEdit.ret_date || ""}
          />
          <label htmlFor="naLead">NA Team Lead</label>
          <input
            name="naLead"
            className="input"
            onChange={editUSTeamLead}
            value={flightToEdit.USTeamLead || ""}
          />
          <label htmlFor="euLead">EU Team Lead</label>
          <input
            name="euLead"
            className="input"
            value={flightToEdit.EUTeamLead || ""}
            onChange={editEUTeamLead}
          />
          <button type="submit">Submit</button>
        </form>
        </div>
)};

export default EditForm;