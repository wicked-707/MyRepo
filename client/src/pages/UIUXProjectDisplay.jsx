import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Pencil, 
  Users, 
  Lightbulb, 
  Layout, 
  Wrench, 
  Building,
  Link as LinkIcon
} from 'lucide-react';

const UIUXProjectsDisplay = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/uiux-projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">UI/UX Design Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                {project.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Building size={16} />
                <span>Client: {project.client_name}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Description */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Pencil size={16} />
                  Description
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Users size={16} />
                  Role
                </h3>
                <p className="text-gray-600">{project.role}</p>
              </div>

              {/* Tools Used */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Wrench size={16} />
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.tools_used) ? (
                    project.tools_used.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-600">No tools listed</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Layout size={16} />
                  Key Features
                </h3>
                <p className="text-gray-600">{project.features}</p>
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Lightbulb size={16} />
                  Challenges
                </h3>
                <p className="text-gray-600">{project.challenges}</p>
              </div>

              {/* Links */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <LinkIcon size={16} />
                  Project Links
                </h3>
                <div className="flex flex-col gap-2">
                  {project.wireframe_urls && (
                    <a 
                      href={project.wireframe_urls}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Wireframes
                    </a>
                  )}
                  {project.prototypes_url && (
                    <a 
                      href={project.prototypes_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Prototype
                    </a>
                  )}
                </div>
              </div>

              {/* Design Systems */}
              <div className="space-y-2">
                <h3 className="font-semibold">Design Systems Used</h3>
                <p className="text-gray-600">{project.design_systems_used}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UIUXProjectsDisplay;
