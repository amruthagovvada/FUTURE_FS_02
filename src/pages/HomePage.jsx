import React from 'react';
import picture from '../assets/picture.png';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  return (
    <div className="relative bg-white">
      {/* 🔵 Animated Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[100px]">
          <path d="M0,0 C150,150 350,0 500,100 L500,0 L0,0 Z" className="fill-pink-200 animate-pulse"></path>
        </svg>
      </div>

      {/* 🔷 Top Gradient Navigation Panel (Categories) */}
      <div className="relative z-10 w-full bg-gradient-to-r from-pink-100 to-violet-200 py-1.5 px-4 shadow-inner border-y border-purple-200">
  <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
    
    {/* About Us */}
    <Link to="/about">
      <div className="bg-white border border-purple-400 shadow-md rounded-lg px-4 py-1 text-center text-sm font-semibold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
        About Us
      </div>
    </Link>

    {/* Services */}
    <Link to="/services">
      <div className="bg-white border border-purple-400 shadow-md rounded-lg px-4 py-1 text-center text-sm font-semibold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
        Services
      </div>
    </Link>

    {/* Best Deals */}
    <Link to="/deals">
      <div className="bg-white border border-purple-400 shadow-md rounded-lg px-4 py-1 text-center text-sm font-semibold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
        Best Deals
      </div>
    </Link>

  </div>
</div>

      {/* 🔶 Hero Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-0 bg-gradient-to-r from-pink-100 to-blue-100 rounded-xl shadow-lg mt-0">
        {/* 🟢 Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-extrabold text-purple-700">
            <Typewriter
              words={['Welcome to MiniBay 🛒', 'Shop Smart. Live Better.', 'Deals You Can’t Miss!']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h1>
          <p className="text-gray-700 text-lg">Your one-stop shop for everything!</p>
          <Link to="/products">
            <button className="animate-bounce mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">
              Let’s Start Shopping!
            </button>
          </Link>
        </div>

        {/* 🖼️ Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={picture}
            alt="Shopping"
            className="max-w-xs md:max-w-md drop-shadow-xl"
          />
        </div>
      </div>

      {/* ⭐ Why Shop With Us Section */}
      <section className="relative z-10 mt-12 px-8 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">🚚</span>
            <h3 className="text-xl font-semibold text-purple-600 mt-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm mt-1">Get your orders in record time!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">🔐</span>
            <h3 className="text-xl font-semibold text-purple-600 mt-2">Secure Checkout</h3>
            <p className="text-gray-600 text-sm mt-1">Your data is always safe with us.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">⭐</span>
            <h3 className="text-xl font-semibold text-purple-600 mt-2">4.8+ Ratings</h3>
            <p className="text-gray-600 text-sm mt-1">Trusted by thousands of happy users.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <span className="text-4xl">💸</span>
            <h3 className="text-xl font-semibold text-purple-600 mt-2">Affordable Prices</h3>
            <p className="text-gray-600 text-sm mt-1">Great deals every day!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
