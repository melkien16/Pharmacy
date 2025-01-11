import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const ManageInventory = () => {
  const { logout } = useContext(UserContext);

  // Update handler for price and quantity
  const handleUpdate = (id, field, value) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Dummy data for inventory (replace with real data from API or database)
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Paracetamol",
      category: "Analgesic",
      price: 10,
      quantity: 100,
    },
    {
      id: 2,
      name: "Ibuprofen",
      category: "Anti-inflammatory",
      price: 15,
      quantity: 50,
    },
    {
      id: 3,
      name: "Amoxicillin",
      category: "Antibiotic",
      price: 20,
      quantity: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newDrug, setNewDrug] = useState({
    name: "",
    category: "",
    price: "",
    availability: "In Stock",
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle adding a new drug
  const handleAddDrug = (e) => {
    e.preventDefault();
    const id = inventory.length + 1;
    setInventory([...inventory, { id, ...newDrug }]);
    setNewDrug({ name: "", category: "", price: "", availability: "In Stock" });
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
              <th className="p-4 text-left">Price ($)</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory
              .filter((drug) =>
                drug.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-4 py-2 border-b">{item.id}</td>
                  <td className="px-4 py-2 border-b">{item.name}</td>
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
                    ) : (
                      <span className="text-green-500 font-bold">In Stock</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                      onClick={() => alert(`Updated ${item.name}`)}
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
