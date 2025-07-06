import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Confetti from 'react-confetti';



const OrderConfirmationPage = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("latestOrder"));
    setOrder(storedOrder);
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No recent order found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 px-6 py-16 text-center">
      <Confetti />
      <h1 className="text-4xl font-bold text-purple-700 mb-4">✅ Order Placed Successfully!</h1>
      <p className="text-lg text-gray-600 mb-10">Thank you, {order.name}! Your order has been confirmed.</p>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">🧾 Order Summary</h2>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        <p className="mt-4 text-lg font-bold text-pink-600">Total Paid: ₹{order.total * 85}</p>

        <ul className="mt-6 space-y-2 text-gray-700">
          {order.items.map((item) => (
            <li key={item.id} className="border-b pb-2 flex justify-between">
              <span>{item.title} x {item.quantity || 1}</span>
              <span>₹{item.price * 85 * (item.quantity || 1)}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to="/"
        className="mt-10 inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
