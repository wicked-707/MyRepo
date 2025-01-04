import React from 'react';
import './styles/tailwind.css'; // Adjust the path if necessary
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import SaySomething from './pages/SaySomething';
import UploadingSite from './components/UploadingSite';
import GraphicDesignProjects from './pages/GraphicDesignProjects';
import UiUxProjects from './pages/UiUxProjects';
import ProjectsDisplay from './pages/ProjectsDisplay';
import Admin from './components/Admin';
import Dashboard from './pages/Dashboard';
import AdminLogin from './pages/AdminLogin';
import UIUXProjectsDisplay from './pages/UIUXProjectDisplay';

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div className="min-h-screen bg-gray-50">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/syasomething" element={<SaySomething />} />
                        <Route path="/add-project" element={<UploadingSite />} />
                        <Route path="/add-graphic-design-project" element={<GraphicDesignProjects />} />
                        <Route path="/add-uiux-project" element={<UiUxProjects />} />
                        <Route path="/view-projects" element={<ProjectsDisplay />} />
                        <Route path="/view-uiuxprojects" element={<UIUXProjectsDisplay />} />
                        <Route path="/login/admin" element={<Admin />} />
                        <Route path="/login" element={<AdminLogin />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/saysomething" element={<SaySomething />} />
                    </Routes>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;