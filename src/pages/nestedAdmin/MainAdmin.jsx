import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import ApprovalPage from "./ApprovePage";
import FeedbackPage from "./FeedbackPage";

const Admin = () => {
  const [isSelect, setIsSelect] = useState("admin");
  const Items = [
    { id: "admin", label: "Admin Dashboard" },
    { id: "approval", label: "Approve Pharmacies" },
    { id: "feedback", label: "View Feedback" },
  ];

  return (
    <div className="flex-grow p-6">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-xl font-bold">
          {isSelect === "admin" && "Admin Dashboard"}
          {isSelect === "approval" && "Approve Pharmacies"}
          {isSelect === "feedback" && "View Feedback"}
        </h2>
        <div className="flex items-center space-x-4">
          <FaBell className="text-blue-900 text-xl cursor-pointer" />
          <img
            src="https://via.placeholder.com/40"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border"
          />
        </div>
      </header>

      {/* Stats Overview */}
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
          <h3 className="text-gray-700 font-semibold">Pending Registrations</h3>
          <p className="text-3xl font-bold text-yellow-500">5</p>
        </div>
      </section>

      {isSelect === "admin" && (
        <main>
          <section className="bg-white shadow-md p-4 rounded-md mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h3>
            <div className="flex space-x-4">
              <button

                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsSelect("approval")}
              >
                Approve Pharmacies
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                onClick={() => setIsSelect("feedback")}
              >
                View Feedback
              </button>
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
      )}
      {isSelect === "approval" && <ApprovalPage />}
      {isSelect === "feedback" && <FeedbackPage />}
    </div>
  );
};

export default Admin;
