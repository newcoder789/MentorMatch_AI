import React, { useState } from 'react';
import { Bell, CheckCircle, Clock, User, Target, Lightbulb, AlertCircle } from 'lucide-react';
import { mockNotifications } from '../data/mockData';

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case 'match_found':
        return Target;
      case 'match_accepted':
        return CheckCircle;
      case 'skill_recommendation':
        return Lightbulb;
      case 'system':
        return AlertCircle;
      default:
        return Bell;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'high') return notif.priority === 'high';
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-dark-gradient text-white rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bell className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Notifications</h2>
              <p className="text-gray-300">Real-time updates via Redis Pub/Sub</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold">{unreadCount}</div>
              <div className="text-sm text-gray-300">Unread</div>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-green-500 bg-opacity-20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-300">Live Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {[
              { id: 'all', label: 'All Notifications' },
              { id: 'unread', label: `Unread (${unreadCount})` },
              { id: 'high', label: 'High Priority' }
            ].map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === filterOption.id
                    ? 'bg-redis-gradient text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 text-sm font-medium text-redis-600 hover:text-redis-700 transition-colors"
            disabled={unreadCount === 0}
          >
            Mark All Read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
            <p className="text-gray-500">
              {filter === 'unread' ? "You're all caught up!" : "No notifications match your current filter."}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification, index) => {
            const IconComponent = getIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-xl p-4 shadow-lg border-l-4 ${getPriorityColor(notification.priority)} transition-all duration-300 hover:shadow-xl animate-slideUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    notification.priority === 'high' ? 'bg-red-100' :
                    notification.priority === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      notification.priority === 'high' ? 'text-red-600' :
                      notification.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{notification.title}</h4>
                        <p className="text-gray-600 text-sm">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-redis-500 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(notification.timestamp).toLocaleString()}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          notification.priority === 'high' ? 'bg-red-100 text-red-800' :
                          notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {notification.priority.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-redis-600 hover:text-redis-700 font-medium transition-colors"
                          >
                            Mark Read
                          </button>
                        )}
                        {notification.type === 'match_found' && (
                          <button className="text-xs bg-redis-gradient text-white px-3 py-1 rounded-lg hover:shadow-md transition-all duration-200">
                            View Match
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Redis Integration Info */}
      <div className="bg-gradient-to-r from-redis-50 to-redis-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Notification System</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-gray-900">Redis Pub/Sub</span>
            </div>
            <p className="text-sm text-gray-600">Instant notification delivery</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Redis Streams</span>
            </div>
            <p className="text-sm text-gray-600">Event sourcing & history</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-redis-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Smart Filtering</span>
            </div>
            <p className="text-sm text-gray-600">AI-powered relevance scoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}