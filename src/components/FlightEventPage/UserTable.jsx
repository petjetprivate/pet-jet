import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserTable() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const passengers = useSelector((store) => store.setUser);
  const [contract, setContract] = useState("")

  useEffect(() => {
    dispatch({ type: "GET_ALL_USER" });
  }, []);

  const contractBox = (e) => {
    console.log("e.target.value:", e.target.value);
    console.log("e.target.checked:", e.target.checked);
    if (!e.target.checked) {
      dispatch({
        type: "CONTRACT_UNCHECK",
        payload: {
          signed_contract: e.target.value,
          id: e.target.id
        }
      });
    } else if (e.target.checked) {
      dispatch({
        type: "CONTRACT_CHECK",
        payload: {
          signed_contract: e.target.value,
          id: e.target.id
        }
      });
    }
  };

  return (
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
                <td>{passenger.continent_origin}</td>
                <td>
                  <label htmlFor="contract">
                    <input
                      checked={passenger.signed_contract}
                      autoComplete="off"
                      id={passenger.id}
                      onChange={contractBox}
                      type="checkbox"
                      name="contract"
                      value={passenger.signed_contract}
                    />
                  </label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="paid"
                    // value="paid"
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    name="covid_free"
                    // value="covid_free"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
