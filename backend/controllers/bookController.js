const jwt = require("jsonwebtoken");
const { Book } = require("../models/book");
const { User } = require("../models/user");

const logger = require("../utils/logger");
// const { uploadImage } = require("../services/ImageUploadService");
const addBook = async (req, res) => {
  const { name, genre, img_url, authorId, year } = req.body;

  try {
    const book = await Book.create({
      data: {
        name: name,
        genre: genre,
        year: parseInt(year),
        authorId: parseInt(authorId),
        img_url: img_url,
      },
    });
    if (!book) {
      return res.status(404).json({ error: "Error adding Book" });
    }
    res.json({ book });
  } catch (error) {
    console.error("Error Creating new Book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findMany({});
    if (!books) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ books });
  } catch (error) {
    console.error("Error fetching user books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getBookById = async (req, res) => {};
const updateBookById = async (req, res) => {};
const deleteBookById = async (req, res) => {};
const getBookBySpecificUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const books = await Book.findMany({
      where: {
        authorId: userId,
      },
      include: {
        Author: true,
      },
    });

    if (!books) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ books });
  } catch (error) {
    console.error("Error fetching user books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getBookBySpecificUser,
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
