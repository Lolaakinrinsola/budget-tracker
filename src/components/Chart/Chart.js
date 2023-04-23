import React from "react";
import "./Chart.css";
import ChatBar from "./ChatBar";

const Chart = ({dataPoints}) => {
    const dataPointValues= dataPoints.map(dataPoint =>dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChatBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
