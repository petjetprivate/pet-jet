import React from 'react';
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import './chart.css';
import { useSelector } from 'react-redux';

// Test Chart for configuration


function flightChart() {

    // import all passengers flight dates for departure and return useSelector
    // const user = useSelector(store => store.user)
    // link it to data to show demand in chart

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Leaving US",
                data: [2, 13, 20, 9, 15, 5, 12, 17, 8, 10, 15, 7],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Leaving EU",
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