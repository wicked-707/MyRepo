import React, { useState } from 'react';
import Lottie from 'lottie-react';
import sendMessageAnimation from '../assets/animation/sendMessageAnimation.json'; // Adjust the path if needed

const SaySomething = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-indigo-200 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center">
        What Do You Think About Me? 🤔
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4 text-center max-w-2xl">
        Share your thoughts, feedback, or just say hi! It means a lot to me.
      </p>

      <div className="mt-8 max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden md:flex md:items-center">
        {/* Left Section: Animation */}
        <div className="w-full md:w-1/2 flex flex-col items-center bg-blue-50 p-6">
          <Lottie animationData={sendMessageAnimation} className="w-64 h-64" />
        </div>

        {/* Right Section: Form */}
        <form className="w-full md:w-1/2 p-6 md:p-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your thoughts..."
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-28 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Submit
          </button>
          {formSubmitted && (
            <p className="mt-4 text-green-600 font-medium text-center">
              Thank you for your message! 🌟
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SaySomething;
