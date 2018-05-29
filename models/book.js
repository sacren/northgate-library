// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Book = new Schema({
})

// export the model
module.exports = mongoose.model('Book', Book)
