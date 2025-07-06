import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrdersPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('userSession'));

    if (!session) {
      navigate('/login');
    } else {
      setUsername(session.username);
      const userOrders = JSON.parse(localStorage.getItem(`orders_${session.username}`)) || [];
      setOrders(userOrders);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold text-purple-700 text-center mb-8">
        🧾 Your Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">You haven’t placed any orders yet.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {orders.map((order, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-300"
            >
              <p className="text-sm text-gray-500">📅 {order.date}</p>
              <p className="text-lg font-semibold text-purple-700 mb-2">
                Total Paid: ₹{order.total * 85}
              </p>
              <ul className="text-gray-700 space-y-1">
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.title} x {item.quantity || 1} — ₹{item.price * 85 * (item.quantity || 1)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
