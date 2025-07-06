import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user session in localStorage
    localStorage.setItem('userSession', JSON.stringify(formData));

    // Redirect to Home
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700">🔐 Login</h2>

        <input
          type="text"
          placeholder="Username"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded hover:scale-105 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
