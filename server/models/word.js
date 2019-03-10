const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wordSchema = new Schema({
  name: String,
  meaning: String,
  phonetic: String
})

module.exports = mongoose.model('Word', wordSchema)
