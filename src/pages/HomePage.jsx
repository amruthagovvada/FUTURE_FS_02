import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: false,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };


const Slide = ({ title, tag, price, bgColor, img }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between ${bgColor} px-8 py-10 gap-12 rounded-xl shadow-2xl border border-purple-300`}>
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left space-y-4">
      <p className="font-medium text-lg text-purple-600">{tag}</p>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-lg text-gray-700">{price}</p>
      <Link to="/products">
        <button className="mt-3 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-md shadow hover:scale-105 transition">
          Shop Now
        </button>
      </Link>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={img}
        alt={title}
        className="max-w-[260px] md:max-w-[320px] rounded-xl border-4 border-purple-400 shadow-lg object-cover"
      />
    </div>
  </div>
);

<div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl shadow-2xl border border-blue-300 backdrop-blur-sm">
  {/* 🟣 Text Card */}
  <div className="md:w-1/2 p-6 rounded-2xl bg-white/80 border border-blue-200 shadow-xl space-y-5 backdrop-blur-md">
    <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-semibold rounded-full shadow">
      Exclusive Deals
    </div>
    <h2 className="text-4xl font-extrabold text-gray-900">Mens Shirt</h2>
    <p className="text-lg text-gray-700">Get it before it’s gone!</p>
    <Link to="/products">
      <button className="mt-3 px-7 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-md shadow hover:scale-105 transition-all">
        Shop Now
      </button>
    </Link>
  </div>

  {/* 🖼️ Product Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="https://i.ibb.co/7S3W6qk/mens-shirt.png"
      alt="Mens Shirt"
      className="rounded-2xl border-4 border-indigo-400 shadow-xl w-full max-w-md object-cover"
    />
  </div>
</div>




  return (
    <div className="relative bg-white">
  {/* 🔵 Static Wave Background */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[130px]">
      <path d="M0,0 C150,150 350,0 500,100 L500,0 L0,0 Z" className="fill-pink-400" />
    </svg>
  </div>


      {/* 🔷 Top Gradient Navigation Panel */}
      <div className="relative z-10 w-full bg-gradient-to-r from-pink-300 to-violet-500 py-1.5 px-4 shadow-inner border-y border-purple-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
          <Link to="/about">
            <div className="bg-white border border-purple-500 shadow-md rounded-lg px-4 py-1 text-center text-sm font-semibold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
              About Us
            </div>
          </Link>
          <Link to="/services">
            <div className="bg-white border border-purple-400 shadow-md rounded-lg px-4 py-1 text-center text-sm font-semibold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
              Services
            </div>
          </Link>
          <Link to="/deals">
            <div className="bg-white border border-purple-400 shadow-md rounded-lg px-4 py-1 text-center text-sm font-semibold text-purple-800 hover:bg-purple-100 hover:scale-105 transition-all duration-300">
              Best Deals
            </div>
          </Link>
        </div>
      </div>

      {/* 🟣 Typewriter Welcome Text */}
      <div className="relative z-10 flex justify-center text-center pt-4 pb-2 px-2">
        <h1 className="text-4xl md:text-4xl font-extrabold text-purple-800">
          <Typewriter
            words={['Welcome to MiniBay 🛒', 'Shop Smart. Live Better.', 'Deals You Can’t Miss!']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>
      </div>

      {/* 🟡 Slider Carousel */}
      <div className="max-w-220xl mx-auto px-4 py-6">
        <Slider {...sliderSettings}>
          {/* Slide 1 */}
          <Slide
            title="WOMEN'S FASHION SALE"
            tag="🔥 Trending Item"
            price="Starting at ₹1699"
            bgColor="bg-pink-100"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkZJkgHXE_rEYqlNAQq6KuA8VJQhWssKYRg&s"
          />
          {/* Slide 2 */}
          <Slide
            title="Mens Shirt"
            tag="⌚ Exclusive Deals"
            price="Get it before it’s gone!"
            bgColor="bg-blue-100"
            img="https://cdn.shopify.com/s/files/1/0094/6326/7379/files/Choose_Shirt_Fabric_480x480.jpg?v=1632827551"
          />
          {/* Slide 3 */}
          <Slide
            title="Laptops"
            tag="🎧 Fresh Arrival"
            price="Best Audio at ₹1299"
            bgColor="bg-violet-100"
            img="https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg"
          />
          {/* Slide 4 */}
          <Slide
            title="TRENDY SNEAKERS & SHOES"
            tag="👟 Daily Steals"
            price="Flat 40% Off"
            bgColor="bg-indigo-100"
            img="https://images-cdn.ubuy.co.in/659d455a27dacc1b7c3be94c-samilor-women-39-s-flat-elegant-bow.jpg"
          />
          {/* Slide 5 */}
          <Slide
            title="Perfumes"
            tag="💄 Glam Up"
            price="Beauty boxes at ₹799"
            bgColor="bg-purple-100"
            img="https://luxhabitat.ae/resizedimages/1440w/article/585/source/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
          />
          {/* Slide 6 */}
          <Slide
            title="HOME DECOR STARTING ₹499"
            tag="🏠 Fresh Arrivals"
            price="Elevate your space!"
            bgColor="bg-orange-100"
            img="https://www.dekorcompany.com/cdn/shop/articles/1_a7c10f6b-fca6-4991-95c9-603c8e106329_1200x1200.jpg?v=1582201411"
          />
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <Link to="/products">
            <button className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-base font-semibold rounded-lg shadow hover:scale-105 transition">
              Let’s Start Shopping!
            </button>
          </Link>
        </div>
      </div>

      {/* ⭐ Why Shop With Us Section */}
      <section className="relative z-10 mt-12 px-8 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <FeatureBox icon="🚚" title="Fast Delivery" subtitle="Get your orders in record time!" />
          <FeatureBox icon="🔐" title="Secure Checkout" subtitle="Your data is always safe with us." />
          <FeatureBox icon="⭐" title="4.8+ Ratings" subtitle="Trusted by thousands of happy users." />
          <FeatureBox icon="💸" title="Affordable Prices" subtitle="Great deals every day!" />
        </div>
      </section>
    </div>
  );
};

// Reusable Slide Component
const Slide = ({ title, tag, price, bgColor, img }) => (
  <div className={`flex flex-col md:flex-row items-center ${bgColor} px-4 py-6 rounded-xl shadow-lg min-h-[280px]`}>
    <div className="md:w-1/2 text-center md:text-left space-y-2">
      <p className="font-medium text-sm text-gray-600">{tag}</p>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700 text-base">{price}</p>
      <Link to="/products">
        <button className="mt-2 px-5 py-2 bg-purple-600 text-white font-semibold rounded-md hover:scale-105 transition">
          Shop Now
        </button>
      </Link>
    </div>
    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
      <img src={img} alt={title} className="max-w-[160px] md:max-w-[200px] object-contain rounded-md shadow bg-white" />
    </div>
  </div>
);

// Feature Box
const FeatureBox = ({ icon, title, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
    <span className="text-4xl">{icon}</span>
    <h3 className="text-xl font-semibold text-purple-600 mt-2">{title}</h3>
    <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
  </div>
);

export default HomePage;
