// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Book = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.ObjectId,
    ref: 'Author',
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  genre: [{
    type: Schema.ObjectId,
    ref: 'Genre'
  }]
})

// virtual property of book's URL
Book
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id
})

// export the model
module.exports = mongoose.model('Book', Book)
