import React from "react";
import { Link } from "react-router-dom";

function Footer({ isLoggedIn }) {
  return (
    <footer className="bg-gradient-to-r from-lime-500 via-green-600 to-green-700 text-white py-8 shadow-inner mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🌾 AgroLink</h2>
          <p className="text-sm text-green-100">
            Empowering farmers through technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-green-300 pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition">
                Home
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login" className="hover:text-yellow-300 transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-yellow-300 transition"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/manage"
                    className="hover:text-yellow-300 transition"
                  >
                    Manage Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ai-recommendation"
                    className="hover:text-yellow-300 transition"
                  >
                    AI Recommendation
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-green-300 pb-1">
            Contact Us
          </h3>
          <p>
            Email:{" "}
            <a href="mailto:support@agrolink.com" className="hover:text-yellow-300">
              support@agrolink.com
            </a>
          </p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-green-400 mt-8 pt-4 text-center text-sm text-green-100">
        © {new Date().getFullYear()} AgroLink. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
