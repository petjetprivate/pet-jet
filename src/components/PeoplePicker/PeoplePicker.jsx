import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZCalendar from "../ZCalendar/ZCalendar";
import './PeoplePicker.css'

function PeoplePicker() {
    
    return (
        <div class="peoplePickerControl">
        <ZCalendar/>
        </div>
    )
}

export default PeoplePicker;
