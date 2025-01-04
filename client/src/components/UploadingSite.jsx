import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  BookOpen, 
  Code2, 
  UserCircle, 
  Link as LinkIcon, 
  Github, 
  List, 
  AlertCircle,
  Image as ImageIcon,
  Upload
} from 'lucide-react';

const API_URL = 'http://localhost:5000/projects';

const UploadingSite = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    role: '',
    demoUrl: '',
    githubUrl: '',
    features: '',
    challenges: '',
    image: null
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, image: 'File size must be less than 10MB' }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      image: file
    }));
    setErrors(prev => ({ ...prev, image: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.technologies.trim()) newErrors.technologies = 'Technologies are required.';
    if (!formData.role.trim()) newErrors.role = 'Role is required.';
    if (!formData.features.trim()) newErrors.features = 'Features are required.';
    if (!formData.challenges.trim()) newErrors.challenges = 'Challenges are required.';
    if (!formData.image) newErrors.image = 'An image is required.';

    // URL validation
    if (formData.demoUrl && !isValidUrl(formData.demoUrl)) {
      newErrors.demoUrl = 'Please enter a valid URL';
    }
    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
      newErrors.githubUrl = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please correct the errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'image') {
        if (formData[key]) formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      console.log('Attempting to submit to:', API_URL);
      
      const response = await fetch(API_URL, {
        method: "POST",
        body: formDataToSend,
        // Add headers for proper CORS handling
        headers: {
          'Accept': 'application/json',
        },
        // Important: Don't set Content-Type header when using FormData
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', response.status, errorText);
        throw new Error(
          errorText ? `Server error: ${errorText}` : `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();
      console.log("Success:", result);
      setMessage("Project submitted successfully!");
      setFormData({
        title: "",
        description: "",
        technologies: "",
        role: "",
        demoUrl: "",
        githubUrl: "",
        features: "",
        challenges: "",
        image: null,
      });

    } catch (error) {
      console.error("Error submitting project:", error);
      let errorMessage;
      if (error.message.includes("Failed to fetch")) {
        errorMessage = "Unable to connect to the server. Please check if the backend server is running on port 5000.";
      } else {
        errorMessage = `Error: ${error.message}`;
      }
      setMessage(errorMessage);
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
            {/* Title Field */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                required
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Technologies Field */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <Code2 className="w-5 h-5 text-orange-500 mr-2" />
                Technologies
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.technologies ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                placeholder="React, Node.js, MongoDB"
                required
              />
              {errors.technologies && <p className="text-red-500 text-sm mt-1">{errors.technologies}</p>}
            </div>

            {/* Role and Demo URL Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                  <UserCircle className="w-5 h-5 text-orange-500 mr-2" />
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.role ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                  required
                />
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
              </div>

              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                  <LinkIcon className="w-5 h-5 text-orange-500 mr-2" />
                  Demo URL
                </label>
                <input
                  type="url"
                  name="demoUrl"
                  value={formData.demoUrl}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.demoUrl ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
                />
                {errors.demoUrl && <p className="text-red-500 text-sm mt-1">{errors.demoUrl}</p>}
              </div>
            </div>

            {/* GitHub URL Field */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <Github className="w-5 h-5 text-orange-500 mr-2" />
                GitHub URL
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.githubUrl ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition`}
              />
              {errors.githubUrl && <p className="text-red-500 text-sm mt-1">{errors.githubUrl}</p>}
            </div>

            {/* Features Field */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <List className="w-5 h-5 text-orange-500 mr-2" />
                Features
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.features ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition h-32`}
                required
                placeholder="One feature per line"
              />
              {errors.features && <p className="text-red-500 text-sm mt-1">{errors.features}</p>}
            </div>

            {/* Challenges Field */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
                Technical Challenges
              </label>
              <textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.challenges ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition h-32`}
                required
                placeholder="One challenge per line"
              />
              {errors.challenges && <p className="text-red-500 text-sm mt-1">{errors.challenges}</p>}
            </div>

            {/* Image Upload Field */}
            <div>
              <label className="flex items-center text-sm sm:text-base font-medium text-slate-700 mb-2">
                <ImageIcon className="w-5 h-5 text-orange-500 mr-2" />
                Project Image
              </label>
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${errors.image ? 'border-red-500' : 'border-slate-200'} border-dashed rounded-lg hover:border-orange-500 transition`}>
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-slate-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-orange-500 hover:text-orange-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
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
              + Add GProject
            </Link>
      </div>
    </div>
  );
};

export default UploadingSite;