import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ViewAnalysis = () => {
  const { logout } = useContext(UserContext);

  // Dummy data for analysis (replace with real data from API or database)
  const salesData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [
          500, 700, 800, 1200, 1500, 1100, 900, 950, 1300, 1600, 1800, 2000,
        ],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const popularDrugs = [
    { id: 1, name: "Paracetamol", inquiries: 120 },
    { id: 2, name: "Ibuprofen", inquiries: 95 },
    { id: 3, name: "Amoxicillin", inquiries: 80 },
    { id: 4, name: "Vitamin C", inquiries: 75 },
    { id: 5, name: "Cough Syrup", inquiries: 60 },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full flex bg-blue-900 items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-gray-100 text-blue-900 px-4 py-2 rounded-md hover:bg-gray-300"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="pt-20 p-6 flex-grow">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          View Analysis
        </h1>

        {/* Sales Trends */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Sales Trends
          </h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <Line data={salesData} />
          </div>
        </section>

        {/* Popular Drugs */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Most Popular Drugs
          </h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <table className="min-w-full text-left text-gray-800">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">ID</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Customer Inquiries</th>
                </tr>
              </thead>
              <tbody>
                {popularDrugs.map((drug) => (
                  <tr key={drug.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">{drug.id}</td>
                    <td className="px-4 py-2 border-b">{drug.name}</td>
                    <td className="px-4 py-2 border-b">{drug.inquiries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Other Analytics */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Other Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Total Sales
              </h3>
              <p className="text-2xl font-bold text-blue-900">$15,300</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Total Customer Inquiries
              </h3>
              <p className="text-2xl font-bold text-blue-900">450</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Average Order Value
              </h3>
              <p className="text-2xl font-bold text-blue-900">$35</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 mt-auto text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ViewAnalysis;
