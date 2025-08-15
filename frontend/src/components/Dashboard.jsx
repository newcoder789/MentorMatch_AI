import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Target, Zap, Clock, Star } from 'lucide-react';
import { mockAnalytics } from '../data/mockData';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: mockAnalytics.totalUsers.toLocaleString(),
      change: '+12.5%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Matches',
      value: mockAnalytics.activeMatches.toString(),
      change: '+8.2%',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      title: 'Avg Compatibility',
      value: `${(mockAnalytics.avgCompatibilityScore * 100).toFixed(1)}%`,
      change: '+2.1%',
      icon: Zap,
      color: 'bg-redis-500'
    },
    {
      title: 'Success Rate',
      value: `${(mockAnalytics.successRate * 100).toFixed(1)}%`,
      change: '+5.3%',
      icon: Star,
      color: 'bg-yellow-500'
    }
  ];

  const skillData = Object.entries(mockAnalytics.skillDistribution).map(([skill, count]) => ({
    skill,
    count
  }));

  const departmentData = Object.entries(mockAnalytics.departmentStats).map(([dept, count]) => ({
    department: dept,
    count
  }));

  const COLORS = ['#DC382D', '#B91C1C', '#991B1B', '#7F1D1D'];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-dark-gradient text-white rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Redis-Powered Analytics Dashboard</h2>
            <p className="text-gray-300">Real-time insights from Redis TimeSeries and RedisJSON</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-gray-300" />
            <span className="text-sm text-gray-300">Updated {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time Series Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Growth (Redis TimeSeries)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockAnalytics.timeSeriesData.slice(-14)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="timestamp" 
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Line type="monotone" dataKey="users" stroke="#DC382D" strokeWidth={3} dot={{ fill: '#DC382D', strokeWidth: 2 }} />
              <Line type="monotone" dataKey="matches" stroke="#059669" strokeWidth={2} dot={{ fill: '#059669', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution (RedisJSON)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ department, percent }) => `${department} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Distribution */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Skills (Redis Search & Bloom Filters)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={skillData.slice(0, 8)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="skill" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Bar dataKey="count" fill="#DC382D" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Redis Features Showcase */}
      <div className="bg-gradient-to-r from-redis-50 to-redis-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Redis Stack 8 Features in Action</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-medium text-gray-900">Vector Search</h4>
            <p className="text-sm text-gray-600 mt-1">Semantic matching with AI embeddings</p>
            <div className="mt-2 px-2 py-1 bg-green-100 text-green-800 rounded text-xs inline-block">
              89.2% avg compatibility
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-medium text-gray-900">TimeSeries</h4>
            <p className="text-sm text-gray-600 mt-1">Real-time analytics and metrics</p>
            <div className="mt-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs inline-block">
              {mockAnalytics.timeSeriesData.length} data points
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h4 className="font-medium text-gray-900">Pub/Sub</h4>
            <p className="text-sm text-gray-600 mt-1">Live notifications and updates</p>
            <div className="mt-2 px-2 py-1 bg-redis-100 text-redis-800 rounded text-xs inline-block">
              Real-time active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}