// server/models/user.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const Book = prisma.book;

module.exports = { Book };
