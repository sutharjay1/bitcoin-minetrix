import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const BarChart = () => {
  // Data for the bar chart
  const data = {
    labels: [
      "Sep-23",
      "Oct-23",
      "Nov-23",
      "Dec-23",
      "Jan-24",
      "Feb-24",
      "Mar-24",
      "Apr-24",
      "May-24",
      "Jun-24",
      "Jul-24",
      "Aug-24",
      "Sep-24",
      "Oct-24",
      "Nov-24",
      "Dec-24",
      "Jan-25",
      "Feb-25",
      "Mar-25",
      "Apr-25",
      "May-25",
      "Jun-25",
      "Jul-25",
      "Aug-25",
      "Sep-25",
    ],
    datasets: [
      {
        label: "Total Supply",
        data: [
          30, 45, 60, 50, 70, 55, 65, 80, 90, 85, 75, 95, 100, 110, 120, 130,
          140, 150, 160, 170, 180, 190, 200, 210, 220,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to resize based on container
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45, // Rotate labels to fit better on small screens
          minRotation: 30,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}`, // Ensure y-axis labels are readable
        },
      },
    },
  };

  return (
    <div className="w-full max-w-[100%] h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl border-[1px] border-zinc-300 p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
