import React, { useState } from "react";
import Dashboard from "../pages/Dashboard"; // Import default content (Dashboard)
import ProjectsDisplay from "../pages/ProjectsDisplay"; // Example content for Software Projects
import Saysomething from "../pages/SaySomething"; // Example content for Graphics Projects
import UIUXProjectDisplay from "../pages/UIUXProjectDisplay"; // Example content for UI/UX Projects
import myLogo from "../assets/myLogo.png";
import UIUXProjectsDisplay from "../pages/UIUXProjectDisplay";

const Admin = () => {
  const [activeContent, setActiveContent] = useState("dashboard");

  // Function to handle button clicks and set active content
  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full w-screen bg-slate-200 text-white">
      <div className="flex flex-row w-screen items-center bg-slate-950 justify-between">
        <a href="#" className="text-3xl ml-12 font-bold text-gray-300 ">
          <img src={myLogo} alt="Logo" className="w-40 h-16" />
        </a>
        <div className="flex flex-row items-center justify-center pr-4">
          <button className="p-2 mr-3 w-6 h-6 rounded-full bg-red-400"></button>
          <button className="px-2 mr-3 py-1 w-16 h-8 rounded-3xl bg-gray-200 "></button>
        </div>
      </div>

      {/* Sidebar & Display Area */}
      <div className="flex flex-row w-screen ">
        {/* Sidebar */}
        <div className="flex flex-col p-6 sticky pt-12 h w-1/6 bg-slate-950">
          <button
            onClick={() => handleButtonClick("dashboard")}
            className="border-b sticky border-orange-400 rounded-full pl-3 shadow-xl hover:text-orange-500 hover:translate-x-1 transition duration-300 mb-4"
          >
            Dashboard
          </button>
          <div className="flex flex-col border-t border-slate-200 mt-5">
            <button
              onClick={() => handleButtonClick("projectsDisplay")}
              className="border-b border-orange-400 rounded-full pl-3 shadow-xl mt-3 hover:text-orange-500 hover:translate-x-1 transition duration-300"
            >
              Software Dev Projects
            </button>
            <button
              onClick={() => handleButtonClick("saysomething")}
              className="border-b border-orange-400 rounded-full pl-3 shadow-xl mt-3 hover:text-orange-500 hover:translate-x-1 transition duration-300"
            >
              View Graphics Projects
            </button>
            <button
              onClick={() => handleButtonClick("uiuxProjectsDisplay")}
              className="border-b border-orange-400 rounded-full pl-3 shadow-xl mt-3 hover:text-orange-500 hover:translate-x-1 transition duration-300"
            >
              UI/UX Projects
            </button>
          </div>
        </div>

        {/* Display Area - Dynamically Rendered Content */}
        <div className="flex p-8 bg-white w-5/6">
          {/* Render the active content based on the state */}
          {activeContent === "dashboard" && <Dashboard />}
          {activeContent === "projectsDisplay" && <ProjectsDisplay />}
          {activeContent === "saySomething" && <Saysomething />}
          {activeContent === "uiuxProjectsDisplay" && <UIUXProjectsDisplay />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
