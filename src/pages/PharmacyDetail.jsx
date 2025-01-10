import React from "react";

const PharmacyDetails = () => {
  const pharmacy = {
    name: "ABC Pharmacy",
    address: "123 Main St, CityName",
    contact: "+123456789",
    operatingHours: "8:00 AM - 9:00 PM",
    categories: ["Analgesics", "Antibiotics", "Vitamins"],
    drugs: [
      { name: "Paracetamol", price: "$10" },
      { name: "Ibuprofen", price: "$15" },
      { name: "Amoxicillin", price: "$20" },
    ],
    rating: 4.2,
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "bg-green-500";
    if (rating >= 3.5) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10 pt-20">
      <div className="bg-white shadow-md rounded-md p-6 mb-6 mt-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">{pharmacy.name}</h1>
          <div
            className={`text-white px-4 py-1 rounded-full ${getRatingColor(
              pharmacy.rating
            )}`}
          >
            {pharmacy.rating} ⭐
          </div>
        </div>
        <p className="text-gray-600 mt-2">{pharmacy.address}</p>
        <p className="text-gray-600">Contact: {pharmacy.contact}</p>
        <p className="text-gray-600">
          Operating Hours: {pharmacy.operatingHours}
        </p>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Drug Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {pharmacy.categories.map((category, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Drugs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pharmacy.drugs.map((drug, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {drug.name}
              </h3>
              <p className="text-gray-600">Price: {drug.price}</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600">
          Search Drugs in This Pharmacy
        </button>
        <button className="bg-gray-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-600">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default PharmacyDetails;
