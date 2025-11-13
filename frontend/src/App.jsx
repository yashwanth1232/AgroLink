import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ManageProducts from "./pages/ManageProducts";
import AIRecommendations from "./pages/AIRecommendation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Keep login state synced
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  // Protect certain pages
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar always visible */}
        <header className="sticky top-0 z-50 shadow-md">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        </header>

        {/* Page content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/manage"
              element={
                <ProtectedRoute>
                  <ManageProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ai-recommendations"
              element={
                <ProtectedRoute>
                  <AIRecommendations />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer always visible */}
        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
