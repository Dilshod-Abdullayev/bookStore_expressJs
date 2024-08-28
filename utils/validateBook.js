function validateBook(book) {
    const errors = [];
    if (!book.name || typeof book.name !== 'string') {
        errors.push('Noto`g`ri kitob nomi');
    }
    
    if (!book.author || typeof book.author !== 'string') {
        errors.push('Noto`g`ri muallif nomi');
    }
    
    if (!Array.isArray(book.tags)) {
        errors.push('Tags bo`limi massiv bo`lishi kerak');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

module.exports = validateBook;
