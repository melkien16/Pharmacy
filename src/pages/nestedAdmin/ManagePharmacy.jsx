import React from "react";

const ManagePharmacies = () => {
  const dummyPharmacies = [
    {
      id: 1,
      name: "City Health Pharmacy",
      location: "Downtown",
      contact: "123-456-7890",
      status: "Approved",
    },
    {
      id: 2,
      name: "CarePlus Pharmacy",
      location: "Uptown",
      contact: "987-654-3210",
      status: "Pending",
    },
  ];

  return (
    <main>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search pharmacies..."
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <table className="w-full bg-white rounded-md shadow">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Contact</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyPharmacies.map((pharmacy, index) => (
            <tr
              key={pharmacy.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="p-4">{pharmacy.id}</td>
              <td className="p-4">{pharmacy.name}</td>
              <td className="p-4">{pharmacy.location}</td>
              <td className="p-4">{pharmacy.contact}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    pharmacy.status === "Approved"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {pharmacy.status}
                </span>
              </td>
              <td className="p-4">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  View
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md ml-2 hover:bg-red-600">
                  Suspend
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManagePharmacies;
