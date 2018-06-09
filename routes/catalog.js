const router = require('express').Router()

// import controller modules
const bookController = require('../controllers/bookController')
const authorController = require('../controllers/authorController')
const genreController = require('../controllers/genreController')
const bookinstanceController = require('../controllers/bookinstanceController')

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

// Routes of Bookinstance
// this route must come before routes that show Bookinstance (via id)
// GET request to create Bookinstance
router.get('/bookinstance/create', bookinstanceController.bookinstanceCreateGet)

// POST request to create Bookinstance
router.post('/bookinstance/create', bookinstanceController.bookinstanceCreatePost)

// GET request to delete Bookinstance
router.get('/bookinstance/:id/delete', bookinstanceController.bookinstanceDeleteGet)

// POST request to delete Bookinstance
router.post('/bookinstance/:id/delete', bookinstanceController.bookinstanceDeletePost)

// GET request to update Bookinstance
router.get('/bookinstance/:id/update', bookinstanceController.bookinstanceUpdateGet)

// POST request to update Bookinstance
router.post('/bookinstance/:id/update', bookinstanceController.bookinstanceUpdatePost)

// GET request for one single Bookinstance details
router.get('/bookinstance/:id', bookinstanceController.bookinstanceDetail)

// GET request for list of all Bookinstance
router.get('/bookinstances', bookinstanceController.bookinstanceList)

module.exports = router
