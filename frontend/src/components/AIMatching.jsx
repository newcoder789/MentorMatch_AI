import React, { useState } from 'react';
import { Brain, Zap, Target, TrendingUp, Users, Star, ArrowRight, Sparkles } from 'lucide-react';
import { mockUsers, mockMatches, mockSkillGaps } from '../data/mockData';

export default function AIMatching() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [matchingInProgress, setMatchingInProgress] = useState(false);

  const mentors = mockUsers.filter(user => user.role === 'mentor');
  const mentees = mockUsers.filter(user => user.role === 'mentee');

  const handleFindMatches = (user) => {
    setSelectedUser(user);
    setMatchingInProgress(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setMatchingInProgress(false);
    }, 2000);
  };

  const compatibilityFeatures = [
    { name: 'Skill Alignment', weight: 0.35, description: 'Vector similarity of skill embeddings' },
    { name: 'Personality Fit', weight: 0.25, description: 'ML model based on communication style' },
    { name: 'Schedule Match', weight: 0.20, description: 'Availability overlap analysis' },
    { name: 'Experience Gap', weight: 0.15, description: 'Optimal learning curve matching' },
    { name: 'Interest Overlap', weight: 0.05, description: 'Shared research/project interests' }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-redis-gradient text-white rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center space-x-2">
              <Brain className="w-8 h-8" />
              <span>AI-Powered Semantic Matching</span>
            </h2>
            <p className="text-redis-100">Multi-modal embeddings with Redis Vector Search</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">89.2%</div>
            <div className="text-sm text-redis-100">Avg Compatibility</div>
          </div>
        </div>
      </div>

      {/* Matching Algorithm Overview */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-redis-500" />
          <span>Advanced Matching Algorithm</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {compatibilityFeatures.map((feature, index) => (
            <div key={feature.name} className="text-center">
              <div className="w-12 h-12 bg-redis-gradient rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white font-bold">{(feature.weight * 100).toFixed(0)}%</span>
              </div>
              <h4 className="font-medium text-gray-900 text-sm">{feature.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Select User for AI Matching</h3>
          
          {/* Mentees */}
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Mentees Seeking Guidance</span>
            </h4>
            <div className="space-y-3">
              {mentees.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-redis-300 transition-colors">
                  <div className="flex items-center space-x-3">
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.university}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {user.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleFindMatches(user)}
                    className="px-4 py-2 bg-redis-gradient text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                  >
                    <Brain className="w-4 h-4" />
                    <span>Find Matches</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Matching Results */}
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h4 className="font-medium text-gray-700 mb-3 flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>AI Matching Results</span>
          </h4>
          
          {!selectedUser ? (
            <div className="text-center py-8 text-gray-500">
              <Brain className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Select a user to see AI-powered matches</p>
            </div>
          ) : matchingInProgress ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 border-4 border-redis-200 border-t-redis-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-700 font-medium">Processing with Redis Vector Search...</p>
              <p className="text-sm text-gray-500 mt-1">Analyzing {mentors.length} potential mentors</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <img src={selectedUser.avatar} alt={selectedUser.name} className="w-8 h-8 rounded-full" />
                <span className="font-medium text-gray-900">Matches for {selectedUser.name}</span>
              </div>
              
              {mentors.map((mentor, index) => {
                const compatibility = 0.95 - (index * 0.05);
                const match = mockMatches.find(m => m.mentorId === mentor.id && m.menteeId === selectedUser.id);
                
                return (
                  <div key={mentor.id} className="p-4 border border-gray-200 rounded-lg hover:border-redis-300 transition-colors animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <img src={mentor.avatar} alt={mentor.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-medium text-gray-900">{mentor.name}</p>
                          <p className="text-sm text-gray-500">{mentor.university}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-redis-600">{(compatibility * 100).toFixed(1)}%</div>
                        <div className="text-xs text-gray-500">Compatibility</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{(compatibility * 100 - 5).toFixed(0)}%</div>
                        <div className="text-xs text-gray-500">Skill Match</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{(compatibility * 100 + 2).toFixed(0)}%</div>
                        <div className="text-xs text-gray-500">Personality</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{mentor.reputationScore}</div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {mentor.skills.slice(0, 3).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <button className="px-3 py-1 bg-redis-gradient text-white rounded hover:shadow-md transition-all duration-200 text-sm flex items-center space-x-1">
                        <span>Connect</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Skill Gap Analysis */}
      {selectedUser && (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-redis-500" />
            <span>AI Skill Gap Analysis for {selectedUser.name}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockSkillGaps.map((gap, index) => (
              <div key={gap.skill} className="border border-gray-200 rounded-lg p-4 animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{gap.skill}</h4>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
                    Gap: {gap.gap} levels
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Current</span>
                    <span>Target</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-redis-gradient h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${(gap.currentLevel / gap.targetLevel) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Level {gap.currentLevel}</span>
                    <span>Level {gap.targetLevel}</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <p><strong>Estimated Time:</strong> {gap.estimatedTime}</p>
                  <p><strong>Learning Path:</strong> {gap.learningPath.slice(0, 2).join(', ')}...</p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 mb-1">Recommended Mentors:</p>
                  <div className="flex space-x-1">
                    {gap.mentorRecommendations.map((mentor) => (
                      <span key={mentor} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {mentor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}