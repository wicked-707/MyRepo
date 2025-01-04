import React, { useEffect, useRef } from 'react';
import { Database, Layout, Brain, Server, Palette, Code, Globe } from 'lucide-react';

const SkillsSection = () => {
  const progressRefs = useRef([]);

  const skillCategories = [
    {
      category: "Development Skills",
      icon: Code,
      skills: [
        { name: "Frontend Development", subskills: [
          { name: "React.js", level: 90 },
          { name: "JavaScript/TypeScript", level: 85 },
          { name: "HTML5/CSS3", level: 95 },
          { name: "Tailwind CSS", level: 88 }
        ]},
        { name: "Backend Development", subskills: [
          { name: "Node.js", level: 82 },
          { name: "Python", level: 78 },
          { name: "Java", level: 75 },
          { name: "REST APIs", level: 85 }
        ]},
        { name: "Database Management", subskills: [
          { name: "MongoDB", level: 80 },
          { name: "PostgreSQL", level: 85 },
          { name: "Redis", level: 70 },
          { name: "MySQL", level: 75 }
        ]}
      ]
    },
    {
      category: "UI/UX Skills",
      icon: Palette,
      skills: [
        { name: "Design Tools", subskills: [
          { name: "Figma", level: 85 },
          { name: "Adobe XD", level: 80 },
          { name: "Sketch", level: 75 }
        ]},
        { name: "Design Concepts", subskills: [
          { name: "User Research", level: 88 },
          { name: "Wireframing", level: 90 },
          { name: "Prototyping", level: 85 }
        ]},
        { name: "Visual Design", subskills: [
          { name: "Color Theory", level: 85 },
          { name: "Typography", level: 82 },
          { name: "Layout Design", level: 88 }
        ]}
      ]
    }
  ];

  const additionalSkills = [
    { name: "Git & Version Control", level: 85 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 82 },
    { name: "Agile Methodologies", level: 88 },
    { name: "Test-Driven Development", level: 78 },
    { name: "Performance Optimization", level: 85 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Bringing creative solutions to life through technology and design
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category} className="space-y-8">
              <div className="flex items-center space-x-4">
                <category.icon className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-semibold text-white">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.skills.map((skillGroup, groupIndex) => (
                  <div key={skillGroup.name} className="bg-slate-800 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">{skillGroup.name}</h4>
                    <div className="space-y-4">
                      {skillGroup.subskills.map((skill, skillIndex) => {
                        const refIndex = catIndex * 100 + groupIndex * 10 + skillIndex;
                        return (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-300">{skill.name}</span>
                              <span className="text-orange-500">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                              <div
                                ref={el => progressRefs.current[refIndex] = el}
                                data-width={`${skill.level}%`}
                                className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full opacity-0 transition-all duration-1000 ease-out w-0"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800 rounded-xl p-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-orange-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      ref={el => progressRefs.current[1000 + index] = el}
                      data-width={`${skill.level}%`}
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full opacity-0 transition-all duration-1000 ease-out w-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;