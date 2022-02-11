import React, { useEffect, useState} from "react";
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import './chart.css';
import { useDispatch, useSelector } from 'react-redux';

function flightChart() {

    const dispatch = useDispatch();
    const chart = useSelector(store => store.chart)
    const people = useSelector(store => store.user)

    // const [date, setDateState] = useState(new Date())

    // const [month, setMonthState] = useState(date.getMonth())

let months = chart.avail_start

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];

// check how many people are there in the flight
// then add that inside datasets index 0 if the month is january
// link it data to show demand in chart
//     // map through user data and bring in counters for the dates.
//     function getMonth() {
//     if (months==="feb"){
//         // map through flight data
//         // if data value has feb increment feb data
//         chart.map(v) => {
//             if(v.date ==="feb"){
//                 data.datasets[0].data[1]+= 1;
//             }else if(v.date==="Mar"){
//                 data.datasets[0].data[0]+= 1;
//             }
//     }
// };




    useEffect (() => {
        dispatch({
            type: "GET_CHARTS_INFO"
        })
    }, []);




    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "United States Flight Demand",
                data: [2, 13, 20, 9, 15, 5, 12, 17, 8, 10, 15, 7],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Europe Flight Demand",
                data: [12, 5, 10, 18, 7, 19, 6, 14, 20, 14, 8, 12 ],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (

        <div className="Chart">
            <h1>Flight Demand</h1>
            <Line data={data} />
        </div>
    )
}

export default flightChart;