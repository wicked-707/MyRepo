// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   Code, 
//   Palette, 
//   Monitor, 
//   Plus, 
//   Edit, 
//   Trash2 
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// const BackofficeDashboard = () => {
//   const [activeSection, setActiveSection] = useState('dashboard');

//   const sections = [
//     {
//       name: 'Software Development',
//       icon: Code,
//       categories: [
//         'Web Development',
//         'Mobile Applications',
//         'Backend Systems',
//         'Full Stack Projects'
//       ]
//     },
//     {
//       name: 'Graphics Design',
//       icon: Palette,
//       categories: [
//         'Branding',
//         'Digital Illustrations',
//         'Marketing Materials',
//         'Graphic Layouts'
//       ]
//     },
//     {
//       name: 'UI/UX Design',
//       icon: Monitor,
//       categories: [
//         'User Interface Design',
//         'User Experience Research',
//         'Wireframing',
//         'Prototype Design'
//       ]
//     }
//   ];

//   const renderDashboardContent = () => (
//     <div className="grid md:grid-cols-3 gap-6">
//       {sections.map((section) => (
//         <Card key={section.name} className="hover:shadow-lg transition-shadow">
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">{section.name}</CardTitle>
//             <section.icon className="h-6 w-6 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               {section.categories.map((category) => (
//                 <div 
//                   key={category} 
//                   className="flex justify-between items-center bg-secondary/50 p-2 rounded"
//                 >
//                   <span>{category}</span>
//                   <div className="flex space-x-2">
//                     <Button size="sm" variant="outline">
//                       <Plus className="h-4 w-4 mr-2" /> Add
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );

//   const ProjectUploadForm = () => {
//     const [projectType, setProjectType] = useState('web');

//     const projectFields = {
//       web: [
//         { name: 'Project Name', type: 'text' },
//         { name: 'Technologies Used', type: 'text' },
//         { name: 'GitHub Link', type: 'url' },
//         { name: 'Live Demo', type: 'url' },
//         { name: 'Description', type: 'textarea' }
//       ],
//       mobile: [
//         { name: 'App Name', type: 'text' },
//         { name: 'Platform', type: 'select', options: ['iOS', 'Android', 'Cross-Platform'] },
//         { name: 'Technologies', type: 'text' },
//         { name: 'App Store Link', type: 'url' },
//         { name: 'Description', type: 'textarea' }
//       ]
//     };

//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>Project Upload</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="flex space-x-4">
//               <Button 
//                 variant={projectType === 'web' ? 'default' : 'outline'}
//                 onClick={() => setProjectType('web')}
//               >
//                 Web Projects
//               </Button>
//               <Button 
//                 variant={projectType === 'mobile' ? 'default' : 'outline'}
//                 onClick={() => setProjectType('mobile')}
//               >
//                 Mobile Projects
//               </Button>
//             </div>

//             <form className="space-y-4">
//               {projectFields[projectType].map((field) => (
//                 <div key={field.name} className="grid grid-cols-4 items-center gap-4">
//                   <label className="text-right">{field.name}</label>
//                   {field.type === 'textarea' ? (
//                     <textarea 
//                       className="col-span-3 border p-2 rounded"
//                       rows={4}
//                     />
//                   ) : field.type === 'select' ? (
//                     <select className="col-span-3 border p-2 rounded">
//                       {field.options.map((option) => (
//                         <option key={option} value={option}>{option}</option>
//                       ))}
//                     </select>
//                   ) : (
//                     <input 
//                       type={field.type} 
//                       className="col-span-3 border p-2 rounded" 
//                     />
//                   )}
//                 </div>
//               ))}

//               <div className="flex justify-end space-x-4">
//                 <Button variant="secondary">Cancel</Button>
//                 <Button>Upload Project</Button>
//               </div>
//             </form>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   };

//   const SkillsUploadForm = () => {
//     const skillCategories = {
//       'Software Development': [
//         'Programming Languages',
//         'Frameworks',
//         'Tools & Technologies'
//       ],
//       'Graphics Design': [
//         'Design Software',
//         'Design Techniques',
//         'Design Styles'
//       ],
//       'UI/UX Design': [
//         'Design Tools',
//         'Design Principles',
//         'Research Methods'
//       ]
//     };

