// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Author = new Schema({
  firstname: {type: String, required: true, max: 100},
  lastname: {type: String, required: true, max: 100},
  birthdate: {type: Date},
  deathdate: {type: Date}
})

// virtual property of author's full name
Author
.virtual('name')
.get(function () {
  return this.lastname + ', ' + this.firstname
})

// export the model
module.exports = mongoose.model('Author', Author)
