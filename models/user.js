/*
  定义用户模型并向外暴露
 */
// 引入mongoose
const mongoose = require('mongoose')
// 定义Schema
const userSchema = new mongoose.Schema({
  serviceIndex: {type: String},
  serviceType: {type: Array},
  shopList: {type: Array}
})
// 向外暴露Schema
module.exports = mongoose.model('shops', userSchema)
