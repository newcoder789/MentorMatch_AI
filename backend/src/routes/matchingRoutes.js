import express from 'express';
import { findMatches } from '../services/matchingService.js';

const router = express.Router();

router.get('/:userId', async (req, res) => {
  try {
    const matches = await findMatches(req.params.userId);
    res.json({ matches });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
