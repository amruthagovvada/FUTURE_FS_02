import React from 'react'
import aboutImage from '../assets/about-us.png' 

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto gap-10">
      {/* Text Column */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">📘 About MiniBay</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          MiniBay is your modern destination for online shopping — built with love, convenience, and curated quality.
          <br /><br />
          Whether you're browsing the latest gadgets, upgrading your wardrobe, or hunting for the best deals, MiniBay offers a smooth and secure shopping experience.
          <br /><br />
          With fast shipping, a helpful support team, and a vibrant community of customers, MiniBay is not just a store — it’s your go-to shopping companion.
        </p>
      </div>

      {/* Image Column */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={aboutImage}
          alt="About MiniBay"
          className="max-w-xs md:max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default AboutPage
