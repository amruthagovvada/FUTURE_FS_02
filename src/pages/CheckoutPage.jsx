import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const session = JSON.parse(localStorage.getItem('userSession'));
if (!session) return alert("Please login before placing order");

const order = {
  ...formData,
  items: cartItems,
  total: totalAmount,
  date: new Date().toLocaleString(),
};

// Save order under the user's order history
const existingOrders = JSON.parse(localStorage.getItem(`orders_${session.username}`)) || [];
localStorage.setItem(`orders_${session.username}`, JSON.stringify([...existingOrders, order]));

// Save for confirmation page
localStorage.setItem("latestOrder", JSON.stringify(order));
navigate("/order-confirmation");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally store order data in localStorage
    const order = {
      ...formData,
      items: cartItems,
      total: totalAmount,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("latestOrder", JSON.stringify(order));
    navigate("/order-confirmation");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">🧾 Checkout</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <input
            required
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            required
            type="text"
            placeholder="Shipping Address"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded hover:scale-105 transition"
          >
            Confirm & Pay ₹{totalAmount * 85}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">🛍 Order Summary</h2>
          <ul className="space-y-2 text-gray-700">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.title} x {item.quantity || 1}</span>
                <span>₹{item.price * 85 * (item.quantity || 1)}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold text-right text-pink-600 mt-6">
            Total: ₹{totalAmount * 85}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
