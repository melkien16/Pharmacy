import React from "react";

const DrugDetailsPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col mt-16">
      <main className="flex flex-col lg:flex-row justify-between px-6 py-8 gap-8">
        <div className="lg:w-1/2 flex flex-col items-start bg-white shadow-md p-6 rounded-md">
          <h2 className="text-3xl font-bold text-gray-800">
            Paracetamol 500mg
          </h2>
          <img
            src="https://via.placeholder.com/300"
            alt="Paracetamol"
            className="mt-4 mb-6 rounded-md w-full h-60 object-cover"
          />
          <p className="text-lg text-gray-700">
            Price: <span className="text-green-600 font-bold">$10</span>
          </p>
          <p className="text-gray-600 mt-4">
            Paracetamol is used for relieving pain and reducing fever. It is one
            of the most commonly used over-the-counter medications.
          </p>
          <p className="text-gray-800 font-medium mt-4">
            Available in 3 pharmacies near you.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md shadow-md">
            Buy Now
          </button>
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Nearby Pharmacies
          </h3>

          <div className="space-y-4">
            <div className="bg-white shadow-md p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">HealthPlus Pharmacy</p>
                <p className="text-sm text-gray-600">
                  123 Main St, 0.5 miles away
                </p>
                <p className="text-green-600 font-medium">$10</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
                View Details
              </button>
            </div>

            <div className="bg-white shadow-md p-4 rounded-md flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">CityCare Pharmacy</p>
                <p className="text-sm text-gray-600">
                  456 Elm St, 1.2 miles away
                </p>
                <p className="text-green-600 font-medium">$12</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
                View Details
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Pharmacy Locations
            </h3>
            <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Map integration goes here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DrugDetailsPage;
