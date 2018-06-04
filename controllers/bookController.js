const Book = require('../models/book')

exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: Site Home Page')
}

// show the list of all Authors
exports.bookList = function (req, res) {
  res.send('NOT IMPLEMENTED: Book list')
}

// show detailed page for specific Book
exports.bookDetail = function (req, res) {
  res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id)
}

// show Book create form on GET
exports.bookCreateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Book create GET')
}

// handle Book create on POST
exports.bookCreatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Book create POST')
}

// show Book delete form on GET
exports.bookDeleteGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Book delete GET')
}

// handle Book delete on POST
exports.bookDeletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Book delete POST')
}

// show Book update form on GET
exports.bookUpdateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Book update GET')
}

// handle Book update on POST
exports.bookUpdatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Book update POST')
}
