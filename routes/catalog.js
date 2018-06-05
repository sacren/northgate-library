const express = require('express')
const router = express.Router()

// import controller modules
const bookController = require('../controllers/bookController')

// GET catalog home page
router.get('/', bookController.index)

module.exports = router
