import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import myLogo from '../assets/myLogo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const menuItems = [
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Contact", href: "#contact" },
  ];

  // Toggle theme class on the <body>
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark", !isDark);
  };

  return (
    <nav className="fixed top-0 w-screen bg-gradient-to-r from-slate-950 to-slate-800  z-50">
      <div className="container mx-auto px-6 lg:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl  font-bold text-gray-300 ">
          <img src={myLogo} alt="Logo" className="w-40 h-16"  />
        </a>
        <div className="flex flex-row">
          <Link 
              to="/add-project" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              + Add Project
            </Link>
          <Link 
              to="/add-graphic-design-project" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              + Add GProject
            </Link>
          <Link 
              to="/add-uiux-project" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              + Add GProject
            </Link>
          <Link 
              to="/login/admin" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              Admin
            </Link>
          <Link 
              to="/dashboard" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              Dashboard
            </Link>
          <Link 
              to="/view-uiuxprojects" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              UIUX
            </Link>
          <Link 
              to="/login" 
              className=" bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
            >
              login
            </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.title}
            </a>
          ))}
        </div>

        

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="py-4 space-y-3 px-6">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(true);

//   const menuItems = [
//     { title: 'Home', href: '#home' },
//     { title: 'Projects', href: '#projects' },
//     { title: 'Skills', href: '#skills' },
//     { title: 'Experience', href: '#experience' },
//     { title: 'Contact', href: '#contact' },
//   ];

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/wicklife' },
//     { icon: Linkedin, href: 'https://linkedin.com/in/wicklife' },
//     { icon: Twitter, href: 'https://twitter.com/wicklife' },
//   ];

//   return (
//     <nav className=" bg-navy-900 text-white fixed w-full top-0 z-50 shadow-lg">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <a
//             href="#"
//             className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
//           >
//             Wicklife
//           </a>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item.title}
//                 href={item.href}
//                 className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>

//           {/* Desktop Social Links & Theme Toggle */}
//           <div className="hidden md:flex items-center space-x-4">
//             {socialLinks.map(({ icon: Icon, href }) => (
//               <a
//                 key={href}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white transition-colors duration-200"
//               >
//                 <Icon size={20} />
//               </a>
//             ))}
//             <button
//               onClick={() => setIsDark(!isDark)}
//               className="p-2 rounded-full hover:bg-navy-800 transition-colors duration-200"
//             >
//               {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden p-2 rounded-md hover:bg-navy-800 transition-colors duration-200"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:hidden bg-navy-800 transition-all duration-300`}
//       >
//         <div className="space-y-2 py-4 px-4">
//           {menuItems.map((item) => (
//             <a
//               key={item.title}
//               href={item.href}
//               className="block text-gray-300 hover:text-white hover:bg-navy-700 px-3 py-2 rounded-md font-medium"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.title}
//             </a>
//           ))}
//         </div>
//         <div className="flex items-center justify-center space-x-4 py-4">
//           {socialLinks.map(({ icon: Icon, href }) => (
//             <a
//               key={href}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-300 hover:text-white transition-colors duration-200"
//             >
//               <Icon size={20} />
//             </a>
//           ))}
//           <button
//             onClick={() => setIsDark(!isDark)}
//             className="p-2 rounded-full hover:bg-navy-700 transition-colors duration-200"
//           >
//             {isDark ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
