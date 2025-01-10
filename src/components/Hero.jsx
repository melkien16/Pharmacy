import React from "react";
import IMG from "/images/pm1.jpg";

const Hero = () => {
  return (
    <main>
      <section className="pt-20 bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">
          Find the Best Prices and Nearby Pharmacies for Your Medications
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Search drugs, compare prices, and locate pharmacies near you!
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Enter drug name or category"
            className="w-full md:w-1/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
          />
          <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
            Search Now
          </button>
        </div>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
          Register Your Pharmacy
        </button>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900">
          Why Choose PharmaFinder?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl">
              🕒
            </div>
            <h3 className="text-lg font-bold">Real-time Drug Inventory</h3>
            <p className="text-gray-600">
              Stay updated with the latest inventory from nearby pharmacies.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl">
              💲
            </div>
            <h3 className="text-lg font-bold">Price Comparison</h3>
            <p className="text-gray-600">
              Compare prices across pharmacies to save money.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg">
            <div className="w-16 h-16 mx-auto bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl">
              📍
            </div>
            <h3 className="text-lg font-bold">Location-Based Search</h3>
            <p className="text-gray-600">
              Find the closest pharmacies with your needed medications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
