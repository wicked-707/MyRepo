import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Star, 
  MapPin,
  User,
  Contact,
  FileText 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeSection = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const resumeData = {
    profile: {
      name: 'John Doe',
      title: 'Senior Software Developer',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      summary: 'Innovative and results-driven software developer with 6+ years of experience in creating scalable web applications and leading technical teams.',
      image: '/api/placeholder/300/300'
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          company: 'Tech Innovations Inc.',
          position: 'Senior Software Developer',
          duration: 'Jan 2022 - Present',
          responsibilities: [
            'Led development of scalable web applications',
            'Implemented microservices architecture',
            'Mentored junior developers and conducted code reviews'
          ]
        },
        {
          company: 'Digital Solutions LLC',
          position: 'Full Stack Developer',
          duration: 'Jun 2019 - Dec 2021',
          responsibilities: [
            'Developed responsive frontend applications',
            'Integrated backend services with RESTful APIs',
            'Optimized application performance'
          ]
        }
      ]
    },
    education: {
      title: 'Educational Background',
      items: [
        {
          institution: 'University of Technology',
          degree: 'Master of Computer Science',
          duration: '2017 - 2019',
          achievements: [
            'GPA: 3.8/4.0',
            'Research focus on machine learning',
            'Published research paper on AI algorithms'
          ]
        }
      ]
    },
    skills: {
      title: 'Technical Skills',
      items: [
        {
          category: 'Programming Languages',
          skills: ['JavaScript', 'Python', 'TypeScript', 'Java']
        },
        {
          category: 'Frameworks & Libraries',
          skills: ['React', 'Node.js', 'Express', 'Django']
        }
      ]
    },
    references: {
      title: 'Professional References',
      items: [
        {
          name: 'Jane Smith',
          position: 'CTO, Tech Innovations Inc.',
          contact: 'jane.smith@techinnovations.com',
          phone: '+1 (555) 987-6543'
        },
        {
          name: 'Michael Johnson',
          position: 'Senior Engineering Manager',
          contact: 'michael.johnson@digitalsolutions.com',
          phone: '+1 (555) 456-7890'
        }
      ]
    }
  };

  const sectionIcons = {
    profile: User,
    experience: Briefcase,
    education: GraduationCap,
    skills: Code,
    references: Contact
  };

  const renderContent = () => {
    const section = resumeData[activeSection];
    
    return (
      <motion.div 
        key={activeSection}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="p-6 bg-white/10 rounded-lg shadow-lg min-h-[600px]"
      >
        {activeSection === 'profile' && (
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
              <img 
                src={section.image} 
                alt={section.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-slate-800">{section.name}</h1>
            <p className="text-xl text-slate-600 mb-4">{section.title}</p>
            <div className="text-slate-700 space-y-2">
              <p>📧 {section.email}</p>
              <p>📱 {section.phone}</p>
              <p>📍 {section.location}</p>
            </div>
            <div className="mt-6 text-slate-700 max-w-xl">
              <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
              <p>{section.summary}</p>
            </div>
          </div>
        )}
        
        {activeSection === 'experience' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">
              {section.title}
            </h2>
            {section.items.map((exp, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0">
                <h3 className="text-xl font-semibold text-slate-800">{exp.position}</h3>
                <p className="text-slate-600">{exp.company}</p>
                <p className="text-sm text-slate-500 mb-3">{exp.duration}</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="pl-2">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {activeSection === 'education' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">
              {section.title}
            </h2>
            {section.items.map((edu, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0">
                <h3 className="text-xl font-semibold text-slate-800">{edu.degree}</h3>
                <p className="text-slate-600">{edu.institution}</p>
                <p className="text-sm text-slate-500 mb-3">{edu.duration}</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  {edu.achievements.map((ach, i) => (
                    <li key={i} className="pl-2">{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {activeSection === 'skills' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">
              {section.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((skillGroup, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-slate-800 border-b border-orange-200 pb-2">
                    {skillGroup.category}
                  </h3>
                  <ul className="text-slate-700 space-y-2">
                    {skillGroup.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-orange-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeSection === 'references' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-2">
              {section.title}
            </h2>
            {section.items.map((ref, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-slate-200 last:border-b-0">
                <h3 className="text-xl font-semibold text-slate-800">{ref.name}</h3>
                <p className="text-slate-600">{ref.position}</p>
                <div className="text-slate-700 mt-2 space-y-1">
                  <p>📧 {ref.contact}</p>
                  <p>📱 {ref.phone}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-slate-400 rounded-2xl shadow-2xl flex overflow-hidden">
        {/* Slim Sidebar */}
        <div className="w-24 bg-slate-900 text-white p-4 space-y-2 flex flex-col items-center">
          {Object.keys(resumeData).map((section) => {
            const Icon = sectionIcons[section];
            return (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full p-2 rounded-lg transition-all duration-300 flex flex-col items-center ${
                  activeSection === section 
                    ? 'bg-white/20 text-white' 
                    : 'hover:bg-white/10 text-white/80'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs capitalize">{section}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence>
            {renderContent()}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;