import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { logout } = useContext(UserContext);

  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    pharmacyName: "HealthCare Pharmacy",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
  });

  const [isEditing, setIsEditing] = useState(false); // State for toggling edit mode

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here, you can add an API call or logic to save the data
    console.log("Updated profile data:", profileData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Fetch real-time data if needed
  }, []);

  return (
    <div className="bg-gray-50 min-h-[85vh] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-white text-blue-900 px-4 py-2 rounded-md shadow-lg hover:bg-gray-200"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center mt-20">
        <div className="px-6 sm:px-8 py-8 w-[75%]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Your Profile
          </h1>

          <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col space-y-6 border border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                General Information
              </h2>
              <button
                onClick={isEditing ? handleSave : handleEditClick}
                className="text-blue-600 hover:underline"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>

            <div className="space-y-4">
              {Object.entries(profileData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="font-medium text-gray-800 border border-gray-300 p-2 rounded-md"
                    />
                  ) : (
                    <span className="font-medium text-gray-800">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-blue-900 text-white p-4 text-center mt-auto">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Profile;
