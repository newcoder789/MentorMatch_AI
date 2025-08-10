import redisClient from '../config/redisClient.js';

export async function findMatches(userId, topK = 5) {
  const userKey = `user:${userId}`;
  const userProfile = await redisClient.hGetAll(userKey);

  if (!userProfile.embedding) throw new Error('User has no embedding');

  const embedding = JSON.parse(userProfile.embedding);

  // Redis vector similarity search
  const results = await redisClient.ft.search('idx:users', '*', {
    VECTOR: {
      field: 'embedding',
      vector: embedding,
      K: topK,
      metric: 'COSINE'
    }
  });

  return results.documents.map(doc => ({
    id: doc.id,
    name: doc.value.name,
    role: doc.value.role,
    skills: JSON.parse(doc.value.skills),
    compatibility: doc.value.score // from vector search
  }));
}
