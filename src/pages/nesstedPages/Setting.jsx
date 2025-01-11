import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const Setting = () => {
  const { logout } = useContext(UserContext);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-gray-100 text-blue-900 px-4 py-2 rounded-md hover:bg-gray-300"
          onClick={logout}
        >
          Logout
        </button>
      </header>
      <main className="mt-20">
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Account Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Change Password</span>
                <button className="text-blue-600 hover:underline">
                  Change
                </button>
              </div>
              <input
                type="password"
                placeholder="New Password"
                className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-4 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Send Comment</span>
              </div>
              <textarea
                placeholder="Write your feedback or comment here"
                className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
              <button className="mt-4 text-blue-600 hover:underline">
                Send Comment
              </button>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Delete Account</span>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                This action is irreversible. Please be sure before proceeding.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed w-full bottom-0 bg-blue-900 text-white p-4 mt-8 text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Setting;
