import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZCalendar from "../ZCalendar/ZCalendar";
import PassengerList from "./PassengerList";
import './PeoplePicker.css'

function PeoplePicker() {
    const selectedDate = useSelector((store) => store.selectedDate);
        return (
            <div className="peoplePickerControl">
    
            <ZCalendar/>
            <PassengerList/>
            
            </div>
        )
    }

export default PeoplePicker;
