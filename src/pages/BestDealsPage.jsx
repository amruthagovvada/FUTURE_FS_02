import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const BestDealsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [deals, setDeals] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6&skip=12")
      .then((res) => res.json())
      .then((data) => setDeals(data.products))
      .catch((err) => console.error("Failed to fetch deals:", err));
  }, []);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

   return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 p-6">
      {/* 🔥 Banner */}
      <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl p-6 text-center shadow mb-10">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2">
          🔥 Best Deals Just for You!
        </h1>
        <p className="text-lg text-gray-700 mb-1">Limited time offer!</p>
        <p className="text-2xl font-bold text-red-600">
          ⏰ Ends in {formatTime(timeLeft)}
        </p>
      </div>

      {/* 🛍️ Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {deals.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-32 h-32 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description.slice(0, 50)}...</p>
            <p className="text-2xl font-bold text-pink-600 mb-4">₹{product.price * 85}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:scale-105 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDealsPage;
