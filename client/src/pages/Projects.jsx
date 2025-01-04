import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Layout, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("software");
  const [isHovered, setIsHovered] = useState(null);

  // Auto-change tabs every 15 seconds
  useEffect(() => {
    const tabs = ["software", "graphics", "uiux"];
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextIndex = (tabs.indexOf(prevTab) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const projects = {
    software: [
      { 
        id: 1, 
        name: "E-commerce Platform", 
        description: "A modern e-commerce platform with real-time inventory management.",
        tag: "Full Stack",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 2, 
        name: "Task Management Pro", 
        description: "Advanced task management with team collaboration features.",
        tag: "React & Node.js",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 3, 
        name: "Smart Home Dashboard", 
        description: "IoT dashboard for monitoring and controlling smart home devices.",
        tag: "IoT",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 4, 
        name: "Social Media Analytics", 
        description: "Real-time analytics dashboard for social media platforms.",
        tag: "Data Analysis",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 5, 
        name: "AI Content Generator", 
        description: "ML-powered platform for generating marketing content.",
        tag: "AI/ML",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 6, 
        name: "Crypto Trading Bot", 
        description: "Automated cryptocurrency trading system with analytics.",
        tag: "Blockchain",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    graphics: [
      { 
        id: 1, 
        name: "Tech Brand Identity", 
        description: "Complete brand identity design for a tech startup.",
        tag: "Branding",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 2, 
        name: "Event Campaign", 
        description: "Full marketing campaign design for tech conference.",
        tag: "Marketing",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 3, 
        name: "3D Product Renders", 
        description: "Photorealistic 3D renders for product launches.",
        tag: "3D Design",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 4, 
        name: "Motion Graphics", 
        description: "Animated explainer videos for products and services.",
        tag: "Animation",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 5, 
        name: "Social Media Kit", 
        description: "Complete social media template package for businesses.",
        tag: "Social Media",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 6, 
        name: "NFT Collection", 
        description: "Digital art collection for blockchain marketplace.",
        tag: "Digital Art",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    uiux: [
      { 
        id: 1, 
        name: "Finance App", 
        description: "Mobile banking application with focus on user experience.",
        tag: "Mobile",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 2, 
        name: "Healthcare Platform", 
        description: "Telemedicine platform with accessibility features.",
        tag: "Web App",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 3, 
        name: "Learning Management", 
        description: "Educational platform with gamification elements.",
        tag: "EdTech",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 4, 
        name: "Travel Booking", 
        description: "Travel planning and booking platform redesign.",
        tag: "Travel",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 5, 
        name: "Fitness Tracker", 
        description: "Workout tracking app with social features.",
        tag: "Health",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      },
      { 
        id: 6, 
        name: "Food Delivery", 
        description: "Restaurant ordering system with real-time tracking.",
        tag: "Food Tech",
        image: "/api/placeholder/480/320",
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
  };

  const tabIcons = {
    software: <Code className="w-5 h-5" />,
    graphics: <Palette className="w-5 h-5" />,
    uiux: <Layout className="w-5 h-5" />
  };

  const renderProjects = (type) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden p-4">
      <AnimatePresence mode="wait">
        {projects[type]?.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(project.id)}
            onHoverEnd={() => setIsHovered(null)}
            className="relative group"
          >
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Overlay with links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4"
                >
                  <a 
                    href={project.demoUrl} 
                    className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    title="View Code"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.name}
                  </h3>
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                    {project.tag}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-blue-500 origin-left"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore my creative works across different domains
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(projects).map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              <span className="mr-2">{tabIcons[tab]}</span>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {renderProjects(activeTab)}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;