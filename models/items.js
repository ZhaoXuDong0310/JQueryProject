const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
  title: {type: String},
  name: {type: String},
  desc: {type: String},
  price: {type: Number},
  oldPrice: {type: Number}
})
module.exports = mongoose.model('items', itemSchema)