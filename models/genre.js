// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Genre = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 100
  }
})

// virtual property of genre's URL
Genre
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id
})

// export the model
module.exports = mongoose.model('Genre', Genre)
