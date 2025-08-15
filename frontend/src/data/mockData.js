export const mockUsers = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'mentor',
    skills: ['Machine Learning', 'Python', 'Data Science', 'Research Methods'],
    interests: ['AI Ethics', 'Computer Vision', 'Educational Technology'],
    experience: 8,
    bio: 'AI Research Professor specializing in ethical ML applications',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?w=150',
    university: 'Stanford University',
    department: 'Computer Science',
    reputationScore: 4.9,
    matchingPreferences: {
      skillLevel: 'intermediate',
      meetingFrequency: 'weekly',
      communicationStyle: 'formal'
    },
    joinedAt: '2024-01-15',
    lastActive: '2024-12-10T10:30:00Z'
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    role: 'mentee',
    skills: ['JavaScript', 'React', 'Basic Python'],
    interests: ['Web Development', 'AI/ML', 'Startup Culture'],
    experience: 2,
    bio: 'CS sophomore eager to learn about AI and build impactful projects',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=150',
    university: 'Stanford University',
    department: 'Computer Science',
    reputationScore: 4.2,
    matchingPreferences: {
      skillLevel: 'beginner',
      meetingFrequency: 'weekly',
      communicationStyle: 'casual'
    },
    joinedAt: '2024-09-01',
    lastActive: '2024-12-10T09:15:00Z'
  },
  {
    id: '3',
    name: 'Prof. Michael Thompson',
    role: 'mentor',
    skills: ['Data Engineering', 'Redis', 'System Design', 'DevOps'],
    interests: ['Database Technologies', 'Cloud Architecture', 'Performance Optimization'],
    experience: 12,
    bio: 'Industry veteran turned educator, expert in scalable systems',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?w=150',
    university: 'MIT',
    department: 'Computer Science',
    reputationScore: 4.8,
    matchingPreferences: {
      skillLevel: 'advanced',
      meetingFrequency: 'biweekly',
      communicationStyle: 'mixed'
    },
    joinedAt: '2024-02-20',
    lastActive: '2024-12-10T11:00:00Z'
  },
  {
    id: '4',
    name: 'Emily Wang',
    role: 'mentee',
    skills: ['Java', 'Algorithms', 'Data Structures'],
    interests: ['Backend Development', 'Database Systems', 'System Architecture'],
    experience: 1,
    bio: 'First-year grad student passionate about building robust systems',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?w=150',
    university: 'MIT',
    department: 'Computer Science',
    reputationScore: 4.0,
    matchingPreferences: {
      skillLevel: 'beginner',
      meetingFrequency: 'weekly',
      communicationStyle: 'formal'
    },
    joinedAt: '2024-08-25',
    lastActive: '2024-12-10T08:45:00Z'
  }
];

export const mockMatches = [
  {
    id: '1',
    mentorId: '1',
    menteeId: '2',
    compatibilityScore: 0.89,
    skillAlignment: 0.92,
    personalityFit: 0.85,
    scheduleCompatibility: 0.90,
    status: 'active',
    createdAt: '2024-12-01T10:00:00Z',
    acceptedAt: '2024-12-01T14:30:00Z',
    feedback: {
      rating: 5,
      comment: 'Excellent mentor! Very patient and knowledgeable.',
      sentiment: 'positive'
    }
  },
  {
    id: '2',
    mentorId: '3',
    menteeId: '4',
    compatibilityScore: 0.94,
    skillAlignment: 0.96,
    personalityFit: 0.88,
    scheduleCompatibility: 0.98,
    status: 'pending',
    createdAt: '2024-12-10T09:00:00Z'
  }
];

export const mockActivities = [
  {
    id: '1',
    userId: '2',
    type: 'match_accepted',
    timestamp: '2024-12-01T14:30:00Z',
    data: { mentorName: 'Dr. Sarah Chen', compatibilityScore: 0.89 }
  },
  {
    id: '2',
    userId: '4',
    type: 'match_created',
    timestamp: '2024-12-10T09:00:00Z',
    data: { mentorName: 'Prof. Michael Thompson', compatibilityScore: 0.94 }
  },
  {
    id: '3',
    userId: '1',
    type: 'feedback_given',
    timestamp: '2024-12-09T16:00:00Z',
    data: { rating: 5, menteeName: 'Alex Rodriguez' }
  }
];

export const mockAnalytics = {
  totalUsers: 1247,
  activeMatches: 89,
  avgCompatibilityScore: 0.87,
  successRate: 0.92,
  monthlyGrowth: 0.34,
  skillDistribution: {
    'Machine Learning': 342,
    'Python': 567,
    'JavaScript': 423,
    'React': 298,
    'Data Science': 234,
    'System Design': 189,
    'Redis': 76,
    'DevOps': 145
  },
  departmentStats: {
    'Computer Science': 567,
    'Data Science': 234,
    'Engineering': 298,
    'Mathematics': 148
  },
  timeSeriesData: Array.from({ length: 30 }, (_, i) => ({
    timestamp: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString(),
    users: Math.floor(Math.random() * 50) + 1200,
    matches: Math.floor(Math.random() * 20) + 80,
    feedback: Math.floor(Math.random() * 15) + 25
  }))
};

export const mockNotifications = [
  {
    id: '1',
    userId: '4',
    type: 'match_found',
    title: 'New High-Compatibility Match Found!',
    message: 'Prof. Michael Thompson (94% compatibility) is interested in mentoring you.',
    timestamp: '2024-12-10T09:00:00Z',
    read: false,
    priority: 'high'
  },
  {
    id: '2',
    userId: '2',
    type: 'skill_recommendation',
    title: 'Skill Gap Analysis Complete',
    message: 'We recommend learning TensorFlow to bridge your ML skills gap.',
    timestamp: '2024-12-09T15:30:00Z',
    read: true,
    priority: 'medium'
  },
  {
    id: '3',
    userId: '1',
    type: 'match_accepted',
    title: 'Mentorship Match Accepted',
    message: 'Alex Rodriguez has accepted your mentorship offer!',
    timestamp: '2024-12-01T14:30:00Z',
    read: true,
    priority: 'high'
  }
];

export const mockSkillGaps = [
  {
    skill: 'Deep Learning',
    currentLevel: 2,
    targetLevel: 4,
    gap: 2,
    learningPath: ['Neural Networks Basics', 'TensorFlow/PyTorch', 'CNN Architecture', 'Advanced Optimization'],
    estimatedTime: '3-4 months',
    mentorRecommendations: ['Dr. Sarah Chen', 'Prof. Lisa Park']
  },
  {
    skill: 'System Design',
    currentLevel: 1,
    targetLevel: 3,
    gap: 2,
    learningPath: ['Scalability Principles', 'Database Design', 'Caching Strategies', 'Microservices'],
    estimatedTime: '2-3 months',
    mentorRecommendations: ['Prof. Michael Thompson', 'Dr. James Wilson']
  }
];

