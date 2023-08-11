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

export function VerticalBarChart({ filteredData }) {
  const labels = filteredData?.data.map((elem) => elem.datetime.split("T")[0]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: filteredData?.title,
      },
    },
  };
  console.log(labels);
  console.log(filteredData);

  const data = {
    labels,
    datasets: [
      {
        label: "Valor",
        data: filteredData?.data.map((elem) => elem.value),
        backgroundColor: "#6870fa",
      },
      {
        label: "Porcentaje",
        data: filteredData?.data.map((elem) => elem.percentage),
        backgroundColor: "#grey",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
