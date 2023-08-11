import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ filteredData }) => {
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
        backgroundColor: "#78bb7b",
      },
      {
        label: "Porcentaje",
        data: filteredData?.data.map((elem) => elem.percentage),
        backgroundColor: "#72cbeb",
      },
    ],
  };

  return <Pie data={data} options={options} />;
};
