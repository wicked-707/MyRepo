import React, { useState } from 'react';
import { 
  FilePlus, 
  Trash2, 
  Edit, 
  Save, 
  Image as ImageIcon 
} from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectUpload = ({ specialization, type }) => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({
    title: '',
    description: '',
    technologies: '',
    githubLink: '',
    liveLink: '',
    images: [],
    specialization: specialization
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setCurrentProject(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  const addProject = () => {
    if (editingIndex !== null) {
      // Update existing project
      const updatedProjects = [...projects];
      updatedProjects[editingIndex] = currentProject;
      setProjects(updatedProjects);
      setEditingIndex(null);
    } else {
      // Add new project
      setProjects([...projects, currentProject]);
    }
    
    // Reset form
    setCurrentProject({
      title: '',
      description: '',
      technologies: '',
      githubLink: '',
      liveLink: '',
      images: [],
      specialization: specialization
    });
  };

  const editProject = (index) => {
    setCurrentProject(projects[index]);
    setEditingIndex(index);
  };

  const deleteProject = (index) => {
    const filteredProjects = projects.filter((_, i) => i !== index);
    setProjects(filteredProjects);
  };

  const removeImage = (imageIndex) => {
    const filteredImages = currentProject.images.filter((_, i) => i !== imageIndex);
    setCurrentProject(prev => ({
      ...prev,
      images: filteredImages
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        {specialization.replace('-', ' ').toUpperCase()} Projects
      </h2>
      
      {/* Project Upload Form */}
      <form className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={currentProject.title}
            onChange={handleInputChange}
            placeholder="Project Title"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="technologies"
            value={currentProject.technologies}
            onChange={handleInputChange}
            placeholder="Technologies Used (comma-separated)"
            className="w-full p-2 border rounded"
          />
        </div>
        
        <textarea
          name="description"
          value={currentProject.description}
          onChange={handleInputChange}
          placeholder="Project Description"
          className="w-full p-2 border rounded h-24"
        />
        
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="githubLink"
            value={currentProject.githubLink}
            onChange={handleInputChange}
            placeholder="GitHub Repository Link"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="liveLink"
            value={currentProject.liveLink}
            onChange={handleInputChange}
            placeholder="Live Project Link"
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Image Upload */}
        <div>
          <label className="block mb-2">Project Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
          
          {/* Image Preview */}
          <div className="flex flex-wrap gap-2 mt-2">
            {currentProject.images.map((image, index) => (
              <div key={index} className="relative">
                <img 
                  src={image} 
                  alt={`Project ${index}`} 
                  className="w-24 h-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Add/Update Button */}
        <button
          type="button"
          onClick={addProject}
          className="bg-blue-600 text-white p-2 rounded flex items-center"
        >
          {editingIndex !== null ? <Save className="mr-2" /> : <FilePlus className="mr-2" />}
          {editingIndex !== null ? 'Update Project' : 'Add Project'}
        </button>
      </form>
      
      {/* Projects List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Existing Projects</h3>
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div>
              <h4 className="font-bold">{project.title}</h4>
              <p className="text-sm text-gray-600">{project.technologies}</p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => editProject(index)}
                className="text-blue-600 hover:bg-blue-100 p-2 rounded"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button 
                onClick={() => deleteProject(index)}
                className="text-red-600 hover:bg-red-100 p-2 rounded"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectUpload;