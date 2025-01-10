import React, { useState, Fragment } from "react";

const CustomerSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
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

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow">
        {searchResults.length > 0 ? (
          <Fragment>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Search Results
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-bold">{result.name}</h4>
                  <p className="text-sm text-gray-600">
                    Price: ${result.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    Available at: {result.pharmacyName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Distance: {result.distance}km
                  </p>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    View Pharmacy
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Pharmacy Locations
              </h3>
              <div className="bg-gray-200 w-full h-64 rounded-md">
                Map Placeholder
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              No search results found
            </h3>
            <p className="text-gray-500">
              Try searching with different keywords or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerSearchPage;
