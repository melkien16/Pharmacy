import React, { useState, useEffect } from "react";
import axios from "axios";
import SendConfirmation from "../../services/sendConfirmation";
import SendRejection from "../../services/sendRejection";

const ApprovalPage = () => {
  const [pharmacies, setPharmacies] = useState([
    { id: 1, name: "PharmaOne", location: "Addis Ababa", status: "Pending" },
    {
      id: 2,
      name: "HealthCare Inc.",
      location: "Dire Dawa",
      status: "Pending",
    },
    { id: 3, name: "MediPharm", location: "Hawassa", status: "Pending" },
  ]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pharmacies/pending").then((res) => {
      setPharmacies(res.data);

      console.log(res.data);
    });
  }, []);

  const handleAction = async (pharmacy, id, action) => {
    setPharmacies((prev) =>
      prev.map((pharmacy) =>
        pharmacy.id === id
          ? {
              ...pharmacy,
              status: action === "approve" ? "Approved" : "Rejected",
            }
          : pharmacy
      )
    );

    if (action === "approve") {
      SendConfirmation(pharmacy.email, pharmacy.name);
    } else {
      SendRejection(pharmacy.email, pharmacy.name);
    }

    await axios.put(`http://localhost:5000/api/pharmacies/${id}/status`, {
      status: action === "approve" ? "Approved" : "Rejected",
    });
  };

  return (
    <main className="flex-grow p-6">
      <section className="bg-white shadow-md p-6 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Pending Pharmacy Approvals
        </h3>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-4">Pharmacy Name</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pharmacies.map((pharmacy) => (
              <tr key={pharmacy.id} className="hover:bg-gray-100">
                <td className="p-4 border-b">{pharmacy.name}</td>
                <td className="p-4 border-b">{pharmacy.address}</td>
                <td
                  className={`p-4 border-b font-bold ${
                    pharmacy.status === "Approved"
                      ? "text-green-500"
                      : pharmacy.status === "Rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {pharmacy.status}
                </td>
                <td className="p-4 border-b">
                  {pharmacy.status === "pending" && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAction(pharmacy, pharmacy.id, "approve")}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(pharmacy, pharmacy.id, "reject")}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ApprovalPage;
