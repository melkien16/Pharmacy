import React, { useState, Fragment, useRef } from "react";

const DummyData = [
  {
    id: 1,
    drugName: "Paracetamol",
    drugDescription:
      "Paracetamol is commonly used to treat fever and mild to moderate pain.",
    pharmacyName: "ABC Pharmacy",
    pharmacyDescription:
      "ABC Pharmacy is known for its wide range of affordable medications.",
    price: 10,
    availability: "In Stock",
    distance: "2 km",
    rating: 4.5,
  },
  {
    id: 2,
    drugName: "Ibuprofen",
    drugDescription:
      "Ibuprofen helps reduce inflammation, pain, and fever effectively.",
    pharmacyName: "HealthPlus Pharmacy",
    pharmacyDescription:
      "HealthPlus Pharmacy provides premium healthcare products and services.",
    price: 15,
    availability: "Limited Stock",
    distance: "1.5 km",
    rating: 4.0,
  },
  {
    id: 3,
    drugName: "Amoxicillin",
    drugDescription:
      "Amoxicillin is an antibiotic used to treat various bacterial infections.",
    pharmacyName: "CityCare Pharmacy",
    pharmacyDescription:
      "CityCare Pharmacy offers reliable pharmacy services with fast delivery.",
    price: 20,
    availability: "Out of Stock",
    distance: "3.2 km",
    rating: 3.8,
  },
  {
    id: 4,
    drugName: "Cough Syrup",
    drugDescription:
      "Cough syrup provides relief from cough and throat irritation.",
    pharmacyName: "Wellness Pharmacy",
    pharmacyDescription:
      "Wellness Pharmacy specializes in holistic health products and services.",
    price: 12,
    availability: "In Stock",
    distance: "0.8 km",
    rating: 4.7,
  },
  {
    id: 5,
    drugName: "Vitamin C",
    drugDescription:
      "Vitamin C supplements boost immunity and improve overall health.",
    pharmacyName: "Healthy Life Pharmacy",
    pharmacyDescription:
      "Healthy Life Pharmacy offers a variety of vitamins and supplements.",
    price: 8,
    availability: "In Stock",
    distance: "2.5 km",
    rating: 4.2,
  },
];

const sortData = (data, key, ascending = true) => {
  return data.sort((a, b) => {
    let valueA = key === "distance" ? parseFloat(a[key]) : a[key];
    let valueB = key === "distance" ? parseFloat(b[key]) : b[key];

    if (ascending) {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
};

const CustomerSearchPage = () => {
  const [searchResults, setSearchResults] = useState(DummyData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("distance");
  const [ascending, setAscending] = useState(true);

  const handleSearch = () => {
    const filteredResults = DummyData.filter((item) =>
      item.drugName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedResults = sortData(filteredResults, sortKey, ascending);
    setSearchResults([...sortedResults]);
  };

  const toggleSortOrder = () => {
    setAscending(!ascending);
    const sortedResults = sortData(searchResults, sortKey, !ascending);
    setSearchResults([...sortedResults]);
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-[80vh] mt-16 py-2">
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 w-[50%] max-w-[80%] mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Search for Medications
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by drug name"
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSortKey(e.target.value)}
            value={sortKey}
          >
            <option value="distance">Distance</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          <button
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleSortOrder}
          >
            {ascending ? "↑" : "↓"}
          </button>
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition-all"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 md:w-[80%] w-full mx-auto flex-grow">
        {searchResults.length > 0 ? (
          <Fragment>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Search Results
            </h3>
            <div className="flex flex-col space-y-6">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 hover:shadow-lg transition-shadow w-full"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-lg font-bold text-gray-800">
                        {result.drugName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {result.drugDescription}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price:{" "}
                        <span className="font-medium">${result.price}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Available at:{" "}
                        <span className="font-medium">
                          {result.pharmacyName}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Rating:{" "}
                        <span className="font-medium text-yellow-500 ml-1">
                          {result.rating} ★
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col items-center space-y-2 shadow-lg bg-gray-200 p-8 rounded-lg">
                      <p className="font-bold text-gray-800 text-2xl">
                        {result.distance}
                      </p>
                      <p className="text-center">away</p>
                    </div>
                  </div>
                </div>
              ))}
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
