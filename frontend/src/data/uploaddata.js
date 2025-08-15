import { createClient } from 'redis';
import { mockUsers, mockMatches, mockActivities, mockNotifications, mockSkillGaps, mockAnalytics } from './mockData.js';

const client = createClient({ url: 'redis://localhost:6379' });
await client.connect();

async function seed() {
  // Users
  for (const u of mockUsers) {
    await client.json.set(`user:${u.id}`, '$', u);
    await client.zAdd('leaderboard:mentors', [{ score: u.reputationScore, value: u.id }]);
  }

  // Matches
  for (const m of mockMatches) {
    await client.json.set(`match:${m.id}`, '$', m);
  }

  // Activities
  for (const a of mockActivities) {
    await client.json.set(`activity:${a.id}`, '$', a);
  }

  // Notifications
  for (const n of mockNotifications) {
    await client.json.set(`notification:${n.id}`, '$', n);
  }

  // Skill Gaps
  mockSkillGaps.forEach((sg, idx) => {
    client.json.set(`skillgap:${idx + 1}`, '$', sg);
  });

  console.log("✅ All mock data uploaded to Redis!");
}

seed();
