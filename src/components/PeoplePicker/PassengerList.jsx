import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './PeoplePicker.css'
let selectedLeads = []
let selectedPassengers = []

function PassengerList() {
    const [flightName, setFlightName] = useState('');
    const date = new Date();
    const dispatch = useDispatch();
    const passengers = useSelector((store) => store.setUser);
    const rawSelectedDate = useSelector((store) => store.selectedDate);
    // console.log('########################################')
    // console.log(rawSelectedDate)
    const selectedDate = new Date (rawSelectedDate.year, rawSelectedDate.month, rawSelectedDate.day, 0, 0, 0, 0).toString()
    // console.log(selectedDate)

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
        // console.log(dates)
        return dates;
    };

    function selectPassenger(passenger){
        selectedPassengers.push(passenger)
        // console.log(selectedPassengers)
    }

    function selectLead(passenger){
        console.log('click worked')
        if (selectedLeads.length < 2){
            for (let lead of selectedLeads){
                if (lead.continent_origin === passenger.continent_origin){
                    return(alert('That regions lead has already been selected'))
                    
                }
            }
            selectedLeads.push(passenger)
            console.log('THESE ARE THE SELECTED LEADS',selectedLeads)
        }

    }

    function SubmitGroups(){
        console.log('These are the selected leads for the flight event',selectedLeads)
        dispatch({
            type: 'CREATE_FLIGHT_EVENT',
            payload: {
                group: selectedPassengers,
                name: flightName,
                leads: selectedLeads
            }
        })
        setFlightName('')
    }


    // console.log(new Date (passengers[11].avail_start))
    return (
        <div className="passengerList">
            <p>Passengers:</p>
            <input type="text" value={flightName} onChange={(e) => setFlightName(e.target.value)}/>
            <button type="button" onClick={() => SubmitGroups()}>
                submit groups
            </button>
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
                // console.log('')
                // console.log(selectedDate)
                // console.log('')
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
                            <input
                                onClick={() => selectPassenger(passenger)}
                                type="checkbox"
                                name="group"
                                value="selected"
                            />
                        </td>
                        <td>
                            <input 
                            onClick={() => selectLead(passenger)}
                            type="checkbox" 
                            name="team_lead" 
                            value="lead" 
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