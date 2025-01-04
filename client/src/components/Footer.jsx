import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Code,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-900 text-gray-300">
      {/* Adjusted wave overlay */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16 md:h-24" // Adjusted height
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-navy-800"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-24 md:pt-32 pb-8 md:pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get in Touch</h3>
            <div className="space-y-3">
              <a href="mailto:wicklifemunene442@gmail.com" 
                 className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                wicklifemunene442@gmail.com
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center hover:text-blue-400 transition-colors duration-300">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Connect With Me</h3>
            <div className="flex space-x-3 md:space-x-4">
              {[
                { Icon: Github, href: 'https://github.com/wicklife', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://linkedin.com/in/wicklife', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://twitter.com/wicklife', label: 'Twitter' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-navy-800/80 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="mt-6 md:mt-8">
              <p className="text-sm leading-relaxed text-gray-400">
                Let's connect and discuss how we can work together to bring your ideas to life.
                Always open to new opportunities and interesting projects.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800/50 pt-6 md:pt-8 mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="flex items-center text-sm mb-4 md:mb-0 text-gray-400">
              <Code className="w-4 h-4 mr-2" />
              Designed & Built with
              <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" />
              by Wicklife © {new Date().getFullYear()}
            </p>
            <button
              onClick={scrollToTop}
              className="group bg-navy-800/80 hover:bg-blue-500 p-2 md:p-3 rounded-full transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 md:w-5 md:h-5 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;