const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  addBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
  getBookBySpecificUser,
} = require("../controllers/bookController");
const { ImageUpload, upload } = require("../services/ImageUploadService");
const router = express.Router();
// *************************** //
//GET
router.get('/user', authMiddleware,getBookBySpecificUser);
router.route("/").get(getAllBooks);
router.route("/:id").get(getBookById);
// *************************** //
//POST
router.route("/").post(addBook);

// *************************** //
//PUT
router.route("/:id").put(updateBookById);

// *************************** //
//DELETE
router.route("/:id").delete(deleteBookById);

module.exports = router;
