// ApprovalPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaBuilding, FaChartBar, FaCogs } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const ApprovalPage = () => {
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: "PharmaOne", location: "Addis Ababa", status: "Pending" },
    {
      id: 2,
      name: "HealthCare Inc.",
      location: "Dire Dawa",
      status: "Pending",
    },
    { id: 3, name: "MediPharm", location: "Hawassa", status: "Pending" },
  ]);

  const handleAction = (id, action) => {
    setPharmacies((prev) =>
      prev.map((pharmacy) =>
        pharmacy.id === id
          ? {
              ...pharmacy,
              status: action === "approve" ? "Approved" : "Rejected",
            }
          : pharmacy
      )
    );
  };

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
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-6">
          <h2 className="text-xl font-bold">Approve Pharmacies</h2>
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Pharmacies Table */}
        <section className="bg-white shadow-md p-6 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Pending Pharmacy Approvals
          </h3>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4">Pharmacy Name</th>
                <th className="p-4">Location</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pharmacies.map((pharmacy) => (
                <tr key={pharmacy.id} className="hover:bg-gray-100">
                  <td className="p-4 border-b">{pharmacy.name}</td>
                  <td className="p-4 border-b">{pharmacy.location}</td>
                  <td
                    className={`p-4 border-b font-bold ${
                      pharmacy.status === "Approved"
                        ? "text-green-500"
                        : pharmacy.status === "Rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {pharmacy.status}
                  </td>
                  <td className="p-4 border-b">
                    {pharmacy.status === "Pending" && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAction(pharmacy.id, "approve")}
                          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(pharmacy.id, "reject")}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ApprovalPage;
