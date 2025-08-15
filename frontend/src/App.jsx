import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AIMatching from './components/AIMatching';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import RedisMetrics from './components/RedisMetrics';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import CompetitionShowcase from './components/CompetitionShowcase';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'matching':
        return <AIMatching />;
      case 'profile':
        return <Profile />;
      case 'notifications':
        return <Notifications />;
      case 'redis-metrics':
        return <RedisMetrics />;
      case 'analytics':
        return <AdvancedAnalytics />;
      case 'competition':
        return <CompetitionShowcase />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      {/* Footer with Redis branding */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>MentorMatch AI - Powered by Redis Stack 8</p>
            <p className="mt-1">Built for the Redis AI Challenge • Real-Time AI Innovation Category</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;