// import mongoose module
// set up schema interface
// define the model
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookInstance = new Schema({
  book: {type: Schema.ObjectId, ref: 'Book', required: true},
  imprint: {type: String, required: true},
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance'
  },
  duedate: {type: Date, default: Date.now}
})

// export the model
module.exports = mongoose.model('BookInstance', BookInstance)
