import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

const ManageInventory = () => {
  const { logout, user } = useContext(UserContext);
  const [inventory, setInventory] = useState([]);

  const handleUpdate = (id, field, value) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  useEffect(() => {
    const response = axios
      .get(`http://localhost:5000/api/drugstore/${user.id}`)
      .then((response) => {
        console.log(response.data);
        setInventory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.id]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddDrug = (e) => {
    e.preventDefault();
    const id = inventory.length + 1;
    setInventory([...inventory, { id, ...newDrug }]);
    setNewDrug({ name: "", category: "", price: "", availability: "In Stock" });
  };

  const handleSubmit = (e, item) => {
    e.preventDefault();

    const updatedDrug = {
      price: parseFloat(item.price),
      quantity: parseInt(item.quantity),
    };

    console.log(updatedDrug);

    axios
      .put(`http://localhost:5000/api/drugstore/${item.id}`, updatedDrug)
      .then((response) => {
        console.log("Drug updated successfully:", response.data);
        alert("Drug updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating drug:", error);
        alert("An error occurred while updating the drug.");
      });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="flex bg-blue-900 items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-gray-100 text-blue-900 px-4 py-2 rounded-md hover:bg-gray-300"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Manage Inventory</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a drug..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <table className="w-full bg-white shadow-md rounded-md overflow-hidden">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price (ETB)</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory
              .filter((drug) =>
                drug.drug_name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-4 py-2 border-b">{item.id}</td>
                  <td className="px-4 py-2 border-b">{item.drug_name}</td>
                  <td className="px-4 py-2 border-b">{item.category}</td>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="number"
                      className="w-20 border rounded-md p-1 focus:ring-2 focus:ring-blue-500"
                      value={item.price}
                      onChange={(e) =>
                        handleUpdate(
                          item.id,
                          "price",
                          parseFloat(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="number"
                      className="w-20 border rounded-md p-1 focus:ring-2 focus:ring-blue-500"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdate(
                          item.id,
                          "quantity",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    {item.quantity === 0 ? (
                      <span className="text-red-500 font-bold">
                        Out of Stock
                      </span>
                    ) : item.quantity < 20 ? (
                      <span className="text-yellow-300 font-bold">
                        Low Stock
                      </span>
                    ) : item.quantity >= 20 ? (
                      <span className="text-green-500 font-bold">In Stock</span>
                    ) : (
                      <span className="text-red-500 font-bold">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                      onClick={(e) => handleSubmit(e, item)}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>

      <footer className="bg-blue-900 text-white p-4 mt-auto text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ManageInventory;
