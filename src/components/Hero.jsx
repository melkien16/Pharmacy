import React, { Fragment } from "react";

import Features from "./Features";
import Header from "./Header";
import Footer from "./Footer";

const Hero = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section className="md:pt-28 pt-20 bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-center">
          <h1 className="text-4xl font-bold text-blue-900">
            Find the Best Prices and Nearby Pharmacies for Your Medications
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Search drugs, compare prices, and locate pharmacies near you!
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <input
              type="text"
              placeholder="Enter drug name or category"
              className="w-full md:w-1/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-500"
            />
            <button className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
              Search Now
            </button>
          </div>
          <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Register Your Pharmacy
          </button>
        </section>
        <Features />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Hero;
