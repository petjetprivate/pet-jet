import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditFlightForm.jsx";
import UserTable from "./UserTable.jsx";
import "./FlightEventPage.css";

function FlightEventPage() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const passengers = useSelector((store) => store.setUser);
  const [toggle, setToggle] = useState(false);

  console.log("passengers:", passengers);
  console.log("flightEvents:", flightEvents);

  useEffect(() => {
    dispatch({ type: "GET_FLIGHT_EVENTS" });
    dispatch({ type: "GET_ALL_USER" });
  }, []);

  const flipToggle = () => {
    setToggle(!toggle);
  }
  const editBtn = (e) => {
    setToggle(!toggle);

    dispatch({
      type: "FETCH_ONE_FLIGHT_EVENT",
      payload: e.target.value,
    });
  };

  const deleteFlightEvent = (id) => {
    dispatch({
      type: "DELETE_FLIGHT_EVENT",
      payload: id,
    });
    dispatch({ type: "GET_FLIGHT_EVENTS" });
  };

  return (
    <div className="row">
    <div>
      <div>
        {/* <h1>Flight Event Page</h1> */}
        <div className="flexbox">
          {flightEvents.map((event) => {
            return (
              <div className="eventCard" key={event.id}>
                <div className="flightEventContainer">
                  <h1>{event.name}</h1>
                  <ul className="list">
                  <li>Departure: {event.dep_date?.split('T')[0] || ''}</li>
                  <li>Return: {event.ret_date?.split('T')[0] || ''}</li>
                  <li>
                    US Lead:{" "}
                    {passengers.map((lead) => {
                      if (lead.id === event.USTeamLead) {
                        return `${lead.full_name}`;
                      }
                    })}
                  </li>
                  <li>
                    EU Lead:{" "}
                    {passengers.map((lead) => {
                      if (lead.id === event.EUTeamLead) {
                        return `${lead.full_name}`;
                      }
                    })}
                  </li>
                  <li>
                  <button 
                    className="flightEventBtn edit"
                    value={event.id} 
                    onClick={editBtn}>
                    EDIT
                  </button>
                  <button
                    className="flightEventBtn delete"
                    value={event.id}
                    onClick={(e) => deleteFlightEvent(event.id)}
                  >
                    DELETE
                  </button></li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="editForm">
      {toggle && <EditForm flipToggle={flipToggle}/>}
      </div>
      </div>
      <div className="table">
      <UserTable />
      </div>
    </div>
  );
}

export default FlightEventPage;
