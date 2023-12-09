import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { data } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 relative">
      <div className="flex flex-col align-center p-2 top-[50px] left-[100px] absolute">
        <span className="text-3xl">Portfolio</span>
        <div className="p-1 mt-4 bg-slate-100 text-blue-800 font-[600] text-md rounded-[50px]">
          Settings
        </div>
      </div>
      <div className="">
        <Line options={options} data={data} />
      </div>
      <div className="absolute bottom-[140px] right-[100px] font-[600]">
        <span className="font-md text-blue-800">Our Prediction</span>
      </div>
    </div>
  );
};

export default ChartContainer;
