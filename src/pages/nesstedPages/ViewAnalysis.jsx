import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const ViewAnalysis = () => {
  const { logout } = useContext(UserContext);

  const [analyticsData, setAnalyticsData] = useState({
    totalSales: 2000,
    topDrugs: [
      { drug: "Aspirin", sales: 500 },
      { drug: "Ibuprofen", sales: 350 },
      { drug: "Paracetamol", sales: 200 },
      { drug: "Cough Syrup", sales: 150 },
    ],
    customerInquiries: 50,
  });

  useEffect(() => {
    // Fetch real-time data here
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="fixed top-0 w-full bg-blue-900 p-4 shadow-md flex justify-between items-center z-10">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-gray-100 text-blue-900 px-4 py-2 rounded-md hover:bg-gray-300"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          View Analytics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Total Sales
            </h2>
            <div className="text-3xl font-bold text-blue-900">
              ${analyticsData.totalSales}
            </div>
            <p className="text-gray-500 mt-2">
              Total sales in the current period.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Customer Inquiries
            </h2>
            <div className="text-3xl font-bold text-blue-900">
              {analyticsData.customerInquiries}
            </div>
            <p className="text-gray-500 mt-2">Number of inquiries this week.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Top Drugs by Sales
            </h2>
            <ul className="space-y-2">
              {analyticsData.topDrugs.map((drug, index) => (
                <li
                  key={index}
                  className="flex justify-between text-lg text-gray-700"
                >
                  <span className="font-semibold">{drug.drug}</span>
                  <span>{drug.sales} units sold</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            Drug Search Trends
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">150</div>
              <p className="text-gray-500 mt-2">
                Searches for Aspirin this week
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">100</div>
              <p className="text-gray-500 mt-2">
                Searches for Ibuprofen this week
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white p-4 text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ViewAnalysis;
