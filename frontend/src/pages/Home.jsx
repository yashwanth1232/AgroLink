import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight">
            Empowering Farmers Through Technology 🌿
          </h1>
          <p className="text-lg text-gray-700">
            AgroLink connects farmers, suppliers, and buyers for a smarter,
            sustainable future in agriculture.
          </p>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-green-500 to-lime-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/farmers-market-concept-illustration_114360-19467.jpg"
            alt="Farm Illustration"
            className="w-full h-auto drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white shadow-inner rounded-t-3xl">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
          Why Choose AgroLink?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:bg-green-100 transition duration-300 shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
              alt="Farmer"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Connect Farmers & Buyers
            </h3>
            <p>Direct marketplace for crops and farm products with fair prices.</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:bg-green-100 transition duration-300 shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3094/3094850.png"
              alt="Analytics"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Smart Data Insights
            </h3>
            <p>Use AI-driven analytics to monitor crops, weather, and pricing.</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:bg-green-100 transition duration-300 shadow">
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706195.png"
              alt="Support"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              24/7 Support
            </h3>
            <p>Get help anytime from our dedicated AgroLink support team.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-green-500 to-lime-600 text-white text-center py-16 px-6 mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join AgroLink Today 🌾
        </h2>
        <p className="mb-6 text-lg">
          Register now to sell, buy, and grow your agricultural business.
        </p>
        <Link
          to="/register"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300"
        >
          Create an Account
        </Link>
      </section>
    </div>
  );
}

export default Home;
