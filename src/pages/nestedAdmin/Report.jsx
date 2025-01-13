import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Report = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Active Users",
        data: [50, 100, 150, 200, 250, 300],
        backgroundColor: "#4caf50",
      },
      {
        label: "Registered Pharmacies",
        data: [30, 60, 90, 120, 150, 180],
        backgroundColor: "#2196f3",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <main className="flex-grow bg-gray-100 p-6">
      <div className="bg-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-bold mb-4">User and Pharmacy Statistics</h2>
        <Bar data={data} options={options} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded-md shadow-md">
          <h3 className="text-blue-900 font-bold">Total Active Users</h3>
          <p className="text-2xl font-bold">1,200</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md shadow-md">
          <h3 className="text-green-900 font-bold">Total Pharmacies</h3>
          <p className="text-2xl font-bold">800</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md shadow-md">
          <h3 className="text-yellow-900 font-bold">Pending Registrations</h3>
          <p className="text-2xl font-bold">50</p>
        </div>
      </div>
    </main>
  );
};

export default Report;
