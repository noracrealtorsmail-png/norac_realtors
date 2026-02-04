const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({}); // Pass empty object
console.log("Prisma Client initialized");
prisma.user.findMany()
    .then(u => console.log("Users found:", u.length))
    .catch(e => console.error("Error:", e))
    .finally(() => prisma.$disconnect());
