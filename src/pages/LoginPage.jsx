import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fetchuser from "../DummyPharmacies/fetchuser";

const fetchOwnerData = async (email, password) => {
  try {
    const Owner = await fetchuser("Owner");
    const ownerUser = Owner.find(
      (owner) => owner.email === email && owner.password === password
    );
    return ownerUser;
  } catch (error) {
    console.error("Error fetching owner data:", error);
    return null;
  }
};

const fetchAdminData = async (email, password) => {
  try {
    const Admin = await fetchuser("admin");
    const adminUser = Admin.find(
      (admin) => admin.email === email && admin.password === password
    );
    return adminUser;
  } catch (error) {
    console.error("Error fetching admin data:", error);
    return null;
  }
};

const fetchPharmacistData = async (email, password) => {
  try {
    const Pharmacist = await fetchuser("Pending_Pharmacies");
    const pharmacistUser = Pharmacist.find(
      (pharmacist) =>
        pharmacist.email === email && pharmacist.password === password
    );
    return pharmacistUser;
  } catch (error) {
    console.error("Error fetching pharmacist data:", error);
    return null;
  }
};

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const ownerUser = await fetchOwnerData(email, password);
    const adminUser = await fetchAdminData(email, password);
    const pharmacistUser = await fetchPharmacistData(email, password);

    if (ownerUser) {
      login(ownerUser);
      navigate("/admin");
    } else if (adminUser) {
      login(adminUser);
      navigate("/admin");
    } else if (pharmacistUser) {
      login(pharmacistUser);
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
            >
              Log In
            </button>
          </form>
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
