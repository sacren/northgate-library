const Author = require('../models/author')

// show the list of all Authors
exports.authorList = function (req, res) {
  res.send('NOT IMPLEMENTED: Author list')
}

// show detailed page for specific Author
exports.authorDetail = function (req, res) {
  res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id)
}

// show Author create form on GET
exports.authorCreateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create GET')
}

// handle Author create on POST
exports.authorCreatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Author create POST')
}

// show Author delete form on GET
exports.authorDeleteGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET')
}

// handle Author delete on POST
exports.authorDeletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST')
}

// show Author update form on GET
exports.authorUpdateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update GET')
}

// handle Author update on POST
exports.authorUpdatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Author update POST')
}
