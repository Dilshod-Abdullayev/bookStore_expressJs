// controllers/BookController.js

const Book = require('../models/Book');

// Kitoblarni olish
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ma'lum bir kitobni olish
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Kitob topilmadi' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yangi kitob qo'shish
exports.createBook = async (req, res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        tags: req.body.tags,
        isPublic: req.body.isPublic
    });

    try {
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Kitobni yangilash
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: 'Kitob topilmadi' });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Kitobni o'chirish
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Kitob topilmadi' });
        res.json({ message: 'Kitob o\'chirildi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};