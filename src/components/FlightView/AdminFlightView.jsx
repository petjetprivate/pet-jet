import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminFlightView() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const passengers = useSelector((store) => store.setAdminView);
console.log('passengers:', passengers);
  useEffect(() => {
    dispatch({ 
      type: "GET_ADMIN_FLIGHT_VIEW_PASSENGERS",
    });
  }, []);

  const contractBox = (e) => {
    console.log("contractBox:", e.target.value);
    // console.log(typeof e.target.value);
    // const covidReady = e.target.value;

    if (e.target.checked) {
      dispatch({
        type: "LEAD_CONTRACT_CHECK",
        payload: {
          signed_contract: false,
          id: e.target.id,
        },
      });
    } else {
      dispatch({
        type: "LEAD_CONTRACT_CHECK",
        payload: {
          signed_contract: true,
          id: e.target.id,
        },
      });
    }
  };

  const paidBox = (e) => {
    // console.log("covidBox:", e.target.value);
    // console.log(typeof e.target.value);
    // const covidReady = e.target.value;

    if (e.target.checked) {
      dispatch({
        type: "LEAD_PAID_CHECK",
        payload: {
          paid: false,
          id: e.target.id,
        },
      });
    } else {
      dispatch({
        type: "LEAD_PAID_CHECK",
        payload: {
          paid: true,
          id: e.target.id,
        },
      });
    }
  };

  const covidBox = (e) => {
    // console.log("covidBox:", e.target.value);
    // console.log(typeof e.target.value);
    // const covidReady = e.target.value;

    if (e.target.checked) {
      dispatch({
        type: "LEAD_COVID_CHECK",
        payload: {
          covid_free: false,
          id: e.target.id,
        },
      });
    } else {
      dispatch({
        type: "LEAD_COVID_CHECK",
        payload: {
          covid_free: true,
          id: e.target.id,
        },
      });
    }
  };

  return (
    // <h1>goat</h1>
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
                <td>{passenger.avail_start.split("T")[0]}</td>
                <td>{passenger.avail_end.split("T")[0]}</td>
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
export default AdminFlightView;
