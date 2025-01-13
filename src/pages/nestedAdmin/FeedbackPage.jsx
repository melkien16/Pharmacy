import React from "react";
import { FaBell } from "react-icons/fa";

const ViewFeedbacks = () => {
  return (
    <main className="flex-grow p-6">
      <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-xl font-bold">Feedback Management</h2>
        <div className="flex items-center space-x-4">
          <FaBell className="text-blue-900 text-xl cursor-pointer" />
          <img
            src="https://via.placeholder.com/40"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border"
          />
        </div>
      </header>

      {/* Feedback Table */}
      <section className="bg-white shadow-md p-4 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Received Feedback
        </h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-2 text-left">Sender</th>
              <th className="p-2 text-left">Feedback</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="p-2 border-b">PharmaOne</td>
              <td className="p-2 border-b">
                Great service, but prices are inconsistent.
              </td>
              <td className="p-2 border-b">2025-01-10</td>
              <td className="p-2 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-700">
                  Reply
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700">
                  Warn
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-2 border-b">HealthCare Inc.</td>
              <td className="p-2 border-b">
                Delayed drug delivery noted last week.
              </td>
              <td className="p-2 border-b">2025-01-09</td>
              <td className="p-2 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-700">
                  Reply
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700">
                  Warn
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="p-2 border-b">MediPharm</td>
              <td className="p-2 border-b">
                Appreciate the fast response to queries!
              </td>
              <td className="p-2 border-b">2025-01-08</td>
              <td className="p-2 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-700">
                  Reply
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700">
                  Warn
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Send Feedback Section */}
      <section className="bg-white shadow-md p-4 rounded-md mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Send Feedback or Warning
        </h3>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Recipient
            </label>
            <input
              type="text"
              placeholder="Enter Pharmacy or User Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Enter your feedback or warning"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default ViewFeedbacks;
