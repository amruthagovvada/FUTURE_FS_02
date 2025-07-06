import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is currently empty.</p>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-purple-600 font-medium">₹{item.price}</p>
                    <p className="text-sm text-gray-500">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="px-3 py-1 bg-red-100 text-red-600 font-bold rounded hover:bg-red-200"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold text-purple-700">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-green-100 text-green-600 font-bold rounded hover:bg-green-200"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="mt-10 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-md flex justify-between items-center">
            <h3 className="text-xl font-semibold text-purple-700">Total:</h3>
            <p className="text-2xl font-bold text-pink-600">₹{calculateTotal()}</p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-right">
            <button
              onClick={() => navigate("/checkout")}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
