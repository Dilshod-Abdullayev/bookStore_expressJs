// routes/books.js
const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController'); 
// Barcha kitoblarni olish
router.get('/', BookController.getAllBooks);
// Ma'lum bir kitobni olish
router.get('/:id', BookController.getBookById);
// Yangi kitob qo'shish
router.post('/', BookController.createBook);
// Kitobni yangilash
router.put('/:id', BookController.updateBook);

// Kitobni o'chirish
router.delete('/:id', BookController.deleteBook);

module.exports = router;