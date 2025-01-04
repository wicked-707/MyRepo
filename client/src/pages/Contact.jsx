import React from "react";
import { Phone, Mail, ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Animation, Heading, Call, Social */}
          <div className="space-y-8">
            {/* Animated Graphic */}
           

            {/* Heading */}
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white animate-fade-in">
                Wanna Reach Me?
              </h1>
              <p className="text-lg text-slate-300">
                Let's connect! Choose your preferred way to get in touch.
              </p>
            </div>

             <div className="relative w-full h-[300px]">
              <div className="absolute inset-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    fill="#FB923C"
                    d="M45,-51.5C59.1,-37.3,71.7,-18.7,71.4,-0.3C71.1,18,57.9,36.1,43.7,48.7C29.4,61.3,14.7,68.5,-1.9,70.4C-18.5,72.3,-37,68.9,-51.2,56.6C-65.4,44.3,-75.2,23.2,-74.8,2.5C-74.3,-18.2,-63.5,-36.3,-49.3,-50.5C-35.1,-64.7,-17.6,-74.9,0.6,-75.5C18.7,-76.1,37.4,-67.1,45,-51.5Z"
                    transform="translate(100 100)"
                    className="animate-blob"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Mail className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>

            {/* Phone Call Section */}
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500/10 transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Make an instant call
                  </h3>
                  <p className="text-orange-400 font-medium text-lg">
                    +254 75992 3319
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="group">
                <div className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300">
                  <Github className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-3 bg-slate-800 rounded-full hover:bg-orange-500 transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Section - Message Form */}
          <div className="bg-slate-800 p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-orange-500 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Send me a message
                </h3>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-slate-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-900 text-white border border-slate-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-slate-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;