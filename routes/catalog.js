const express = require('express')
const router = express.Router()

// import controller modules
const bookController = require('../controllers/bookController')
const authorController = require('../controllers/authorController')
const genreController = require('../controllers/genreController')

// GET catalog home page
router.get('/', bookController.index)

// Routes of Book
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

// Routes of Author
// this route must come before routes that show Author (via id)
// GET request to create Author
router.get('/author/create', authorController.authorCreateGet)

// POST request to create Author
router.post('/author/create', authorController.authorCreatePost)

// GET request to delete Author
router.get('/author/:id/delete', authorController.authorDeleteGet)

// POST request to delete Author
router.post('/author/:id/delete', authorController.authorDeletePost)

// GET request to update Author
router.get('/author/:id/update', authorController.authorUpdateGet)

// POST request to update Author
router.post('/author/:id/update', authorController.authorUpdatePost)

// GET request for one single Author details
router.get('/author/:id', authorController.authorDetail)

// GET request for list of all Authors
router.get('/authors', authorController.authorList)

// Routes of Genre
// this route must come before routes that show Genre (via id)
// GET request to create Genre
router.get('/genre/create', genreController.genreCreateGet)

// POST request to create Genre
router.post('/genre/create', genreController.genreCreatePost)

// GET request to delete Genre
router.get('/genre/:id/delete', genreController.genreDeleteGet)

// POST request to delete Genre
router.post('/genre/:id/delete', genreController.genreDeletePost)

// GET request to update Genre
router.get('/genre/:id/update', genreController.genreUpdateGet)

// POST request to update Genre
router.post('/genre/:id/update', genreController.genreUpdatePost)

// GET request for one single Genre details
router.get('/genre/:id', genreController.genreDetail)

// GET request for list of all Genre
router.get('/genres', genreController.genreList)

module.exports = router
