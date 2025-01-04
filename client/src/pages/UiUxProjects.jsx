import React, { useState } from "react";

const API_URL = 'http://localhost:5000/uiux-projects';

const UiUxProjects = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    toolsUsed: "",
    role: "",
    clientName: "",
    projectType: "",
    userResearchSummary: "",
    personaDetails: "",
    wireframeUrls: "",
    prototypesUrl: "",
    designSystemsUsed: "",
    features: "",
    challenges: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Log the data being sent
      console.log('Sending data:', projectData);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData)
      });

      // Log the response status
      console.log('Response status:', response.status);

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit project');
      }

      setMessage('Project submitted successfully!');
      
      // Clear form
      setProjectData({
        title: "",
        description: "",
        toolsUsed: "",
        role: "",
        clientName: "",
        projectType: "",
        userResearchSummary: "",
        personaDetails: "",
        wireframeUrls: "",
        prototypesUrl: "",
        designSystemsUsed: "",
        features: "",
        challenges: "",
      });

    } catch (error) {
      console.error('Error submitting project:', error);
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add UI/UX Design Project</h2>
      
      {message && (
        <div className={`mb-4 p-4 rounded ${
          message.includes('success') 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={projectData.title}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={projectData.description}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <input
          type="text"
          name="toolsUsed"
          placeholder="Tools Used (e.g., Figma, Adobe XD)"
          value={projectData.toolsUsed}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <input
          type="text"
          name="role"
          placeholder="Your Role"
          value={projectData.role}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={projectData.clientName}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <input
          type="text"
          name="projectType"
          placeholder="Project Type (e.g., Mobile App, Website)"
          value={projectData.projectType}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="userResearchSummary"
          placeholder="User Research Summary"
          value={projectData.userResearchSummary}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="personaDetails"
          placeholder="Persona Details"
          value={projectData.personaDetails}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="wireframeUrls"
          placeholder="Wireframe URLs (comma-separated)"
          value={projectData.wireframeUrls}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <input
          type="text"
          name="prototypesUrl"
          placeholder="Prototype URL"
          value={projectData.prototypesUrl}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="designSystemsUsed"
          placeholder="Design Systems Used (comma-separated)"
          value={projectData.designSystemsUsed}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="features"
          placeholder="Features (new line-separated)"
          value={projectData.features}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        <textarea
          name="challenges"
          placeholder="Challenges (new line-separated)"
          value={projectData.challenges}
          onChange={handleChange}
          className="mb-3 p-2 border w-full"
        />
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`${
            isSubmitting 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white px-4 py-2 rounded transition-colors`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UiUxProjects;