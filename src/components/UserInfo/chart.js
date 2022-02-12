import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import './chart.css';
import { useDispatch, useSelector } from 'react-redux';



const initialData = {
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
            data: [12, 5, 10, 18, 7, 19, 6, 14, 20, 14, 8, 12],
            fill: false,
            borderColor: "#742774"
        }
    ]
};






function flightChart() {

    const chart = useSelector(store => store.setChart)
    const [data, setData] = useState(initialData)
    const people = useSelector(store => store.user)
    const [loading, setLoading] = useState(true)
    const[change,setChange] = useState(false)

    function getDates() {
        
        setData(prev=>{
             let prevData = JSON.parse(JSON.stringify(prev))
            prevData.datasets[0].data = chart.dataForUs;
            prevData.datasets[1].data = chart.dataForEu;

            return prevData;
        })
        setLoading(false)
        // setData(prev=>{
        //     let prevData = {...data};
        //     prevData.datasets[0].data = chart.dataForUs
        //     return prev;
        // })
    };

    useEffect(() => {
        getDates();
    }, [loading])

    if (loading) return <div>loading</div>;
    console.log("chartdata", data)







    return (

        <div className="Chart">
            <h1>Flight Demand</h1>
            <Line data={data} />
            {/* <button onClick={()=>setChange(prev=>!prev)}>test</button> */}
        </div>
    )
}

export default flightChart;