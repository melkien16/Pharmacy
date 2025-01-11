import React, { useState } from "react";

const AddDrug = () => {
  const [drugName, setDrugName] = useState("");
  const [drugCategory, setDrugCategory] = useState("");
  const [drugPrice, setDrugPrice] = useState("");
  const [drugStock, setDrugStock] = useState("");
  const [drugDescription, setDrugDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const drugData = {
      name: drugName,
      category: drugCategory,
      price: drugPrice,
      stock: drugStock,
      description: drugDescription,
    };
    console.log(drugData); // You can replace this with an API call to save the data
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-gray-100 text-blue-900 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-6 sm:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Drug
        </h1>

        {/* Form Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto space-y-6">
          {/* Section 1: Drug Name and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="drugName"
                className="block text-gray-600 font-semibold"
              >
                Drug Name
              </label>
              <input
                type="text"
                id="drugName"
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
                className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter drug name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="drugCategory"
                className="block text-gray-600 font-semibold"
              >
                Category
              </label>
              <select
                id="drugCategory"
                value={drugCategory}
                onChange={(e) => setDrugCategory(e.target.value)}
                className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select category</option>
                <option value="Antibiotic">Antibiotic</option>
                <option value="Painkiller">Painkiller</option>
                <option value="Vitamins">Vitamins</option>
                <option value="Antacid">Antacid</option>
                {/* Add more categories as necessary */}
              </select>
            </div>
          </div>

          {/* Section 2: Price, Stock, and Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="drugPrice"
                className="block text-gray-600 font-semibold"
              >
                Price
              </label>
              <input
                type="number"
                id="drugPrice"
                value={drugPrice}
                onChange={(e) => setDrugPrice(e.target.value)}
                className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
                required
              />
            </div>

            <div>
              <label
                htmlFor="drugStock"
                className="block text-gray-600 font-semibold"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                id="drugStock"
                value={drugStock}
                onChange={(e) => setDrugStock(e.target.value)}
                className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter stock quantity"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="drugDescription"
              className="block text-gray-600 font-semibold"
            >
              Description
            </label>
            <textarea
              id="drugDescription"
              value={drugDescription}
              onChange={(e) => setDrugDescription(e.target.value)}
              className="mt-2 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter drug description"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Drug
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 mt-2 text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AddDrug;
