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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LinearChart({ filteredData }) {
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
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Porcentaje",
        data: filteredData?.data.map((elem) => elem.percentage),
        backgroundColor: "#grey",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
