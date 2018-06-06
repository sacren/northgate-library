const express = require('express')
const router = express.Router()

// import controller modules
const bookController = require('../controllers/bookController')

// Routes of Book

// GET catalog home page
router.get('/', bookController.index)

// this route must come before routes that show Book (via id)
// GET request to create Book
router.get('/book/create', bookController.bookCreateGet)

// POST request to create Book
router.post('/book/create', bookController.bookCreatePost)

// GET request to delete Book
router.get('/book/:id/delete', bookController.bookDeleteGet)

// POST request to delete Book
router.post('/book/:id/delete', bookController.bookDeletePost)

// GET request to update Book
router.get('/book/:id/update', bookController.bookUpdateGet)

// POST request to update Book
router.post('/book/:id/update', bookController.bookUpdatePost)

// GET request for one single Book details
router.get('/book/:id', bookController.bookDetail)

// GET request for list of all Book items
router.get('/books', bookController.bookList)

module.exports = router
