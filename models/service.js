/*
  服务商模型
 */
const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  title: {type: String},
  orderCount: {type: Number},
  positiveRate: {type: String},
  imgUrl: {type: String}
}/*{
  collection: 'service'
}*/)
module.exports = mongoose.model('services', serviceSchema)