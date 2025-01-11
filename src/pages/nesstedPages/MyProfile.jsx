import React, {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";

const Profile = () => {
    const { logout } = useContext(UserContext);
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

      <main>
        <h1>General profile</h1>
      </main>

      <footer className="bg-blue-900 text-white p-4 mt-auto text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Profile;
