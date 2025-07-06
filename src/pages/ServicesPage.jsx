import React from 'react';
import { FaShippingFast, FaUndo, FaHeadset, FaShieldAlt, FaGift } from 'react-icons/fa';

const services = [
  {
    title: 'Fast & Free Shipping',
    icon: <FaShippingFast size={32} className="text-pink-500" />,
    description: 'We deliver your products quickly and safely at no extra cost.',
  },
  {
    title: '7-Day Easy Returns',
    icon: <FaUndo size={32} className="text-purple-500" />,
    description: 'Hassle-free returns within 7 days for eligible products.',
  },
  {
    title: '24/7 Support',
    icon: <FaHeadset size={32} className="text-indigo-500" />,
    description: 'Our support team is available around the clock to help you.',
  },
  {
    title: 'Secure Payments',
    icon: <FaShieldAlt size={32} className="text-green-500" />,
    description: 'We offer multiple safe and encrypted payment options.',
  },
  {
    title: 'Gift Wrapping',
    icon: <FaGift size={32} className="text-yellow-500" />,
    description: 'Make it special! Personalized packaging and messages.',
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
          🛠️ Our Services
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          At MiniBay, we offer more than just great products. Explore the services that make shopping with us seamless and enjoyable!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
