// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookInstance = new Schema({
})

// export the model
module.exports = mongoose.model('BookInstance', BookInstance)
