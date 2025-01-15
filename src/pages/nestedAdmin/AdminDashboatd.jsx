import React, { useState } from "react";
import {
  FaCogs,
  FaHome,
  FaClinicMedical,
  FaUserCog,
  FaChartBar,
  FaBell,
} from "react-icons/fa";

import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

import ManagePharmacies from "./ManagePharmacy";
import UserManagement from "./UserManagement";
import Reports from "./Report";
import AdminSetting from "./GeneralSetting";
import AdminDashboard from "./MainAdmin";

const TestAdmin = () => {
  const [selectedTab, setSelectedTab] = useState("admin");

  const sidebarItems = [
    { id: "admin", label: "Admin Dashboard", icon: <FaHome /> },
    {
      id: "managePharmacies",
      label: "Manage Pharmacies",
      icon: <FaClinicMedical />,
    },
    { id: "userManagement", label: "User Management", icon: <FaUserCog /> },
    { id: "reports", label: "Reports", icon: <FaChartBar /> },
    { id: "settings", label: "System Settings", icon: <FaCogs /> },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="fixed top-0 bottom-0 w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">
          <Link to="/">PharmaFinder</Link>
        </div>
        <nav className="flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              className={`w-full flex items-center p-4 text-left hover:bg-blue-700 ${
                selectedTab === item.id ? "bg-blue-700" : ""
              }`}
              onClick={() => setSelectedTab(item.id)}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="flex items-center justify-center p-4 bg-red-600 hover:bg-red-500">
          <IoMdLogOut className="mr-2 text-xl" />
          Logout
        </button>
      </div>

      <div className="flex-1 p-6 ml-60">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            {selectedTab === "admin" && "Admin Dashboard"}
            {selectedTab === "managePharmacies" && "Manage Pharmacies"}
            {selectedTab === "userManagement" && "User Management"}
            {selectedTab === "reports" && "Reports"}
            {selectedTab === "settings" && "System Settings"}
          </h1>
          <div className="flex items-center space-x-4">
            <FaBell className="text-2xl cursor-pointer hover:text-blue-900" />
            <img
              src="https://via.placeholder.com/40"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>
        {selectedTab === "admin" && <AdminDashboard />}

        {selectedTab === "managePharmacies" && <ManagePharmacies />}

        {selectedTab === "userManagement" && <UserManagement />}

        {selectedTab === "reports" && <Reports />}

        {selectedTab === "settings" && <AdminSetting />}
      </div>
    </div>
  );
};

export default TestAdmin;
