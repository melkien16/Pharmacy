import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminCredentials = {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  };
  const pharmacistCredentials = {
    email: "pharmacist@example.com",
    password: "pharmacist123",
    role: "pharmacist",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === adminCredentials.email &&
      password === adminCredentials.password
    ) {
      login(adminCredentials);
      navigate("/admin");
    } else if (
      email === pharmacistCredentials.email &&
      password === pharmacistCredentials.password
    ) {
      login(pharmacistCredentials); // Set user context
      navigate("/pharmacy");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-700 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
