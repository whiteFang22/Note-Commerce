const mongoose = require('mongoose')

// set up the schema
const userSchema = new mongoose.Schema({
   name: String,
   surname: String,
   email: {
      type: String,
      required: true,
      lowercase: true,
   },
   password: String,
   savedPdfs: {
      type: [String]
   },
   premium: {
      type: Boolean,
      default: false
   },
   subscriptionDate: {
      type: Date,
      default: null
   },
   subscriptionType: {
      type: String,
      default: ""
   }
})

// create some chema functions; no arrow functions are allowed
userSchema.methods.sayHi = function () {
   console.log(`Hi. My name is ${this.name}`)
}

userSchema.statics.findByName = function (name) {
   return this.find({ name: new RegExp(name, "i") })
}

// creates a virtual object inside the server (not in the db) called namedEmail
userSchema.virtual("namedEmail").get(function () {
   return `${this.name} <${this.email}>`
})

// crea il modello (collection) con uno schema ben definito
module.exports = mongoose.model('User', userSchema)