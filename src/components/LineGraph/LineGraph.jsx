import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

function LineGraph() {
  const [chartData, setChartData] = useState({});

  const chart = () => {

    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "level of thiccness",
          data: [32, 45, 69, 14, 30],
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)"
          ],
          borderWidth: 4
        },
      ],
    });
  };

  useEffect(() => {
    chart()
  }, []);

  return (
    <div>
      <h1>LINE GRAPH</h1>
      <Line data={chartData} />
    </div>
  );
}

export default LineGraph;
