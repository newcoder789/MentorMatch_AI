import React, { useState, useEffect } from 'react';
import { Activity, Database, Zap, Clock, TrendingUp, Server } from 'lucide-react';

export default function RedisMetrics() {
  const [metrics, setMetrics] = useState({
    connections: 1247,
    operations: 45623,
    memory: '2.3GB',
    hitRate: 98.7,
    latency: 0.8,
    throughput: 15420
  });

  const [realTimeData, setRealTimeData] = useState([]);

  useEffect(() => {
    // Simulate real-time Redis metrics updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        operations: prev.operations + Math.floor(Math.random() * 100),
        latency: Math.max(0.1, prev.latency + (Math.random() - 0.5) * 0.2),
        throughput: prev.throughput + Math.floor(Math.random() * 200 - 100)
      }));

      setRealTimeData(prev => {
        const newData = {
          timestamp: Date.now(),
          operations: metrics.operations,
          latency: metrics.latency,
          memory: parseFloat(metrics.memory)
        };
        return [...prev.slice(-19), newData];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [metrics.operations, metrics.latency, metrics.throughput]);

  const redisModules = [
    {
      name: 'Vector Search',
      status: 'active',
      operations: '12.4K/sec',
      description: 'Semantic similarity matching',
      color: 'bg-green-500'
    },
    {
      name: 'TimeSeries',
      status: 'active',
      operations: '8.7K/sec',
      description: 'Real-time analytics',
      color: 'bg-blue-500'
    },
    {
      name: 'JSON',
      status: 'active',
      operations: '15.2K/sec',
      description: 'Profile data storage',
      color: 'bg-purple-500'
    },
    {
      name: 'Pub/Sub',
      status: 'active',
      operations: '3.1K/sec',
      description: 'Live notifications',
      color: 'bg-yellow-500'
    },
    {
      name: 'Streams',
      status: 'active',
      operations: '5.8K/sec',
      description: 'Event sourcing',
      color: 'bg-indigo-500'
    },
    {
      name: 'Bloom',
      status: 'active',
      operations: '2.3K/sec',
      description: 'Skill verification',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Redis Performance Overview */}
      <div className="bg-redis-gradient text-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Database className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Redis Stack 8 Performance</h2>
              <p className="text-redis-100">Real-time monitoring and optimization metrics</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-500 bg-opacity-20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-300">All Systems Operational</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{metrics.connections.toLocaleString()}</div>
            <div className="text-sm text-redis-100">Active Connections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{metrics.operations.toLocaleString()}</div>
            <div className="text-sm text-redis-100">Operations/sec</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{metrics.memory}</div>
            <div className="text-sm text-redis-100">Memory Usage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{metrics.hitRate}%</div>
            <div className="text-sm text-redis-100">Cache Hit Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{metrics.latency.toFixed(1)}ms</div>
            <div className="text-sm text-redis-100">Avg Latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{metrics.throughput.toLocaleString()}</div>
            <div className="text-sm text-redis-100">Throughput</div>
          </div>
        </div>
      </div>

      {/* Redis Modules Status */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Server className="w-5 h-5 text-redis-500" />
          <span>Redis Stack Modules</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {redisModules.map((module, index) => (
            <div key={module.name} className="border border-gray-200 rounded-lg p-4 hover:border-redis-300 transition-colors animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 ${module.color} rounded-full`}></div>
                  <h4 className="font-medium text-gray-900">{module.name}</h4>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                  {module.status.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{module.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Operations</span>
                <span className="text-sm font-medium text-gray-900">{module.operations}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Optimization Tips */}
      <div className="bg-gradient-to-r from-redis-50 to-redis-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Zap className="w-5 h-5 text-redis-500" />
          <span>Redis Optimization Strategies</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Connection Management</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-redis-500 rounded-full"></div>
                <span>Connection pooling with 50-100 connections</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-redis-500 rounded-full"></div>
                <span>Pipeline operations for batch processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-redis-500 rounded-full"></div>
                <span>Persistent connections with keepalive</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Memory Optimization</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-redis-500 rounded-full"></div>
                <span>TTL-based expiration for temporary data</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-redis-500 rounded-full"></div>
                <span>Compression for large JSON documents</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-redis-500 rounded-full"></div>
                <span>Memory-efficient data structures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}