import React from 'react'

const ContactPage = () => {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">📞 Contact Us</h2>
      <p className="text-gray-700 mb-2">
        Have questions? We’d love to hear from you!
      </p>
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactPage
