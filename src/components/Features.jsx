import React from "react";

const Features = () => {
  return (
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
  );
};

export default Features;
