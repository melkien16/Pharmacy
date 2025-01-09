import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-blue-700 pb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-blue-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm hover:text-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm hover:text-blue-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <i className="fab fa-linkedin fa-lg">Linkedlin</i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <i className="fab fa-facebook fa-lg">Facebood</i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <i className="fab fa-twitter fa-lg">Twiter</i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest updates on pharmacy
              services.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md text-black"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm">
            © P2P Pharmacy Management System. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
