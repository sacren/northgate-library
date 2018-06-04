const Genre = require('../models/genre')

// show the list of all Genre
exports.genreList = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre list')
}

// show detailed page for specific Genre
exports.genreDetail = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id)
}

// show Genre create form on GET
exports.genreCreateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre create GET')
}

// handle Genre create on POST
exports.genreCreatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre create POST')
}

// show Genre delete form on GET
exports.genreDeleteGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre delete GET')
}

// handle Genre delete on POST
exports.genreDeletePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre delete POST')
}

// show Genre update form on GET
exports.genreUpdateGet = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update GET')
}

// handle Genre update on POST
exports.genreUpdatePost = function (req, res) {
  res.send('NOT IMPLEMENTED: Genre update POST')
}
