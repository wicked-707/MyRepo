import React from 'react';
import profile from '../assets/profile.jpeg';
// import about from '../assets/about.png'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-slate-50 text-slate-700 '>

        {/* Heading Container */}
      <div className='flex flex-col items-center justify-center'>
        {/* <img src={about} alt="" className='h-10 mb-3' /> */}
        <h1 className='text-4xl font-sans font-bold mb-4'>About Me</h1>
        <p className='text-lg mb-4 font-medium'>Why choose me?</p>
        <div className='flex flex-row items-center justify-center'>
            <div className='w-16 h-0.5 bg-slate-800 rounded-l-full'></div>
            <div className='h-3 w-8 bg-orange-600 rounded-3xl'></div>
            <div className='w-16 h-0.5 bg-slate-800 rounded-r-full'></div>
        </div>
      </div>

      {/* Photo & About Container */}

      <div className='flex flex-row items-center justify-center h-[550px] w-[870px]  shadow-2xl mb-20 mt-10 rounded-lg' >
        <div className='w-1/2 h-full items-center justify-center'>
        <img src={profile} alt="Profile" className="w-full h-full rounded-l-lg" />
        </div>
        {/* about section */}
        <div className='w-1/2 flex flex-col items-start justify-start pl-5'>
            {/* simple description */}
            <div className='mb-20'>
                <p>I am a passionate developer with expertise in creating innovative solutions 
                    using the latest web and mobile technologies. My focus is on delivering high-quality, 
                    scalable solutions while embracing a growth mindset.
                </p>
            </div>

            {/* Highlights*/}
            <div className='mb-20'>
                <p className='font-medium mb-1'>Here are some few Highlights:</p>
                <ul className='pl-2 font-san '>
                    <li className='flex flex-row items-center'> <div className='h-3 w-3 mr-2 bg-orange-600 rounded-full'></div>Full Stack JavaScript Developer </li>
                    <li className='flex flex-row items-center'><div className='h-3 w-3 mr-2 bg-orange-600 rounded-full'></div>Spring Boot Backend Developer </li>
                    <li className='flex flex-row items-center'><div className='h-3 w-3 mr-2 bg-orange-600 rounded-full'></div>Flutter & Mobile Developer </li>
                    <li className='flex flex-row items-center'><div className='h-3 w-3 mr-2 bg-orange-600 rounded-full'></div>React Native Mobile Developer </li>
                    <li className='flex flex-row items-center'><div className='h-3 w-3 mr-2 bg-orange-600 rounded-full'></div>Cross-Platform Developer </li>           
                </ul>
            </div>
            {/* Buttons */}
            <div className='mb-18'>
                <button className='bg-gradient-to-r from-slate-900 to-slate-700 py-2 px-10 rounded-full shadow-2xl text-slate-300 font-serif font-medium border border-slate-700 hover:bg-red-600 transition ease-in-out duration-300 hover:text-slate-950' type="button">Get Resume</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
