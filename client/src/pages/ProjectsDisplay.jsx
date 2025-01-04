import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const API_URL = 'http://localhost:5000/projects';

const ProjectsDisplay = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(API_URL); // Replace with your actual API URL if needed
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-medium mt-12">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-12">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {project.has_image && (
                <div className="h-48 bg-gray-200 flex justify-center items-center">
                  <img
                    src={`http://localhost:5000/projects/${project.id}/image`}
                    alt={`${project.title}`}
                    className="object-cover h-full w-full"
                  />


                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="font-medium text-gray-700">Technologies:</span>{" "}
                  {Array.isArray(project.technologies)
                    ? project.technologies.join(', ') // Converts ['reactjs', 'nodejs'] to "reactjs, nodejs"
                    : project.technologies || 'N/A'} // Fallback if undefined or empty
                </div>

                <div className="mb-4">
                  <span className="font-medium text-gray-700">Role:</span>{" "}
                  {project.role || 'N/A'} // Fallback if undefined or empty
                </div>

                <div className="flex justify-between items-center">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
                <div className="mt-4 text-gray-500 text-sm">
                  <span>Challenges:</span> {project.challenges}
                </div>
                <div className="mt-2 text-gray-500 text-sm">
                  <span>Features:</span> {project.features}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;
