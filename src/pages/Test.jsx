import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-blue-900 text-white fixed w-full z-10 shadow-lg">
        <div className="font-bold text-2xl">PharmaFinder</div>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="#search" className="hover:text-blue-300">
                Search
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-blue-300">
                Register Pharmacy
              </a>
            </li>
            <li>
              <a href="#login" className="hover:text-blue-300">
                Login
              </a>
            </li>
          </ul>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button className="text-white">☰</button>
          </div>
        </nav>
      </header>

      {/* Main Banner */}
      <section className="pt-20 bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900">
          Find the Best Prices and Nearby Pharmacies for Your Medications
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Search drugs, compare prices, and locate pharmacies near you!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Enter drug name or category"
            className="p-3 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700">
            Search Now
          </button>
        </div>
        <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600">
          Register Your Pharmacy
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900">
          Why Choose PharmaFinder?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg">
            <img
              src="https://via.placeholder.com/100"
              alt="Real-time Inventory"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Real-time Drug Inventory</h3>
            <p className="text-gray-600">
              Stay updated with the latest inventory from nearby pharmacies.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg">
            <img
              src="https://via.placeholder.com/100"
              alt="Price Comparison"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Price Comparison</h3>
            <p className="text-gray-600">
              Compare prices across pharmacies to save money.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg">
            <img
              src="https://via.placeholder.com/100"
              alt="Location-Based Search"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-bold">Location-Based Search</h3>
            <p className="text-gray-600">
              Find the closest pharmacies with your needed medications.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-700 pb-6">
            <div className="flex space-x-6 mb-4 md:mb-0">
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

export default HomePage;
