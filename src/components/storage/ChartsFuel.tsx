import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useRefuelingContext } from "../../store/RefuelingContext";

const ChartsFuel = () => {
  const { tankStatus } = useRefuelingContext();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Fuel Present in the Tanks",
      },
    },
  };

  const labels = tankStatus.map((e) => e.type);

  const data = {
    labels,
    datasets: [
      {
        label: "Litres",
        data: tankStatus.map((e) => e.fuelPresent),
        backgroundColor: [
          "rgb(7, 237, 19)",
          "rgb(60, 66, 61)",
          "rgb(71, 142, 255)",
          "rgb(194, 2, 178)",
        ],
      },
    ],
  };
  return (
    <Bar
      data={data}
      style={{ minHeight: "350px" }}
      options={options}
      updateMode={"show"}
    />
  );
};
export default ChartsFuel;
