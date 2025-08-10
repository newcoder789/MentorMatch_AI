import redisClient from './config/redisClient.js';
import { generateEmbedding } from './utils/embeddings.js';

const users = [
  {
    id: 1,
    name: "Alice",
    role: "mentor",
    skills: ["Python", "AI", "ML"],
    bio: "Experienced AI researcher."
  },
  {
    id: 2,
    name: "Bob",
    role: "mentee",
    skills: ["Python", "Data Science"],
    bio: "Looking to learn ML."
  }
];

async function seed() {
  for (let user of users) {
    const embedding = await generateEmbedding(
      `${user.name} ${user.bio} Skills: ${user.skills.join(', ')}`
    );

    await redisClient.hSet(`user:${user.id}`, {
      name: user.name,
      role: user.role,
      skills: JSON.stringify(user.skills),
      bio: user.bio,
      embedding: JSON.stringify(embedding)
    });
  }
  console.log("Data seeded");
  process.exit();
}

seed();
