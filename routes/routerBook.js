const express = require('express');
const bookController = require('../controllers/BookController');
const routerBook = express.Router();


routerBook.post('/add-book', bookController.addBook)
routerBook.get('/get-all-book', bookController.getAllBook)
routerBook.get('/get-book/:id', bookController.getAllBook)
routerBook.put('/update-book/:id', bookController.updateBook)
routerBook.delete('/delete-book/:id',bookController.deleteBook)
module.exports = routerBook;