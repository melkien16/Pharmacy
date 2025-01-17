import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Active",
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const handleRoleChange = (id, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const toggleStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleAddUser = () => {
    const newId = users.length + 1;
    setUsers([...users, { ...newUser, id: newId }]);
    setNewUser({
      name: "",
      email: "",
      role: "User",
      status: "Active",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <div className="flex-grow p-6 bg-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl mb-4">Add New User</h2>
        <div className="mb-2">
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Role:</label>
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Status:</label>
          <select
            name="status"
            value={newUser.status}
            onChange={handleInputChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add User
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-md">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">
                {user.role}
              </td>
              <td className="px-4 py-2 border-b">
                <button
                  className={`px-3 py-1 rounded-md font-bold ${
                    user.status === "Active"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status}
                </button>
              </td>
              <td className="px-4 py-2 border-b">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
