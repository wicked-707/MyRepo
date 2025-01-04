import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Code2, Palette, Layout, TrendingUp, Users, Clock } from 'lucide-react';

const API_URL = 'http://localhost:5000'; // Update with your API URL

const Dashboard = () => {
  const [projectStats, setProjectStats] = useState(null);
  const [monthlyTrends, setMonthlyTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [projectsResponse, trendsResponse] = await Promise.all([
          fetch(`${API_URL}/project-counts`),
          fetch(`${API_URL}/monthly-trends`),
        ]);

        if (!projectsResponse.ok || !trendsResponse.ok) {
          throw new Error('Failed to fetch data from the database.');
        }

        const projectsData = await projectsResponse.json();
        const trendsData = await trendsResponse.json();

        setProjectStats(projectsData);
        setMonthlyTrends(trendsData);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Unable to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="text-xl font-semibold text-gray-800">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="text-xl font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 space-y-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-8">Project Analytics Dashboard</h1>

      {/* Project Count Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-slate-700">
            <CardTitle className="text-sm font-medium">Software Projects</CardTitle>
            <Code2 className="h-6 w-6 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-black">{projectStats?.software || 0}</div>
            <p className="text-xs text-gray-500">Total projects uploaded</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-slate-700">
            <CardTitle className="text-sm font-medium">Graphics Projects</CardTitle>
            <Palette className="h-6 w-6 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-black">{projectStats?.graphics || 0}</div>
            <p className="text-xs text-gray-500">Total projects uploaded</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-slate-700">
            <CardTitle className="text-sm font-medium">UI/UX Projects</CardTitle>
            <Layout className="h-6 w-6 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-black">{projectStats?.uiux || 0}</div>
            <p className="text-xs text-gray-500">Total projects uploaded</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Monthly Trends Chart */}
        <Card className="bg-white shadow-lg rounded-lg p-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-700">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Monthly Project Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="software" stroke="#0088FE" />
                <Line type="monotone" dataKey="graphics" stroke="#00C49F" />
                <Line type="monotone" dataKey="uiux" stroke="#FFBB28" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Distribution Chart */}
        <Card className="bg-white shadow-lg rounded-lg p-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-700">
              <Users className="h-5 w-5 text-slate-700" />
              Project Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Software', value: projectStats?.software || 0 },
                    { name: 'Graphics', value: projectStats?.graphics || 0 },
                    { name: 'UI/UX', value: projectStats?.uiux || 0 },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Completion Timeline */}
        <Card className="bg-white shadow-lg rounded-lg p-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-700">
              <Clock className="h-5 w-5 text-orange-600" />
              Project Timeline Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completionTime" fill="#ffc658" name="Avg. Completion Time (days)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
