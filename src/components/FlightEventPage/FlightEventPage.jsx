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
    // console.log("e.target.value:", e.target.value);

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
    <div className="fixTableHead">
      <div>
        <h1>Flight Event Page</h1>
        <div className="flexbox neighbors">
          {flightEvents.map((event) => {
            return (
              <div className="eventCard" key={event.id}>
                <div className="flightEventContainer">
                  {/* <p>
                    <img alt="pet jet lazer airliner" />
                  </p> */}
                  <p>Flight Name: {event.name}</p>
                  <p>Flight Departure Date: {event.dep_date?.split('T')[0] || ''}</p>
                  <p>Flight Return Date: {event.ret_date?.split('T')[0] || ''}</p>
                  <p>
                    NA Team Lead ID:{" "}
                    {passengers.map((lead) => {
                      if (lead.id === event.USTeamLead) {
                        return `${lead.full_name}`;
                      }
                    })}
                  </p>
                  <p>
                    EU Team Lead ID:{" "}
                    {passengers.map((lead) => {
                      if (lead.id === event.EUTeamLead) {
                        return `${lead.full_name}`;
                      }
                    })}
                  </p>
                  <button value={event.id} onClick={editBtn}>
                    EDIT
                  </button>
                  <button
                    value={event.id}
                    onClick={(e) => deleteFlightEvent(event.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <LineGraph /> */}
      {toggle && <EditForm flipToggle={flipToggle}/>}
      <UserTable />
    </div>
  );
}

export default FlightEventPage;
