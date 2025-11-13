import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, LogOut, User } from "lucide-react"; // optional icons if lucide-react installed

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold hover:text-yellow-300">
        🌾 AgroLink
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-lg relative">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="hover:text-yellow-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-yellow-300">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/manage" className="hover:text-yellow-300">
              Manage Products
            </Link>
            <Link to="/ai-recommendations" className="hover:text-yellow-300">
              AI Recommendation
            </Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition"
              >
                <User size={18} />
                <span>Profile</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-20">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-green-100 rounded-t-lg"
                  >
                    My Account
                  </Link>
                  <button
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-red-100 text-red-600 rounded-b-lg"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
