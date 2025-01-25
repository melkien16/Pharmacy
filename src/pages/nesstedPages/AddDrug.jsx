import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

const AddDrug = () => {
  const { user } = useContext(UserContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    drug_name: "",
    category: "",
    type: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    // Handle image change logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      drug_name: formData.drug_name,
      category: formData.category,
      description: formData.description,
      price: parseFloat(formData.price),
      type: formData.type,
      quantity: parseInt(formData.stock),
      pharmacyID: parseInt(user.id),
    };

    setIsLoaded(false);
    axios
      .post("http://localhost:5000/api/drugstore", data)
      .then((response) => {
        setIsLoaded(true);
        console.log("Drug added successfully:", response.data);
        setFormData({
          drug_name: "",
          category: "",
          type: "",
          price: "",
          stock: "",
          description: "",
        });
      })
      .catch((error) => console.error("Error adding drug:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex justify-between items-center text-white shadow-lg">
        <h1 className="text-2xl font-bold">PharmaFinder - Add Drug</h1>
        <p className="text-sm">Logged in as: {user?.name || "Admin"}</p>
      </header>

      <div className="mt-20 h-20">
        {isLoaded && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 w-full">
            <p>Drug added successfully!</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 w-full">
            <p>Error adding drug: {error.message}</p>
          </div>
        )}
      </div>

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
              value={formData.drug_name}
              name="drug_name"
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
            disabled={isLoaded}
            className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-800"
          >
            Add Drug
          </button>
          {error && <p style={{ color: "red" }}>{error.message}</p>}
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
