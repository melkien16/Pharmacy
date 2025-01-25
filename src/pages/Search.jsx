import React, { useState, useEffect, Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sortData } from "../utils/sortData";
import { getUserLocation } from "../utils/getUserLocation";
import { haversine } from "../utils/haversine";

import { use } from "react";

const fetchPharmacyById = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/pharmacies/${id}`);
    if (!response.ok) throw new Error("Pharmacy not found");
    return await response.json();
  } catch (error) {
    console.error("Error fetching pharmacy:", error);
    return null;
  }
};

const fetchDrugs = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/drugstore");
    if (!response.ok) throw new Error("Failed to fetch drugs");
    return await response.json();
  } catch (error) {
    console.error("Error fetching drugs:", error);
    return [];
  }
};

const CustomerSearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [pharmacies, setPharmacies] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("distance");
  const [ascending, setAscending] = useState(true);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [combinedData, setCombinedData] = useState([]);

  // Fetch Drugs Data
  useEffect(() => {
    const loadDrugs = async () => {
      setLoading(true);
      const drugs = await fetchDrugs();
      setSearchResults(drugs.length > 0 ? drugs : []);
      setLoading(false);
    };
    loadDrugs();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      });

      console.log(userLocation);
    }
  }, []);

  useEffect(() => {
    const loadPharmacies = async () => {
      const newPharmacies = {};
      for (const result of searchResults) {
        if (result.pharmacyID && !newPharmacies[result.pharmacyID]) {
          const pharmacy = await fetchPharmacyById(result.pharmacyID);

          const distance = parseFloat(
            haversine(
              pharmacy.latitude,
              pharmacy.longitude,
              userLocation.latitude,
              userLocation.longitude
            )
          );
          pharmacy.distance = distance;

          if (pharmacy) newPharmacies[result.pharmacyID] = pharmacy;
        }
      }
      setPharmacies(newPharmacies);
    };
    if (searchResults.length > 0) loadPharmacies();
  }, [searchResults]);

  useEffect(() => {
    const combinedData = searchResults.map((result) => {
      return {
        ...result,
        pharmacy: pharmacies[result.pharmacyID],
      };
    });
    setCombinedData(combinedData);

    console.log(combinedData);
  }, [searchResults, pharmacies]);

  const handleSearch = () => {
    const filteredResults = searchResults.filter((item) =>
      item.drug_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedResults = sortData(filteredResults, sortKey, ascending);
    setSearchResults([...sortedResults]);
  };

  // Toggle Sort Order
  const toggleSortOrder = () => {
    setAscending(!ascending);
    const sortedResults = sortData(searchResults, sortKey, !ascending);
    setSearchResults([...sortedResults]);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedDrug(null);
    setSelectedPharmacy(null);
  };

  return (
    <Fragment>
      <Header />
      <div className="bg-gray-50 flex flex-col min-h-[80vh] mt-16 py-2">
        {/* Search Bar */}
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

        {/* Search Results */}
        <div className="px-4 sm:px-6 lg:px-8 md:w-[80%] w-full mx-auto flex-grow">
          {loading ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-700 mb-4">
                Loading...
              </h3>
            </div>
          ) : searchResults.length > 0 ? (
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
                          {result.drug_name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {result.description}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price:{" "}
                          <span className="font-medium">${result.price}</span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Available at:{" "}
                          <span className="font-medium">
                            {pharmacies[result.pharmacyID]?.name ||
                              "Loading..."}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          Rating:{" "}
                          <span className="font-medium text-yellow-500 ml-1">
                            {pharmacies[result.pharmacyID]?.rating || "N/A"} ★
                          </span>
                        </p>
                        <div className="flex space-x-4 mt-4">
                          <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
                            onClick={() => setSelectedDrug(result)}
                          >
                            View Drug Details
                          </button>
                          <button
                            className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 transition-all"
                            onClick={() =>
                              setSelectedPharmacy(pharmacies[result.pharmacyID])
                            }
                          >
                            View Pharmacy Profile
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-between h-60 w-40 rounded-lg shadow-lg overflow-hidden p-3 py-10">
                        <div>
                          <p className="text-4xl font-bold text-green-500 text-center">
                            {pharmacies[result.pharmacyID]?.distance.toFixed(
                              2
                            ) || "N/A"} <span className="text-gray-900 text-xl font-medium">km</span> 
                          </p>
                          <p className="text-sm text-center text-gray-500">
                            away
                          </p>
                        </div>
                        <div className="h-14 w-14 flex items-center justify-center bg-green-700 rounded-full text-white font-bold text-2xl cursor-pointer hover:scale-125 transition-all duration-300">
                          GO
                        </div>
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

      {/* Drug Details Modal */}
      {selectedDrug && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Drug Details
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Name:</strong> {selectedDrug.drug_name}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Catagory:</strong> {selectedDrug.category}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Type:</strong> {selectedDrug.type}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Description:</strong> {selectedDrug.description}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ${selectedDrug.price}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Availability:</strong>{" "}
              {selectedDrug.quantity > 50
                ? "In Stock"
                : selectedDrug.quantity > 0
                ? "Limited Stock"
                : "Out of Stock"}
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Pharmacy Profile Modal */}
      {selectedPharmacy && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Pharmacy Profile
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Name:</strong> {selectedPharmacy.name}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Owner:</strong> {selectedPharmacy.owner}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Rating:</strong> {selectedPharmacy.rating} ★
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Opening Time:</strong> {selectedPharmacy.openingTime}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Closing Time:</strong> {selectedPharmacy.closingTime}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Bio:</strong> {selectedPharmacy.bio}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> {selectedPharmacy.address}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Contact:</strong> {selectedPharmacy.contact}
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </Fragment>
  );
};

export default CustomerSearchPage;
