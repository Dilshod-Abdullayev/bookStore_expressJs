const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    tags: [String],
    isPublic: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;