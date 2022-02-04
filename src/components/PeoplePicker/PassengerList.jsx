import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function PassengerList() {
    const dispatch = useDispatch();
    const passengers = useSelector((store) => store.setUser);
    const selectedDate = useSelector((store) => store.selectedDate);

    useEffect(() => {
        dispatch({ type: "GET_ALL_USER" });
    }, []);


    console.log(new Date (passengers[11].avail_start))
    return (
        <div className="passengerList">
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
    )
}

export default PassengerList;