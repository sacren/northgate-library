// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Genre = new Schema({
})

// export the model
module.exports = mongoose.model('Genre', Genre)
