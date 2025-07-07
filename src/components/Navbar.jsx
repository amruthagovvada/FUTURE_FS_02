import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react"; 

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("userSession"));
    setUser(session);
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-700 via-violet-600 to-indigo-600 text-transparent bg-clip-text drop-shadow-md tracking-wide">
        MiniBay 🛒
      </h1>

      

      {/* Right section: nav links + user info */}
      <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
        {/* Home */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <Link
            to="/"
            className="block px-4 py-1 bg-white rounded-md hover:text-purple-600 transition-all transform hover:scale-105 duration-200"
          >
            Home
          </Link>
        </div>

        {/* Contact */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <Link
            to="/contact"
            className="block px-4 py-1 bg-white rounded-md hover:text-purple-600 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* My Orders */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <Link
            to="/orders"
            className="relative block px-4 py-1 bg-white rounded-md hover:text-purple-600 transition-all"
          >
            My Orders
          </Link>
        </div>

        {/* Cart */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <Link
            to="/cart"
            className="relative block px-4 py-1 bg-white rounded-md hover:text-purple-600 transition-all"
          >
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Checkout */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <Link
            to="/checkout"
            className="block px-4 py-1 bg-white rounded-md hover:text-purple-600 transition-all"
          >
            Checkout
          </Link>
        </div>

        {/* Login/Logout as Icon */}
        <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <div className="flex items-center px-4 py-1 bg-white rounded-md gap-3">
            {user ? (
              <>
                <User className="text-purple-700 w-5 h-5" />
                <button
                  title="Logout"
                  onClick={() => {
                    localStorage.removeItem("userSession");
                    window.location.reload();
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : (
              <Link to="/login" title="Login">
                <User className="text-purple-700 w-5 h-5 hover:text-purple-500 transition" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;
