import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AdminDashboard = () => {
  const { logout } = useContext(UserContext);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
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
        {/* Sidebar */}
        <aside className="bg-gray-200 shadow-md text-blue-900 w-64 py-8 px-4 hidden md:block">
          <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
          <ul className="space-y-6">
            <li>
              <a href="#manage-pharmacies" className="hover:text-blue-600">
                Manage Pharmacies
              </a>
            </li>
            <li>
              <a href="#user-management" className="hover:text-blue-600">
                User Management
              </a>
            </li>
            <li>
              <a href="#reports" className="hover:text-blue-600">
                Reports
              </a>
            </li>
            <li>
              <a href="#system-settings" className="hover:text-blue-600">
                System Settings
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8">
          {/* Statistics Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-bold text-blue-900">
                Total Pharmacies
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">+120</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-bold text-blue-900">Active Users</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">+3,450</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <h3 className="text-lg font-bold text-blue-900">
                Pending Registrations
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">8</p>
            </div>
          </section>

          {/* Quick Links Section */}
          <section className="bg-white shadow-md rounded-md p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Quick Links
            </h3>
            <div className="flex space-x-4">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                Approve Pharmacies
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                View Reports
              </button>
            </div>
          </section>

          {/* Recent Activity Section */}
          <section className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Recent Activity
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-700">
                  New Pharmacy Registration: <strong>Health Plus</strong>
                </span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">
                  User Account Created: <strong>Jane Doe</strong>
                </span>
                <span className="text-gray-500">5 hours ago</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-700">
                  Pharmacy Approved: <strong>CityCare</strong>
                </span>
                <span className="text-gray-500">1 day ago</span>
              </li>
            </ul>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 mt-auto text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
