import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-700 pb-6">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" className="text-sm hover:text-blue-300">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-blue-300">
              Contact
            </a>
            <a href="#privacy" className="text-sm hover:text-blue-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm hover:text-blue-300">
              Terms of Service
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-300">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-300">
              Twitter
            </a>
          </div>
        </div>
        <div className="text-center pt-6">
          <p className="text-sm">
            © P2P Pharmacy Management System. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
