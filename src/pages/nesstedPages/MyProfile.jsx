import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || "John Doe",
        email: user.email || "johndoe@example.com",
        phone: user.contact || "123-456-7890",
        address: user.address || "1234 Elm Street, Anytown, USA",
        bio:
          user.bio || "Passionate about technology and healthcare solutions.",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const saveChanges = () => {
    setEditing(false);
    console.log("Profile updated:", profileData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex items-center justify-between shadow-lg">
        <h1 className="text-3xl font-bold text-white">My Profile</h1>
      </header>

      <main className="mt-20 p-6">
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Profile Information
            </h2>
            <button
              onClick={() => setEditing(!editing)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-600">Full Name</label>
              {editing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-800 mt-1">{profileData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600">Email</label>
              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-800 mt-1">{profileData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600">Phone Number</label>
              {editing ? (
                <input
                  type="text"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-800 mt-1">{profileData.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600">Address</label>
              {editing ? (
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-800 mt-1">{profileData.address}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-600">Bio</label>
              {editing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              ) : (
                <p className="text-gray-800 mt-1">{profileData.bio}</p>
              )}
            </div>

            {editing && (
              <div className="flex justify-end">
                <button
                  onClick={saveChanges}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white p-8 mt-6 rounded-xl shadow-lg space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Linked Accounts
          </h2>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
              Connect Facebook
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all">
              Connect Google
            </button>
          </div>
        </div>

        <div className="bg-white p-8 mt-6 rounded-xl shadow-lg space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Activity Log</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Last login: January 10, 2025, 8:45 PM</li>
            <li>Updated bio on January 9, 2025</li>
            <li>Connected Google account on January 8, 2025</li>
          </ul>
        </div>
      </main>

      <footer className="fixed w-full bottom-0 bg-blue-900 text-white p-4 mt-8 text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Profile;
