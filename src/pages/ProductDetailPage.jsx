import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading product...</div>;

  return (
    <div className="min-h-screen bg-purple-50 px-6 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-contain rounded"
        />
        <div>
          <h1 className="text-3xl font-bold text-purple-700 mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl text-pink-600 font-bold mb-2">₹{product.price * 85}</p>
          <p className="text-sm text-yellow-600 mb-4"> {product.rating} / 5</p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-md hover:scale-105 transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product);
                navigate("/checkout");
              }}
              className="px-6 py-2 bg-green-500 text-white rounded-md hover:scale-105 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
