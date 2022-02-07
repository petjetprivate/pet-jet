import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserTable() {
  const dispatch = useDispatch();
  const flightEvents = useSelector((store) => store.setFlightEvents);
  const flightToEdit = useSelector((store) => store.editFlightEvent);
  const passengers = useSelector((store) => store.setUser);

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
          id: e.target.id,
        },
      });
    } else if (e.target.checked) {
      dispatch({
        type: "CONTRACT_CHECK",
        payload: {
          signed_contract: e.target.value,
          id: e.target.id,
        },
      });
    }
  };

  const paidBox = (e) => {
    console.log("e.target.value:", e.target.value);
    console.log("e.target.checked:", e.target.checked);
    if (!e.target.checked) {
      dispatch({
        type: "PAID_UNCHECK",
        payload: {
          paid: e.target.value,
          id: e.target.id,
        },
      });
    } else if (e.target.checked) {
      dispatch({
        type: "PAID_CHECK",
        payload: {
          paid: e.target.value,
          id: e.target.id,
        },
      });
    }
  };

  const covidBox = (e) => {
    console.log("covidBox:", e.target.value);
    console.log(typeof e.target.value);
    // const covidReady = e.target.value;

    if (e.target.checked) {
      dispatch({
        type: "COVID_CHECK",
        payload: {
          covid_free: false,
          id: e.target.id,
        },
      });
    } else {
      dispatch({
        type: "COVID_CHECK",
        payload: {
          covid_free: true,
          id: e.target.id,
        },
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
                  <label htmlFor="paid">
                    <input
                      checked={passenger.paid}
                      autoComplete="off"
                      id={passenger.id}
                      onChange={paidBox}
                      type="checkbox"
                      name="paid"
                      value={passenger.paid}
                    />
                  </label>
                </td>
                <td>
                  <label htmlFor="covid">
                    <input
                      checked={passenger.covid_free}
                      autoComplete="off"
                      id={passenger.id}
                      onChange={covidBox}
                      type="checkbox"
                      name="covid"
                      value={passenger.covid_free}
                    />
                  </label>
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
