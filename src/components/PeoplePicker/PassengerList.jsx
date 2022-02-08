import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './PeoplePicker.css'


function PassengerList() {
        const date = new Date();
    const dispatch = useDispatch();
    const passengers = useSelector((store) => store.setUser);
    const rawSelectedDate = useSelector((store) => store.selectedDate);
    console.log('########################################')
    console.log(rawSelectedDate)
    const selectedDate = new Date (rawSelectedDate.year, rawSelectedDate.month, rawSelectedDate.day, 0, 0, 0, 0).toString()
    console.log(selectedDate)


    const getDatesBetween = (startDate, endDate) => {
        const dates = [];
    
        // Strip hours minutes seconds etc.
        let currentDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );
    
        while (currentDate <= endDate) {
            dates.push(currentDate.toString());
    
            currentDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + 1, // Will increase month if over range
            );
        }
        console.log(dates)
        return dates;
    };



    // console.log(new Date (passengers[11].avail_start))
    return (
        <div className="passengerList">
            <p>Passengers:</p>
        <div>
        <table className="passengerTable">
        <thead>
            <tr>
            <th>Username</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Available Start</th>
            <th>Available End</th>
            <th>Continent of Origin</th>
            <th>Selected for Group</th>
            <th>Region Team Lead</th>
            </tr>
        </thead>
        <tbody>
            {passengers.map((passenger) => {
                const start = new Date (passenger.avail_start)
                const end = new Date (passenger.avail_end)
                const dates = getDatesBetween(start, end)
                console.log('')
                console.log(selectedDate)
                console.log('')
                    if (dates.includes(selectedDate)){
                        return (
                        <tr key={passenger.id}>
                        <td>{passenger.username}</td>
                        <td>{passenger.full_name}</td>
                        <td>{passenger.phone_num}</td>
                        <td>{passenger.email}</td>
                        <td>{passenger.avail_start.split('T')[0]}</td>
                        <td>{passenger.avail_end.split('T')[0]}</td>
                        <td>{passenger.continent_origin}</td>
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
                        </tr>
                    )
                    return(<div></div>)
                }
            })}
        </tbody>
        </table>
        </div>
        </div>
    )
}

export default PassengerList;