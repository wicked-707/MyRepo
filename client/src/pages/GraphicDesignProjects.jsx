import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Code2, 
  UserCircle, 
  Link as LinkIcon, 
  List, 
  AlertCircle,
  Upload
} from 'lucide-react';

const API_URL = 'http://localhost:5000/graphics';

const GraphicDesignProjects = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    toolsUsed: '',
    role: '',
    clientName: '',
    projectType: '',
    imageUrls: '',
    inspirationSources: '',
    features: '',
    challenges: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['title', 'toolsUsed', 'role', 'features', 'challenges'];
    
    requiredFields.forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please correct the errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setMessage("Project submitted successfully!");
      setFormData({
        title: "",
        description: "",
        toolsUsed: "",
        role: "",
        clientName: "",
        projectType: "",
        imageUrls: "",
        inspirationSources: "",
        features: "",
        challenges: "",
      });

    } catch (error) {
      console.error("Error submitting project:", error);
      setMessage(error.message.includes("Failed to fetch")
        ? "Unable to connect to the server. Please check if the backend server is running on port 5000."
        : `Error: ${error.message}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Project Showcase
          </h1>
          <p className="text-lg sm:text-xl text-slate-600">
            Share your amazing project with the world
          </p>
        </div>

        {message && (
          <div className={`mb-4 p-4 text-sm rounded-lg ${
            message.includes("success") ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="space-y-6">
            {/* Project Title */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
                Project Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                placeholder="Enter project title"
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Project Description */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <List className="w-5 h-5 text-orange-500 mr-2" />
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition h-32"
                placeholder="Describe your project"
              />
            </div>

            {/* Tools Used */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <Code2 className="w-5 h-5 text-orange-500 mr-2" />
                Tools Used *
              </label>
              <input
                type="text"
                name="toolsUsed"
                value={formData.toolsUsed}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.toolsUsed ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                placeholder="Photoshop, Illustrator, Figma, etc."
              />
              {errors.toolsUsed && <p className="text-red-500 text-sm mt-1">{errors.toolsUsed}</p>}
            </div>

            {/* Role and Client Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                  <UserCircle className="w-5 h-5 text-orange-500 mr-2" />
                  Role *
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.role ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                  placeholder="Lead Designer"
                />
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
              </div>

              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                  <UserCircle className="w-5 h-5 text-orange-500 mr-2" />
                  Client Name
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Client or company name"
                />
              </div>
            </div>

            {/* Project Type and Image URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                  <List className="w-5 h-5 text-orange-500 mr-2" />
                  Project Type
                </label>
                <input
                  type="text"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="Branding, UI/UX, Print, etc."
                />
              </div>

              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                  <LinkIcon className="w-5 h-5 text-orange-500 mr-2" />
                  Image URL
                </label>
                <input
                  type="url"
                  name="imageUrls"
                  value={formData.imageUrls}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            {/* Inspiration Sources */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <List className="w-5 h-5 text-orange-500 mr-2" />
                Inspiration Sources
              </label>
              <textarea
                name="inspirationSources"
                value={formData.inspirationSources}
                onChange={handleChange}
                className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition h-32"
                placeholder="List your inspiration sources"
              />
            </div>

            {/* Features */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <List className="w-5 h-5 text-orange-500 mr-2" />
                Features *
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.features ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition h-32`}
                placeholder="List the key features of your project"
              />
              {errors.features && <p className="text-red-500 text-sm mt-1">{errors.features}</p>}
            </div>

            {/* Challenges */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
                Technical Challenges *
              </label>
              <textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.challenges ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition h-32`}
                placeholder="Describe the technical challenges you faced"
              />
              {errors.challenges && <p className="text-red-500 text-sm mt-1">{errors.challenges}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white 
                ${isSubmitting 
                  ? 'bg-orange-300 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600'} 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition`}
            >
              <Upload className={`w-5 h-5 mr-2 ${isSubmitting && 'animate-pulse'}`} />
              {isSubmitting ? 'Submitting...' : 'Submit Project'}
            </button>
          </div>
        </form>

        <Link 
          to="/view-projects" 
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        >
          + Add Project
        </Link>
      </div>
    </div>
  );
};

export default GraphicDesignProjects;