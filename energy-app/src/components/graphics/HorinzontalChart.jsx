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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const HorizontalChart = ({ filteredData }) => {
  const labels = filteredData?.data.map((elem) => elem.datetime.split("T")[0]);
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: filteredData?.title,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Valor",
        data: filteredData?.data.map((elem) => elem.value),
        backgroundColor: "#f66c5e",
      },
      {
        label: "Porcentaje",
        data: filteredData?.data.map((elem) => elem.percentage),
        backgroundColor: "#grey",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};
