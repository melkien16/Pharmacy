import React, { useState, useEffect } from "react";

const ViewInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulate fetching inventory data
  useEffect(() => {
    setInventory([
      {
        id: 1,
        name: "Paracetamol",
        category: "Painkiller",
        type: "Tablet",
        price: 50,
        stock: 100,
      },
      {
        id: 2,
        name: "Amoxicillin",
        category: "Antibiotic",
        type: "Capsule",
        price: 30,
        stock: 200,
      },
      {
        id: 3,
        name: "Vitamin C",
        category: "Vitamin",
        type: "Tablet",
        price: 20,
        stock: 150,
      },
      // Add more dummy data as needed
    ]);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="fixed top-0 w-full bg-blue-900 text-white p-5 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">PharmaFinder - Inventory</h1>
        <input
          type="text"
          placeholder="Search inventory..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <main className="mt-20 px-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Inventory List
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-3 text-left">#</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Type</th>
                  <th className="p-3 text-left">Price (ETB)</th>
                  <th className="p-3 text-left">Stock</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.length > 0 ? (
                  filteredInventory.map((item, index) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{item.name}</td>
                      <td className="p-3">{item.category}</td>
                      <td className="p-3">{item.type}</td>
                      <td className="p-3">{item.price}</td>
                      <td className="p-3">{item.stock}</td>
                      <td className="p-3">
                        <button className="text-blue-600 hover:underline mr-4">
                          Edit
                        </button>
                        <button className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="p-3 text-center text-gray-500">
                      No inventory found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full bg-blue-900 text-white text-center p-4">
        <p>&copy; 2025 PharmaFinder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ViewInventory;
