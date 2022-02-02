import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './ZCalendar.css'

function ZCalendar() {

    const [date, setDateState] = useState(new Date())
    // const date = new Date();

    const [month, setMonthState] = useState(date.getMonth())
    // const month = date.getMonth();

    // const [lastDay, setLastDayState] = useState(new Date(date.getFullYear(), date.getMonth() + month, 0).getDate())
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()


    // const [firstDayIndex, setFirstDayIndexState] = useState(date.getDay())
    const firstDayIndex = date.getDay();

    // const [lastDayIndex, setLastDayIndexState] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay())
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    // const [prevLastDay, setPrevLastDayState] = useState(new Date(date.getFullYear(), date.getMonth(), 0).getDate())
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const nextDaysAmount = 7 - lastDayIndex - 1

    console.log('++++++++++++++++++++')
    console.log(date.getFullYear(), date.getMonth() + month, 0);
    // console.log(lastDayIndex);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const [days, setDaysState] = useState([])
    // const days = []

    const [prevDays, setPrevDaysState] = useState([])
    // const prevDays = []

    const [nextDays, setNextDaysState] = useState([])
    // const nextDays = []

    for(let x = firstDayIndex; x > 0; x--){
        prevDays.push(prevLastDay - x + 1)
    }

    for (let i = 1; i <= lastDay; i++){
        days.push(i)
    }

    for (let j = 1; j <= nextDaysAmount; j++){
        nextDays.push(j)
    }

    function setPrevMonth(){
        
        console.log('THIS IS THE ORIGINAL MONTH', months[month])
        setMonthState(month - 1),
        date.setMonth(month - 1)
        setDaysState([]),
        setPrevDaysState([]),
        setNextDaysState([]),
        // setLastDayState(new Date(date.getFullYear(), date.getMonth() + month - 1, 0).getDate())
        
        console.log('THIS IS THE SUBTRACTED MONTH', months[month - 1])
    }

    function setNextMonth(){
        console.log('THIS IS THE ORIGINAL MONTH', months[month])
        setMonthState(month + 1),
        date.setMonth(month + 1)
        setDaysState([]),
        setPrevDaysState([]),
        setNextDaysState([]),
        // setLastDayState(new Date(date.getFullYear(), date.getMonth() + month - 1, 0).getDate())
        
        console.log('THIS IS THE ADDED MONTH MONTH', months[month + 1])
    }
    

    // console.log("########################");
    // console.log(date);
    // console.log(month);
    // console.log(days);
    // console.log(lastDay);
    
    return (
        <div class="container">
            <div class="calendar">
                <div className="month">
                    <i className="fas fa-angle-left prev" onClick={()=>setPrevMonth()}></i>
                    <div class="date">
                        <h1>{months[month]}</h1>
                        <p>{date.toDateString()}</p>
                    </div>
                    <i className="fas fa-angle-right next" onClick={()=>setNextMonth()}></i>
                </div>
                <div className="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div class="days">
                    {prevDays.map(prevDate =>{
                        return (<div class="prev-date">{prevDate}</div>)
                    })}

                    {days.map(day =>{
                        if (day === new Date().getDate() && date.getMonth() === new Date().getMonth()){
                            return (<div class="today">{day}</div>)
                        }
                        // console.log(day)
                        return (<div>{day}</div>)
                        
                    })}

                    {nextDays.map(nextDate =>{
                        return (<div class="next-date">{nextDate}</div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ZCalendar;