//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>Skills Management</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="grid md:grid-cols-3 gap-4">
//               {Object.entries(skillCategories).map(([domain, categories]) => (
//                 <div key={domain} className="border rounded p-4">
//                   <h3 className="font-semibold mb-3">{domain}</h3>
//                   {categories.map((category) => (
//                     <div key={category} className="mb-2">
//                       <h4 className="text-sm font-medium">{category}</h4>
//                       <div className="flex">
//                         <input 
//                           type="text" 
//                           placeholder="Add Skill" 
//                           className="border p-2 rounded-l flex-grow" 
//                         />
//                         <Button variant="outline" className="rounded-l-none">
//                           <Plus className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   };

//   const ExperienceUploadForm = () => {
//     const experienceTypes = {
//       'Software Development': [
//         'Professional Experience',
//         'Freelance Projects',
//         'Open Source Contributions'
//       ],
//       'Graphics Design': [
//         'Client Work',
//         'Design Competitions',
//         'Personal Projects'
//       ],
//       'UI/UX Design': [
//         'Professional Roles',
//         'Design Consultancy',
//         'Research Projects'
//       ]
//     };

//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>Experience Management</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="grid md:grid-cols-3 gap-4">
//               {Object.entries(experienceTypes).map(([domain, categories]) => (
//                 <div key={domain} className="border rounded p-4">
//                   <h3 className="font-semibold mb-3">{domain}</h3>
//                   {categories.map((category) => (
//                     <div key={category} className="mb-4">
//                       <h4 className="text-sm font-medium mb-2">{category}</h4>
//                       <Button variant="outline" className="w-full">
//                         <Plus className="h-4 w-4 mr-2" /> Add {category}
//                       </Button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto py-10">
//         <div className="flex space-x-6">
//           {/* Sidebar Navigation */}
//           <div className="w-64 space-y-2">
//             <Button 
//               variant={activeSection === 'dashboard' ? 'default' : 'ghost'}
//               className="w-full justify-start"
//               onClick={() => setActiveSection('dashboard')}
//             >
//               <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
//             </Button>
//             <Button 
//               variant={activeSection === 'projects' ? 'default' : 'ghost'}
//               className="w-full justify-start"
//               onClick={() => setActiveSection('projects')}
//             >
//               <Code className="mr-2 h-4 w-4" /> Projects
//             </Button>
//             <Button 
//               variant={activeSection === 'skills' ? 'default' : 'ghost'}
//               className="w-full justify-start"
//               onClick={() => setActiveSection('skills')}
//             >
//               <Palette className="mr-2 h-4 w-4" /> Skills
//             </Button>
//             <Button 
//               variant={activeSection === 'experience' ? 'default' : 'ghost'}
//               className="w-full justify-start"
//               onClick={() => setActiveSection('experience')}
//             >
//               <Monitor className="mr-2 h-4 w-4" /> Experience
//             </Button>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-grow">
//             {activeSection === 'dashboard' && renderDashboardContent()}
//             {activeSection === 'projects' && <ProjectUploadForm />}
//             {activeSection === 'skills' && <SkillsUploadForm />}
//             {activeSection === 'experience' && <ExperienceUploadForm />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackofficeDashboard;

// // import React, { useState } from 'react';
// // import { 
// //   Code, 
// //   Palette, 
// //   Layout, 
// //   FolderPlus, 
// //   Star, 
// //   Briefcase, 
// //   Menu, 
// //   X 
// // } from 'lucide-react';
// // import { motion } from 'framer-motion';
// // import ProjectUpload from './ProjectUpload';
// // import SkillsUpload from './SkillsUpload';
// // import ExperienceUpload from './ExperienceUpload';

