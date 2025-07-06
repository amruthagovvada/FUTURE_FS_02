import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const mainCategories = [
  "smartphones",
  "laptops",
  "mens-shirts",
  "womens-dresses",
  "fragrances",
  "womens-shoes",
  "home-decoration",
];

const ProductPage = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        const expanded = [
          ...data.products,
          ...data.products.map((p) => ({
            ...p,
            id: p.id + 1000,
            title: `${p.title} (New)`,
          })),
        ];
        setProducts(expanded);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [selectedCategory]);

  const getQuantity = (id) => {
    const item = cartItems.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8 gap-10">

        {/* Sidebar */}
        <aside className="w-full md:w-1/4 space-y-4">
          <h2 className="text-xl font-semibold text-purple-700 mb-4"> Categories</h2>
          <div className="space-y-2">
            {mainCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-purple-700 border border-purple-200 hover:bg-purple-100'
                } transition`}
              >
                {cat.replace("-", " ").toUpperCase()}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full md:w-3/4 space-y-10">
          {/* 🔶 Banner with Search */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-8 px-6 text-center rounded-xl shadow">
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-2">
              Discover Great Products
            </h1>
            <p className="text-lg text-gray-700 mb-4">Search and explore your favorites</p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-md shadow border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
              />
            </div>

            {/* 🔁 Marquee Thumbnails */}
            <Marquee pauseOnHover={true} speed={50} gradient={false} className="mt-8">
              {[...products, ...products].slice(0, 16).map((product, i) => (
                <div key={i} className="mx-4 flex flex-col items-center">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-20 h-20 object-contain bg-white p-2 rounded-full shadow-md"
                  />
                  <p className="text-xs text-purple-700 mt-2 text-center w-24 truncate">
                    {product.title}
                  </p>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Product Grid */}
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
              {selectedCategory.replace("-", " ").toUpperCase()}
            </h3>

            {loading ? (
              <p className="text-center text-gray-500">Loading products...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-32 h-32 object-contain mb-4"
                        />
                      </Link>

                      <Link
                        to={`/product/${product.id}`}
                        className="text-md font-semibold text-purple-800 hover:underline mb-1"
                      >
                        {product.title}
                      </Link>

                      <p className="text-purple-600 font-medium mb-1">
                        ₹{product.price * 85}
                      </p>

                      {getQuantity(product.id) > 0 && (
                        <p className="text-sm text-gray-500 mb-2">
                          In Cart:{" "}
                          <span className="font-semibold text-purple-700">
                            {getQuantity(product.id)}
                          </span>
                        </p>
                      )}

                      <button
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md hover:scale-105 transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
