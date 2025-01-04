import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import profile from '../assets/profile.jpeg'; // Make sure to replace this with your actual image path
const Hero = () => {
  const [animatedText, setAnimatedText] = useState("");

  const skills = [
    "Full Stack JavaScript Developer",
    "Spring Boot Backend Developer",
    "Flutter & Mobile Developer",
    "React Native Mobile Developer",
    "Cross-Platform Developer"
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/wicklife' },
    { icon: Linkedin, href: 'https://linkedin.com/in/wicklife' },
    { icon: Twitter, href: 'https://twitter.com/wicklife' },
    { icon: Facebook, href: 'https://facebook.com/wicklife' },
  ];

  useEffect(() => {
    let currentSkillIndex = 0;
    let skillInterval = setInterval(() => {
      setAnimatedText(skills[currentSkillIndex]);
      currentSkillIndex = (currentSkillIndex + 1) % skills.length;
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(skillInterval); // Clean up on unmount
  }, [skills]);

  return (
    <section className="hero-container bg-gradient-to-r from-slate-950 to-slate-800 text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Section - Text */}
        <div className=" flex flex-col text-center md:items-center lg:ml-20 lg:mt-20 space-y-6 md:max-w-lg">
          <p className='flex flex-row text-md md:text-xl items-center  text-slate-300'> Hello, I'm<h1 className="text-md md:text-xl md:ml-2 text-orange-600 font-bold">
            Wicklife Munene
          </h1>
          </p>
          <p className="text-xl font-medium">
            {animatedText}
          </p>
          <p className="text-md text-gray-200">
            I am a passionate developer & designer with expertise in creating innovative solutions using the latest web and mobile technologies. My focus is on delivering high-quality, scalable solutions while embracing a growth mindset.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#resume" className="bg-orange-700 border-2 border-slate-600 shadow-xl text-slate-800 text-sm px-2 py-1 lg:px-6  lg:py-2 rounded-full font-semibold transition-all hover:bg-slate-700 hover:translate-x-1 hover:text-white">
              View Resume
            </a>
            <a href="#about" className="bg-transparent shadow-xl border-2 border-white text-white text-sm px-2 py-1 lg:px-6  lg:py-2 rounded-full font-semibold transition-all hover:text-blue-600 hover:bg-orange-600 hover:translate-x-1">
              Know More
            </a>
            
          </div>

          {/* Social Media Icons */}
      <div className="mt-8 flex justify-center ">
        {socialLinks.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-orange-600 bg-slate-900 border-orange-500 mr-1 shadow-2xl hover:text-orange-400 border-2 p-2 transition-colors duration-300 hover:border-2 rounded-full hover:p-1"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
        </div>


      

        {/* Right Section - Profile Picture */}
        <div className="flex items-start  border-b-2 border-slate-400 lg:mr-40 justify-center w-48 h-48 lg:w-72 lg:h-72 md:w-64 md:h-64 rounded-full shadow-2xl hover:-translate-y-2 transition ease-in-out duration-300 ">
          
          <img src={profile} alt="Profile" className="mt-2 border-b-2 border-slate-500 w-64 h-64 md:w-52 md:h-52 lg:w-64 lg:h-64 shadow-lg rounded-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
