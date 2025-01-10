import React from "react";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Join the Platform to Manage Your Pharmacy in Real-Time
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Register your pharmacy to update drug inventory, share prices, and
          help customers find the medications they need.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="pharmacy-name"
              className="block text-gray-700 font-bold mb-2"
            >
              Pharmacy Name
            </label>
            <input
              type="text"
              id="pharmacy-name"
              placeholder="Enter pharmacy name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="owner-name"
              className="block text-gray-700 font-bold mb-2"
            >
              Pharmacy Owner’s Name
            </label>
            <input
              type="text"
              id="owner-name"
              placeholder="Enter owner’s name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Pharmacy Address/Location
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter pharmacy address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter contact number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="registration-number"
              className="block text-gray-700 font-bold mb-2"
            >
              Business Registration Number (Optional)
            </label>
            <input
              type="text"
              id="registration-number"
              placeholder="Enter registration number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Register Pharmacy
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-700 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
