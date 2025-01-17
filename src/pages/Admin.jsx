import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaBuilding,
  FaChartBar,
  FaCogs,
  FaBell,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">PharmaFinder</h1>
        </div>
        <nav className="flex-grow">
          <ul>
            <Link
              to="/admin/manage-pharmacies"
              className="p-4 hover:bg-blue-700 cursor-pointer flex items-center"
            >
              <FaBuilding className="mr-3" /> Manage Pharmacies
            </Link>
            <Link
              to="/admin/user-management"
              className="p-4 hover:bg-blue-700 cursor-pointer flex items-center"
            >
              <FaUserAlt className="mr-3" /> User Management
            </Link>
            <Link
              to="/admin/reports"
              className="p-4 hover:bg-blue-700 cursor-pointer flex items-center"
            >
              <FaChartBar className="mr-3" /> Reports
            </Link>
            <Link
              to="/admin/settings"
              className="p-4 hover:bg-blue-700 cursor-pointer flex items-center"
            >
              <FaCogs className="mr-3" /> System Settings
            </Link>
          </ul>
        </nav>
        <footer className="p-4 text-center border-t border-blue-700">
          <button className="flex items-center justify-center w-full text-white hover:text-gray-300">
            <IoMdLogOut className="mr-2" /> Logout
          </button>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-gray-700 font-semibold">Total Pharmacies</h3>
            <p className="text-3xl font-bold text-blue-900">120</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-gray-700 font-semibold">Active Users</h3>
            <p className="text-3xl font-bold text-green-500">45</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-md">
            <h3 className="text-gray-700 font-semibold">
              Pending Registrations
            </h3>
            <p className="text-3xl font-bold text-yellow-500">5</p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white shadow-md p-4 rounded-md mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Quick Links
          </h3>
          <div className="flex space-x-4">
            <Link
              to="/admin/approval"
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Approve Pharmacies
            </Link>
            <Link
              to="/admin/feedback"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              View Feedback
            </Link>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-2 text-left">Pharmacy</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-2 border-b">PharmaOne</td>
                <td className="p-2 border-b">2025-01-11</td>
                <td className="p-2 border-b text-green-500">Approved</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-2 border-b">HealthCare Inc.</td>
                <td className="p-2 border-b">2025-01-10</td>
                <td className="p-2 border-b text-yellow-500">Pending</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-2 border-b">MediPharm</td>
                <td className="p-2 border-b">2025-01-09</td>
                <td className="p-2 border-b text-red-500">Rejected</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Admin;
