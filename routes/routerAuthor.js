const express = require('express');
const authorController = require('../controllers/AuthorController');

const routerAuthor = express.Router();

routerAuthor.post('/add-author',authorController.addAuthor);
routerAuthor.get('/get-all-author/:id',authorController.getAllAuthor)
routerAuthor.get('/get-author/:id',authorController.getAuthorById)
routerAuthor.put('/update-author/:id',authorController.updateAuthor)
routerAuthor.delete('/delete-author/:id',authorController.deleteAuthor)

module.exports = routerAuthor;