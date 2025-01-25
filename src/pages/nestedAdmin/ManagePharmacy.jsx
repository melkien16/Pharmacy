import React, { useEffect, useState } from "react";
import axios from "axios";

const ManagePharmacies = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSuspension = (e, pharmacy) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/pharmacies/${pharmacy.id}/ban`, {
      ban: !pharmacy.ban,
    });

    const updatedPharmacies = pharmacies.map((p) =>
      p.id === pharmacy.id ? { ...p, ban: !p.ban } : p
    );
    setPharmacies(updatedPharmacies);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pharmacies")
      .then((response) => {
        setPharmacies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const openModal = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPharmacy(null);
    setIsModalOpen(false);
  };

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
          {pharmacies.map((pharmacy, index) => (
            <tr
              key={pharmacy.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{pharmacy.name}</td>
              <td className="p-4">{pharmacy.address}</td>
              <td className="p-4">{pharmacy.contact}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    pharmacy.status === "approved"
                      ? "bg-green-500 text-white"
                      : pharmacy.status === "pending"
                      ? "bg-yellow-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {pharmacy.status}
                </span>
              </td>
              <td className="p-4">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => openModal(pharmacy)}
                >
                  View
                </button>
                <button
                  type="Submit"
                  className="px-3 py-1 bg-red-500 text-white rounded-md ml-2 hover:bg-red-600"
                  onClick={(e) => handleSuspension(e, pharmacy)}
                >
                  {pharmacy.ban == false ? "Suspend" : "Unsuspend"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-md w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Pharmacy Details</h2>
            {selectedPharmacy && (
              <div>
                <p>
                  <strong>Name:</strong> {selectedPharmacy.name}
                </p>
                <p>
                  <strong>Owner:</strong> {selectedPharmacy.owner}
                </p>
                <p>
                  <strong>Email:</strong> {selectedPharmacy.email}
                </p>
                <p>
                  <strong>Opening Time:</strong> {selectedPharmacy.openingTime}
                </p>
                <p>
                  <strong>Closing Time:</strong> {selectedPharmacy.closingTime}
                </p>
                <p>
                  <strong>Bio:</strong> {selectedPharmacy.bio}
                </p>
                <p>
                  <strong>Is Verified:</strong> {selectedPharmacy.ban}
                </p>
                <p>
                  <strong>Rating:</strong> {selectedPharmacy.rating}
                </p>
                <p>
                  <strong>Location:</strong> {selectedPharmacy.address}
                </p>
                <p>
                  <strong>Contact:</strong> {selectedPharmacy.contact}
                </p>
                <p>
                  <strong>Status:</strong> {selectedPharmacy.status}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ManagePharmacies;
