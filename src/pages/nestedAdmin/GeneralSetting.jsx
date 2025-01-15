import React, { useState } from "react";

const AdminSetting = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [registrationPolicy, setRegistrationPolicy] = useState("Automatic");
  const [categories, setCategories] = useState([
    "Analgesic",
    "Antibiotic",
    "Anti-inflammatory",
  ]);
  const [newCategory, setNewCategory] = useState("");

  // Handle adding a new category
  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  // Handle removing a category
  const handleRemoveCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  return (
    <main className="flex-grow p-8">
      {/* Email Notifications */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Email Notifications</h2>
        <div className="flex items-center space-x-4">
          <label className="text-lg">Enable Notifications:</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Registration Policy */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Registration Policy</h2>
        <select
          value={registrationPolicy}
          onChange={(e) => setRegistrationPolicy(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        >
          <option value="Automatic">Automatic Approval</option>
          <option value="Manual">Manual Approval</option>
        </select>
      </div>

      {/* Drug Categories */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Manage Drug Categories</h2>
        <ul className="mb-4 space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
            >
              <span>{category}</span>
              <button
                onClick={() => handleRemoveCategory(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="flex-grow p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddCategory}
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminSetting;