// // const BackofficeDashboard = () => {
// //   const [activeSection, setActiveSection] = useState('dashboard');
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const sections = [
// //     { 
// //       id: 'dashboard', 
// //       name: 'Dashboard', 
// //       icon: Menu 
// //     },
// //     { 
// //       id: 'software-projects', 
// //       name: 'Software Projects', 
// //       icon: Code,
// //       uploadComponent: ProjectUpload,
// //       specialization: 'software-development'
// //     },
// //     { 
// //       id: 'software-skills', 
// //       name: 'Software Skills', 
// //       icon: Code,
// //       uploadComponent: SkillsUpload,
// //       specialization: 'software-development'
// //     },
// //     { 
// //       id: 'software-experience', 
// //       name: 'Software Experience', 
// //       icon: Briefcase,
// //       uploadComponent: ExperienceUpload,
// //       specialization: 'software-development'
// //     },
// //     { 
// //       id: 'design-projects', 
// //       name: 'Design Projects', 
// //       icon: Palette,
// //       uploadComponent: ProjectUpload,
// //       specialization: 'graphics-design'
// //     },
// //     { 
// //       id: 'design-skills', 
// //       name: 'Design Skills', 
// //       icon: Palette,
// //       uploadComponent: SkillsUpload,
// //       specialization: 'graphics-design'
// //     },
// //     { 
// //       id: 'design-experience', 
// //       name: 'Design Experience', 
// //       icon: Briefcase,
// //       uploadComponent: ExperienceUpload,
// //       specialization: 'graphics-design'
// //     },
// //     { 
// //       id: 'ui-ux-projects', 
// //       name: 'UI/UX Projects', 
// //       icon: Layout,
// //       uploadComponent: ProjectUpload,
// //       specialization: 'ui-ux-design'
// //     },
// //     { 
// //       id: 'ui-ux-skills', 
// //       name: 'UI/UX Skills', 
// //       icon: Layout,
// //       uploadComponent: SkillsUpload,
// //       specialization: 'ui-ux-design'
// //     },
// //     { 
// //       id: 'ui-ux-experience', 
// //       name: 'UI/UX Experience', 
// //       icon: Briefcase,
// //       uploadComponent: ExperienceUpload,
// //       specialization: 'ui-ux-design'
// //     }
// //   ];

// //   const renderContent = () => {
// //     if (activeSection === 'dashboard') {
// //       return (
// //         <div className="p-6 bg-white rounded-lg shadow-md">
// //           <h1 className="text-3xl font-bold mb-6 text-gray-800">Back Office Dashboard</h1>
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {sections.filter(section => section.id !== 'dashboard').map((section) => (
// //               <motion.div 
// //                 key={section.id}
// //                 whileHover={{ scale: 1.05 }}
// //                 className="bg-gray-100 p-4 rounded-lg flex items-center cursor-pointer"
// //                 onClick={() => setActiveSection(section.id)}
// //               >
// //                 <section.icon className="mr-4 w-10 h-10 text-blue-600" />
// //                 <div>
// //                   <h2 className="text-xl font-semibold">{section.name}</h2>
// //                   <p className="text-sm text-gray-600">Manage {section.name.toLowerCase()}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       );
// //     }

// //     const activeTab = sections.find(section => section.id === activeSection);
// //     const UploadComponent = activeTab?.uploadComponent;

// //     return UploadComponent ? (
// //       <UploadComponent 
// //         specialization={activeTab.specialization} 
// //         type={activeSection.split('-').slice(-1)[0]} 
// //       />
// //     ) : null;
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex">
// //       {/* Mobile Menu Toggle */}
// //       <div className="md:hidden fixed top-4 left-4 z-50">
// //         <button 
// //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           className="bg-blue-600 text-white p-2 rounded-lg"
// //         >
// //           {isMobileMenuOpen ? <X /> : <Menu />}
// //         </button>
// //       </div>

// //       {/* Sidebar */}
// //       <div className={`
// //         ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
// //         md:translate-x-0 fixed md:relative z-40 md:z-0 w-64 h-full 
// //         bg-white shadow-lg transition-transform duration-300 ease-in-out
// //         top-0 left-0 md:block
// //       `}>
// //         <div className="p-6 border-b">
// //           <h1 className="text-2xl font-bold text-gray-800">Back Office</h1>
// //         </div>
// //         <nav className="p-4">
// //           {sections.map((section) => {
// //             const Icon = section.icon;
// //             return (
// //               <motion.button
// //                 key={section.id}
// //                 onClick={() => {
// //                   setActiveSection(section.id);
// //                   setIsMobileMenuOpen(false);
// //                 }}
// //                 whileHover={{ scale: 1.05 }}
// //                 className={`
// //                   w-full flex items-center p-3 rounded-lg mb-2 
// //                   ${activeSection === section.id 
// //                     ? 'bg-blue-600 text-white' 
// //                     : 'hover:bg-gray-100 text-gray-700'
// //                   }
// //                 `}
// //               >
// //                 <Icon className="mr-3 w-5 h-5" />
// //                 <span>{section.name}</span>
// //               </motion.button>
// //             );
// //           })}
// //         </nav>
// //       </div>

// //       {/* Content Area */}
// //       <div 
// //         className="flex-1 p-6 md:p-10 overflow-y-auto"
// //         onClick={() => setIsMobileMenuOpen(false)}
// //       >
// //         {renderContent()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BackofficeDashboard;