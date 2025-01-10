import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const PharmacyDashboard = () => {
  const { logout } = useContext(UserContext);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="flex bg-blue-900 items-center justify-between p-4 shadow-md">
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

      <div className="flex flex-1">
        <aside className="bg-gray-200 shadow-md text-blue-900 w-64 py-8 px-4 hidden lg:block">
          <h2 className="text-2xl font-bold mb-8">Pharmacy Dashboard</h2>
          <ul className="space-y-6">
            <li>
              <a href="#inventory" className="hover:text-blue-600">
                Manage Inventory
              </a>
            </li>
            <li>
              <a href="#analytics" className="hover:text-blue-600">
                View Analytics
              </a>
            </li>
            <li>
              <a href="#settings" className="hover:text-blue-600">
                Settings
              </a>
            </li>
          </ul>
        </aside>

        <main className="flex-1 bg-gray-50 p-8">
          <header className="flex justify-between items-center pb-4 border-b border-gray-300">
            <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
            <button className="lg:hidden bg-blue-900 text-white px-4 py-2 rounded-md">
              Menu
            </button>
          </header>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-semibold">Total Drugs Listed</h3>
              <p className="text-2xl font-bold text-blue-900">120</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-semibold">Total Sales</h3>
              <p className="text-2xl font-bold text-blue-900">$4,500</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-semibold">Customer Inquiries</h3>
              <p className="text-2xl font-bold text-blue-900">5</p>
            </div>
          </section>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-blue-900 text-white shadow-md rounded-md p-6 text-center hover:bg-blue-700">
              Add New Drug
            </button>
            <button className="bg-blue-900 text-white shadow-md rounded-md p-6 text-center hover:bg-blue-700">
              View Inventory
            </button>
            <button className="bg-blue-900 text-white shadow-md rounded-md p-6 text-center hover:bg-blue-700">
              Edit Profile
            </button>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="bg-white shadow-md rounded-md p-6">
              <p className="text-sm text-gray-600">
                You have 5 new customer inquiries this week.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="border-b border-gray-200 pb-2">
                  Inquiry from John Doe about Paracetamol
                </li>
                <li className="border-b border-gray-200 pb-2">
                  Updated stock for Ibuprofen
                </li>
                <li>Inquiry from Jane Smith about Aspirin</li>
              </ul>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-blue-900 text-white p-4 mt-auto text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default PharmacyDashboard;
