import React, { useState, useContext, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fetchUserData = async (url, email, password, setError, setLoading) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.find(
      (user) => user.email === email && user.password === password
    );
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login attempt starts

    const adminUser = await fetchUserData(
      "http://localhost:5000/api/users",
      email,
      password,
      setError,
      setLoading
    );
    const pharmacyUser = await fetchUserData(
      "http://localhost:5000/api/pharmacies",
      email,
      password,
      setError,
      setLoading
    );

    const approvedPharmacy = pharmacyUser && pharmacyUser.status === "approved" && !pharmacyUser.ban;

    if (adminUser) {
      login(adminUser);
      navigate("/admin");
    } else if (approvedPharmacy) {
      login(pharmacyUser);
      navigate("/pharmacy");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="min-h-[90vh] bg-gray-100 flex items-center justify-center">
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
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-center mt-4">{error.message}</p>
          )}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
