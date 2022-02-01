import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './ZCalendar.css'

function ZCalendar() {

    const [month, setMonth] = useState(0)

    const date = new Date();

    // const month = date.getMonth();

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const nextDaysAmount = 7 - lastDayIndex - 1

    console.log('++++++++++++++++++++')
    console.log(firstDayIndex)

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

    const days = []

    const prevDays = []

    const nextDays = []

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
        date.setMonth(date.getMonth() - 1)
        console.log(date)
    }

    function setNextMonth(){
        date.setMonth(date.getMonth() + 1)
        console.log(date)
    }
    

    console.log("########################");
    console.log(date);
    console.log(month);
    console.log(days);
    console.log(lastDay);
    
    return (
        <div class="container">
            <div class="calendar">
                <div className="month">
                    <i className="fas fa-angle-left prev" onClick={()=>setPrevMonth()}></i>
                    <div class="date">
                        <h1>{months[date.getMonth()]}</h1>
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
