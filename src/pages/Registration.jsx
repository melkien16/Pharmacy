import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; // Import setDoc and doc
import SendEmail from "../services/SendEmail";
import Header from "../components/Header";
import Footer from "../components/Footer";

const registerPharmacy = async (pharmacyData, name) => {
  try {
    const customId = name.replace(/\s+/g, ""); // This removes all spaces

    const docRef = doc(db, "Pending_Pharmacies", customId);

    await setDoc(docRef, pharmacyData);
  } catch (e) {
    throw e;
  }
};

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    contact: "",
    registrationNumber: "",
    openingTime: "",
    closingTime: "",
    ban: false,
  });

  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const statusRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const pharmacyData = {
      name: formData.name,
      owner: formData.owner,
      email: formData.email,
      password: formData.password,
      location: formData.address,
      phone: formData.contact,
      reg_no: formData.registrationNumber,
      opening_time: formData.openingTime,
      closing_time: formData.closingTime,
      ban: false,
    };

    setIsLoading(true);
    try {
      await registerPharmacy(pharmacyData, formData.name);
      SendEmail(formData.email, formData.name);
      setStatus(true);
      setError("");
      setFormData({
        name: "",
        owner: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        contact: "",
        registrationNumber: "",
        openingTime: "",
        closingTime: "",
        ban: false,
      });
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickOutside = (event) => {
    if (statusRef.current && !statusRef.current.contains(event.target)) {
      setStatus(false);
      setError("");
    }
  };

  useEffect(() => {
    if (status || error) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [status, error]);

  return (
    <Fragment>
      <Header />
      <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center mt-14 py-4">
        {isLoading && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center animate-fadeIn">
            <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-xs mx-auto transform scale-105 transition-all duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
              </div>
              <p className="text-xl font-semibold text-gray-900">
                Registering...
              </p>
            </div>
          </div>
        )}

        {status && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center animate-fadeIn">
            <div
              ref={statusRef}
              className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm mx-auto transform scale-105 transition-all duration-300 ease-in-out"
            >
              <p className="text-4xl font-semibold text-green-500 mb-4">
                Congratulations!
              </p>
              <p className="text-lg text-gray-700 mb-4">
                You have registered successfully. We will review your
                application and get back to you soon.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Check your email for further instructions.
              </p>
              <button
                onClick={() => setStatus(false)}
                className="bg-blue-700 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-800 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center animate-fadeIn">
            <div
              ref={statusRef}
              className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm mx-auto transform scale-105 transition-all duration-300 ease-in-out"
            >
              <p className="text-2xl font-semibold text-red-600 mb-4">Error</p>
              <p className="text-lg text-gray-700 mb-6">{error}</p>
              <button
                onClick={() => setError("")}
                className="bg-red-700 text-white px-6 py-3 rounded-md mt-6 hover:bg-red-800 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg animate-slideIn">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
            Join the Platform to Manage Your Pharmacy in Real-Time
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pharmacy Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter pharmacy name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="owner"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pharmacy Owner’s Name
              </label>
              <input
                type="text"
                id="owner"
                value={formData.owner}
                onChange={handleChange}
                placeholder="Enter owner’s name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pharmacy Address/Location
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter pharmacy address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter contact number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="openingTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Opening Hour
                </label>
                <input
                  type="time"
                  id="openingTime"
                  value={formData.openingTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="closingTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Closing Hour
                </label>
                <input
                  type="time"
                  id="closingTime"
                  value={formData.closingTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="registrationNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Business Registration Number (Optional)
              </label>
              <input
                type="text"
                id="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                placeholder="Enter registration number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register Pharmacy"}
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default RegistrationPage;
