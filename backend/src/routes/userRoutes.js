import express from 'express';
const router = express.Router();

// Temporary mock data
const mockUsers = [
  { id: 1, name: 'Alice', role: 'mentee', skills: ['React', 'Node.js'] },
  { id: 2, name: 'Bob', role: 'mentor', skills: ['Redis', 'Machine Learning'] }
];

router.get('/', (req, res) => {
  res.json(mockUsers);
});

export default router;
