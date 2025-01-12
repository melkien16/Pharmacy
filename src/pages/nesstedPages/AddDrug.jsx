import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const AddDrug = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    drugName: "",
    category: "",
    type: "",
    price: "",
    stock: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Drug data submitted:", formData);
    // Add logic to submit the form data
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex justify-between items-center text-white shadow-lg">
        <h1 className="text-2xl font-bold">PharmaFinder - Add Drug</h1>
        <p className="text-sm">Logged in as: {user?.name || "Admin"}</p>
      </header>

      <main className="mt-20 mb-10 w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Drug
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Drug Name
            </label>
            <input
              type="text"
              name="drugName"
              value={formData.drugName}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-gray-50"
              placeholder="Enter drug name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-gray-50"
              required
            >
              <option value="">Select a category</option>
              <option value="Antibiotics">Antibiotics</option>
              <option value="Painkillers">Painkillers</option>
              <option value="Vitamins">Vitamins</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-gray-50"
              placeholder="e.g., Tablet, Syrup, Capsule"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-gray-50"
              placeholder="Enter price (e.g., 50.00)"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-gray-50"
              placeholder="Enter stock quantity"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-md bg-gray-50"
              rows="4"
              placeholder="Enter a brief description of the drug"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-md bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-800"
          >
            Add Drug
          </button>
        </form>
      </main>

      <footer className="fixed bottom-0 w-full bg-blue-900 text-white p-4 text-center">
        <p className="text-sm">
          &copy; 2025 PharmaFinder. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AddDrug;
