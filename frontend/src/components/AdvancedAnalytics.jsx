import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter } from 'recharts';
import { Brain, TrendingUp, Users, Target, Clock, Zap } from 'lucide-react';

export default function AdvancedAnalytics() {
  const [timeRange, setTimeRange] = useState('7d');

  // Advanced analytics data
  const matchingEfficiencyData = [
    { time: '00:00', accuracy: 85, speed: 120, satisfaction: 4.2 },
    { time: '04:00', accuracy: 87, speed: 115, satisfaction: 4.3 },
    { time: '08:00', accuracy: 92, speed: 95, satisfaction: 4.6 },
    { time: '12:00', accuracy: 89, speed: 105, satisfaction: 4.4 },
    { time: '16:00', accuracy: 94, speed: 88, satisfaction: 4.7 },
    { time: '20:00', accuracy: 91, speed: 98, satisfaction: 4.5 }
  ];

  const aiPerformanceMetrics = [
    { metric: 'Semantic Accuracy', value: 94, fullMark: 100 },
    { metric: 'Response Time', value: 88, fullMark: 100 },
    { metric: 'User Satisfaction', value: 92, fullMark: 100 },
    { metric: 'Match Success Rate', value: 89, fullMark: 100 },
    { metric: 'Skill Alignment', value: 96, fullMark: 100 },
    { metric: 'Personality Fit', value: 85, fullMark: 100 }
  ];

  const redisPerformanceData = [
    { operation: 'Vector Search', latency: 12, throughput: 8500 },
    { operation: 'JSON Operations', latency: 3, throughput: 15000 },
    { operation: 'TimeSeries Insert', latency: 1, throughput: 25000 },
    { operation: 'Pub/Sub Delivery', latency: 0.5, throughput: 50000 },
    { operation: 'Stream Processing', latency: 2, throughput: 18000 },
    { operation: 'Bloom Filter Check', latency: 0.1, throughput: 100000 }
  ];

  const advancedMetrics = [
    {
      title: 'AI Model Accuracy',
      value: '94.2%',
      change: '+2.1%',
      icon: Brain,
      color: 'bg-purple-500',
      description: 'Multi-modal embedding accuracy'
    },
    {
      title: 'Redis Query Speed',
      value: '12ms',
      change: '-15%',
      icon: Zap,
      color: 'bg-yellow-500',
      description: 'Average vector search latency'
    },
    {
      title: 'Match Success Rate',
      value: '89.7%',
      change: '+5.3%',
      icon: Target,
      color: 'bg-green-500',
      description: 'Long-term relationship success'
    },
    {
      title: 'User Engagement',
      value: '4.6/5',
      change: '+0.3',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Average user satisfaction score'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-dark-gradient text-white rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Advanced AI & Redis Analytics</h2>
            <p className="text-gray-300">Deep performance insights and optimization metrics</p>
          </div>
          <div className="flex space-x-2">
            {['1h', '24h', '7d', '30d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  timeRange === range
                    ? 'bg-white text-gray-900'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advancedMetrics.map((metric, index) => (
          <div key={metric.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
              <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Performance Radar */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Model Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={aiPerformanceMetrics}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#DC382D"
                fill="#DC382D"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Redis Performance Scatter */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Redis Operations Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={redisPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="latency" 
                name="Latency (ms)" 
                type="number"
                domain={[0, 'dataMax + 2']}
              />
              <YAxis 
                dataKey="throughput" 
                name="Throughput (ops/sec)" 
                type="number"
                domain={[0, 'dataMax + 5000']}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg">
                        <p className="font-medium">{data.operation}</p>
                        <p className="text-sm">Latency: {data.latency}ms</p>
                        <p className="text-sm">Throughput: {data.throughput.toLocaleString()} ops/sec</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter dataKey="throughput" fill="#DC382D" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Matching Efficiency Trends */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Matching Efficiency Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={matchingEfficiencyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="accuracy" 
                stackId="1" 
                stroke="#DC382D" 
                fill="#DC382D" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="speed" 
                stackId="2" 
                stroke="#059669" 
                fill="#059669" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-r from-redis-50 to-redis-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights & Optimizations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h4 className="font-medium text-gray-900">Vector Search Optimization</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Achieved 40% latency reduction through index optimization and query caching.
            </p>
            <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
              12ms avg response time
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-gray-900">Real-time Processing</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Redis Streams enable sub-100ms notification delivery with guaranteed ordering.
            </p>
            <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">
              50K+ events/sec
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium text-gray-900">AI Model Accuracy</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Multi-modal embeddings improved matching accuracy by 23% over traditional methods.
            </p>
            <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded">
              94.2% accuracy rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}