import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Setting = () => {
  const { logout } = useContext(UserContext);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [comment, setComment] = useState("");

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add logic to handle password change here
    alert("Password updated successfully.");
  };

  const handleCommentSubmit = () => {
    if (!comment.trim()) {
      alert("Please enter a comment before submitting.");
      return;
    }
    // Add logic to handle comment submission here
    alert("Thank you for your feedback!");
    setComment("");
  };

  const handleAccountDeletion = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmation) {
      // Add logic to handle account deletion here
      alert("Your account has been deleted.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="fixed top-0 w-full bg-blue-900 p-5 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold text-white">PharmaFinder</h1>
        </div>
        <button
          className="bg-gray-100 text-blue-900 px-4 py-2 rounded-md hover:bg-gray-300 transition"
          onClick={logout}
        >
          Logout
        </button>
      </header>

      <main className="flex-grow mt-24 px-4 md:px-10">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Account Settings
          </h2>

          {/* Password Change Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">
              Change Password
            </h3>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handlePasswordChange}
            >
              Update Password
            </button>
          </section>

          {/* Comment Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">Send Comment</h3>
            <textarea
              placeholder="Write your feedback or comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="block w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
            ></textarea>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleCommentSubmit}
            >
              Send Comment
            </button>
          </section>

          {/* Account Deletion Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">
              Delete Account
            </h3>
            <p className="text-sm text-gray-600">
              This action is irreversible. Please be sure before proceeding.
            </p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              onClick={handleAccountDeletion}
            >
              Delete Account
            </button>
          </section>
        </div>
      </main>

      <footer className="bg-blue-900 text-white p-4 mt-8 text-center">
        <p className="text-sm">
          &copy; 2025 Pharmacy Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Setting;
