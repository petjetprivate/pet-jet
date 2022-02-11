import React, { useEffect, useState} from "react";
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import './chart.css';
import { useDispatch, useSelector } from 'react-redux';

// Test Chart for configuration


function flightChart() {

    const dispatch = useDispatch();
    const chart = useSelector(store => store.chart)

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
                data: [33, 53, 85, 41, 44, 65, 23, 56, 75, 60, 38, 49],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Europe Flight Demand",
                data: [33, 25, 45, 51, 54, 76, 33, 65, 40, 64, 70, 80 ],
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