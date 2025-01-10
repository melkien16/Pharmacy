import React from "react";

const DrugDetailsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center bg-blue-900 text-white py-4 px-6 shadow-md">
        <h1 className="text-xl font-bold">P2P Pharmacy</h1>
        <nav className="space-x-6">
          <a href="/home" className="hover:text-blue-300">
            Home
          </a>
          <a href="/search" className="hover:text-blue-300">
            Search
          </a>
          <a href="/register" className="hover:text-blue-300">
            Register Pharmacy
          </a>
          <a href="/login" className="hover:text-blue-300">
            Login
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row justify-between px-6 py-8 gap-8">
        {/* Drug Information */}
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

        {/* Nearby Pharmacies */}
        <div className="lg:w-1/2">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Nearby Pharmacies
          </h3>

          {/* List of Pharmacies */}
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

          {/* Map Integration Placeholder */}
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

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#about" className="text-sm hover:text-blue-300">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-blue-300">
              Contact
            </a>
            <a href="#privacy" className="text-sm hover:text-blue-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm hover:text-blue-300">
              Terms of Service
            </a>
          </div>
          <p className="text-sm">
            © P2P Pharmacy Management System. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DrugDetailsPage;
