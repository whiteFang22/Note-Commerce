const mongoose = require('mongoose')

const pdfSchema = new mongoose.Schema({
   name: String,
   numPages: Number,
   university: String,
   year: Number,
   course: String,
   language: String,
   content: Buffer,
   creator: String
})

module.exports = mongoose.model('Pdf', pdfSchema)