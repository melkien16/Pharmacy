import React from "react";

const CustomerSearchPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">P2P Pharmacy</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Register Pharmacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <div className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Search for Medications
        </h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search for medications..."
            className="flex-grow border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Choose Category</option>
            <option>Analgesics</option>
            <option>Antibiotics</option>
          </select>
          <input
            type="text"
            placeholder="Set price range"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
            Search
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Search Results
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Result Card */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h4 className="text-lg font-bold">Paracetamol</h4>
            <p className="text-sm text-gray-600">Price: $10</p>
            <p className="text-sm text-gray-600">Available at: ABC Pharmacy</p>
            <p className="text-sm text-gray-600">Distance: 2km</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Pharmacy
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pharmacy Locations
          </h3>
          <div className="bg-gray-200 w-full h-64 rounded-md">
            Map Placeholder
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b border-blue-700 pb-6">
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
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-300">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-300">
                Twitter
              </a>
            </div>
          </div>
          <div className="text-center pt-6">
            <p className="text-sm">
              © P2P Pharmacy Management System. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerSearchPage;
