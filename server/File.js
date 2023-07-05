const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  length: Number,
  // Altri campi opzionali...
});

module.exports =  mongoose.model('File', fileSchema);
