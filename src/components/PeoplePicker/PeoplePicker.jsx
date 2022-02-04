import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZCalendar from "../ZCalendar/ZCalendar";
import './PeoplePicker.css'

function PeoplePicker() {
const selectedDate = useSelector((store) => store.selectedDate);
    return (
        <div className="peoplePickerControl">
            <h1>{'year:',selectedDate.year}</h1>
            <h1>{'month:',selectedDate.month}</h1>
            <h1>{'day:',selectedDate.day}</h1>
        <ZCalendar/>
        </div>
    )
}

export default PeoplePicker;
