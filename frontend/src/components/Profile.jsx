import React, { useState } from 'react';
import { User, Edit2, Star, TrendingUp, Award, Clock, Target } from 'lucide-react';
import { mockUsers } from '../data/mockData';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeUser] = useState(mockUsers[1]); // Using Alex Rodriguez as active user

  const skillCategories = {
    'Technical': ['JavaScript', 'React', 'Basic Python'],
    'Learning': ['Machine Learning', 'Data Science', 'AI/ML'],
    'Interests': ['Web Development', 'Startup Culture']
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Profile Header */}
      <div className="bg-redis-gradient text-white rounded-xl p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src={activeUser.avatar} 
              alt={activeUser.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold">{activeUser.name}</h2>
              <p className="text-redis-100 mb-2">{activeUser.role.charAt(0).toUpperCase() + activeUser.role.slice(1)} • {activeUser.university}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-medium">{activeUser.reputationScore}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{activeUser.experience} years experience</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg hover:bg-opacity-30 transition-all duration-200 flex items-center space-x-2"
          >
            <Edit2 className="w-4 h-4" />
            <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            {isEditing ? (
              <textarea
                defaultValue={activeUser.bio}
                className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-redis-500 focus:border-transparent"
                placeholder="Tell others about yourself..."
              />
            ) : (
              <p className="text-gray-600 leading-relaxed">{activeUser.bio}</p>
            )}
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Interests</h3>
            <div className="space-y-4">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-redis-50 text-redis-700 rounded-full text-sm hover:bg-redis-100 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                    {isEditing && (
                      <button className="px-3 py-1 border-2 border-dashed border-gray-300 rounded-full text-sm text-gray-500 hover:border-redis-300 hover:text-redis-600 transition-colors">
                        + Add Skill
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matching Preferences */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Matching Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Skill Level</label>
                <select 
                  defaultValue={activeUser.matchingPreferences.skillLevel}
                  disabled={!isEditing}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redis-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Frequency</label>
                <select 
                  defaultValue={activeUser.matchingPreferences.meetingFrequency}
                  disabled={!isEditing}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redis-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Communication Style</label>
                <select 
                  defaultValue={activeUser.matchingPreferences.communicationStyle}
                  disabled={!isEditing}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-redis-500 focus:border-transparent disabled:bg-gray-50"
                >
                  <option value="formal">Formal</option>
                  <option value="casual">Casual</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Profile Stats */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Profile Views</span>
                <span className="font-semibold text-gray-900">127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Match Requests</span>
                <span className="font-semibold text-gray-900">23</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Active Connections</span>
                <span className="font-semibold text-gray-900">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Reputation Score</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">{activeUser.reputationScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-yellow-800">Quick Learner</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-blue-800">Rising Star</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <Target className="w-6 h-6 text-green-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-green-800">Goal Setter</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <User className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <p className="text-xs font-medium text-purple-800">Networker</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-900">Matched with Dr. Sarah Chen</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-900">Updated skill preferences</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm text-gray-900">Completed JavaScript assessment</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}